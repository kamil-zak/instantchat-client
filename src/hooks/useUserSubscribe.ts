import { gql, useSubscription } from '@apollo/client';
import { useAuth } from '../providers/AuthProvider';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { playNotify } from '../services/sounds';
import { sliceText } from '../utils/format';
import { updateConversationsCache } from '../utils/cache';
import { INewMessageArgs, INewMessageData, NEW_MESSAGE } from '../apollo/gql/subscriptions/message';
import ToastMsg from '../components/ToastMsg/ToastMsg';
import { MESSAGE_FRAGMENT } from '../apollo/gql/fragments';
import { IMessage } from '../interfaces/message';

interface IGetMessagesData {
  messagesData: { messages: IMessage[] };
}
interface IGetMessagesArgs {
  conversationId: string;
}
const GET_MESSAGES = gql`
  query getMessages($conversationId: ID!) {
    messagesData: getMessages(conversationId: $conversationId) {
      messages {
        ...messageFields
      }
    }
  }
  ${MESSAGE_FRAGMENT}
`;

const useUserSubscribe = () => {
  const { userId } = useAuth();
  const activeConversation = useParams().conversationId;

  useSubscription<INewMessageData, INewMessageArgs>(NEW_MESSAGE, {
    variables: { userId },
    skip: !userId,
    onSubscriptionData: ({ subscriptionData, client }) => {
      const newMessage = subscriptionData.data?.newMessage;
      if (!newMessage) return;
      const { conversationId } = newMessage;

      const data = { messagesData: { messages: [newMessage.message] } };
      client.writeQuery<IGetMessagesData, IGetMessagesArgs>({ query: GET_MESSAGES, variables: { conversationId }, data });

      updateConversationsCache(client, newMessage, conversationId);

      if (!newMessage.message.isResponse && newMessage.conversationId !== activeConversation) {
        toast.info(ToastMsg({ title: newMessage.chat.name, content: sliceText(newMessage.message.content, 30) }));
        playNotify();
      }
    },
  });
};

export default useUserSubscribe;
