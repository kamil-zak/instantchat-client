import { useSubscription } from '@apollo/client';
import { useAuth } from '../providers/AuthProvider';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { playNotify } from '../services/sounds';
import { sliceText } from '../utils/format';
import { GET_CONVERSATIONS, IGetConversationsData } from './queries/conversation';
import { GET_ONLY_MESSAGES, IMessageSubArgs, IMessageSubData, MESSAGE_SUB } from './queries/message';

const MessageSubscriber = () => {
  const { user } = useAuth();
  const activeConversation = useParams().conversationId;

  useSubscription<IMessageSubData, IMessageSubArgs>(MESSAGE_SUB, {
    variables: { userId: user.id },
    onSubscriptionData: ({ subscriptionData, client }) => {
      const newMessage = subscriptionData.data?.newMessage;
      if (!newMessage) return;
      const { conversationId } = newMessage;

      const data = { getMessages: { messages: [newMessage.message] } };
      client.writeQuery({ query: GET_ONLY_MESSAGES, variables: { conversationId }, data });

      const queryData = client.readQuery<IGetConversationsData>({
        query: GET_CONVERSATIONS,
      });
      if (queryData) {
        const oldConversation = queryData.conversations.find((conversation) => conversation.id === conversationId);
        const conversations = queryData.conversations.filter((conversation) => conversation.id !== conversationId);
        const { conversationId: id, message: latestMessage, chat } = newMessage;
        const unreadCount = latestMessage.isResponse ? 0 : (oldConversation?.unreadCount || 0) + 1;
        const newConversation = { __typename: 'Conversation', id, unreadCount, chat, latestMessage };
        conversations.unshift(newConversation);
        client.writeQuery({ query: GET_CONVERSATIONS, data: { conversations } });
      }

      if (!newMessage.message.isResponse && newMessage.conversationId !== activeConversation) {
        toast.info(`${newMessage.chat.name}: ${sliceText(newMessage.message.content, 30)}`);
        playNotify();
      }
    },
  });

  return null;
};

export default MessageSubscriber;
