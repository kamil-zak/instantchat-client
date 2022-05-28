import { useQuery } from '@apollo/client';
import { useAuth } from '../../../../providers/AuthProvider';
import { ConversationsListWrapper } from './ConversationsList.styles';
import { Key } from 'react';
import ConversationItem from '../ConversationItem/ConversationItem';
import { GET_CONVERSATIONS, IGetConversationsArgs, IGetConversationsData } from '../../../../apollo/gql/queries/conversation';
import ConversationsEmpty from '../ConversationsEmpty/ConversationsEmpty';
import { LoadingBar } from '../../../../components/LoadingBar/LoadingBar';

const ConversationsList = () => {
  const { userId } = useAuth();
  const { data } = useQuery<IGetConversationsData, IGetConversationsArgs>(GET_CONVERSATIONS, {
    variables: { userId: userId },
  });
  if (!data) return <LoadingBar />;
  return (
    <ConversationsListWrapper>
      {data.conversations.map((conversation) => (
        <ConversationItem key={conversation.id as Key} {...conversation} />
      ))}
      {!data.conversations.length && <ConversationsEmpty />}
    </ConversationsListWrapper>
  );
};

export default ConversationsList;
