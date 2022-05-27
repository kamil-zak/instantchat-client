import { useSubscription } from '@apollo/client';
import { useAuth } from '../providers/AuthProvider';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { playNotify } from '../services/sounds';
import { sliceText } from '../utils/format';
import { insertMessagesCache, updateConversationsCache } from '../utils/cache';
import { INewUserMessageArgs, INewUserMessageData, NEW_USER_MESSAGE } from '../apollo/gql/subscriptions/message';
import ToastMsg from '../components/ToastMsg/ToastMsg';

const useUserSubscribe = () => {
  const { user } = useAuth();
  const activeConversation = useParams().conversationId;

  useSubscription<INewUserMessageData, INewUserMessageArgs>(NEW_USER_MESSAGE, {
    variables: { userId: user.id },
    skip: !user.id,
    onSubscriptionData: ({ subscriptionData, client }) => {
      const newMessage = subscriptionData.data?.newMessage;
      if (!newMessage) return;
      const { conversationId } = newMessage;

      insertMessagesCache(client, newMessage.message, conversationId);
      updateConversationsCache(client, newMessage, conversationId);

      if (!newMessage.message.isResponse && newMessage.conversationId !== activeConversation) {
        toast.info(ToastMsg({ title: newMessage.chat.name, content: sliceText(newMessage.message.content, 30) }));
        playNotify();
      }
    },
  });
};

export default useUserSubscribe;
