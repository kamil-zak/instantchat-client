import { useQuery } from '@apollo/client';
import { useAuth } from '../../../../providers/AuthProvider';
import { ConversationsListWrapper } from './ConversationsList.styles';
import { Key } from 'react';
import ConversationItem from '../ConversationItem/ConversationItem';
import { GET_CONVERSATIONS, IGetConversationsArgs, IGetConversationsData } from '../../../../apollo/gql/queries/conversation';
import ConversationsEmpty from '../ConversationsEmpty/ConversationsEmpty';

const ConversationsList = () => {
  const { user } = useAuth();
  const { data } = useQuery<IGetConversationsData, IGetConversationsArgs>(GET_CONVERSATIONS, {
    variables: { userId: user.id },
  });
  const conversations = data?.conversations ?? [];
  return (
    <ConversationsListWrapper>
      {conversations.map((conversation) => (
        <ConversationItem key={conversation.id as Key} {...conversation} />
      ))}
      {!conversations.length && <ConversationsEmpty />}
    </ConversationsListWrapper>
  );
};

export default ConversationsList;
