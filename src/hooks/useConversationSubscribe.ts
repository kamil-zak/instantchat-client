import { useSubscription } from '@apollo/client';
import { INewConMessageArgs, INewConMessageData, NEW_CONVERSATION_MESSAGE } from '../apollo/queries/subscriptions';
import { insertMessagesCache } from '../utils/cache';

const useConversationSubscribe = (conversationId: string | null) => {
  useSubscription<INewConMessageData, INewConMessageArgs>(NEW_CONVERSATION_MESSAGE, {
    variables: { conversationId: conversationId || '' },
    skip: !conversationId,
    onSubscriptionData: ({ client, subscriptionData }) => {
      const newMessage = subscriptionData.data?.newMessage;
      if (!newMessage) return;
      insertMessagesCache(client, newMessage.message, conversationId as string);
    },
  });
};

export default useConversationSubscribe;
