import { Link } from 'react-router-dom';
import { ConversationItemContent, ConversationItemDetails, ConversationItemWrapper } from './ConversationItem.styles';
import userImage from '../../../../assets/user.png';
import { formatTime } from '../../../../utils/format';
import StyledText from '../../../../components/StyledText/StyledText';
import { useParams } from 'react-router';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { IConversation } from '../../../../interfaces/conversation';
import { CONVERSATION_UNREAD_FRAGMENT } from '../../../../apollo/gql/fragments';
import { IMarkAsReadArgs, MARK_AS_READ } from '../../../../apollo/gql/mutations/message';

const ConversationItem = ({ id, chat, latestMessage, unreadCount }: IConversation) => {
  const isActive = useParams()?.conversationId === id;

  const [markAsRead] = useMutation<null, IMarkAsReadArgs>(MARK_AS_READ, {
    variables: { conversationId: id },
    update: (cache) => {
      cache.writeFragment({
        id: `Conversation:${id}`,
        fragment: CONVERSATION_UNREAD_FRAGMENT,
        data: { unreadCount: 0 },
      });
    },
  });

  useEffect(() => {
    if (isActive && unreadCount) {
      markAsRead();
    }
  }, [isActive, unreadCount, markAsRead]);

  return (
    <Link to={id as any}>
      <ConversationItemWrapper isActive={isActive}>
        <img src={userImage} alt="" />
        <ConversationItemDetails>
          <StyledText size="xs" bold={!!unreadCount}>
            {chat.name}
            {unreadCount ? ` (${unreadCount})` : ''}
          </StyledText>
          <StyledText size="xxs" bold={!!unreadCount}>
            <ConversationItemContent>
              {latestMessage.isResponse ? 'You: ' : ''}
              {latestMessage.content}
            </ConversationItemContent>
          </StyledText>
        </ConversationItemDetails>
        <StyledText size="xxs">{formatTime(latestMessage.time)}</StyledText>
      </ConversationItemWrapper>
    </Link>
  );
};

export default ConversationItem;
