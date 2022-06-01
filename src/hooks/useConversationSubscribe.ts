import { gql, useSubscription } from '@apollo/client';
import { MESSAGE_FRAGMENT } from '../apollo/gql/fragments';
import { INewMessageWidgetArgs, INewMessageWidgetData, NEW_MESSAGE_WIDGET } from '../apollo/gql/subscriptions/message';
import { IMessage } from '../interfaces/message';

const GET_MESSAGES = gql`
  query ($conversationId: ID!) {
    messagesData: getMessagesWidget(conversationId: $conversationId) {
      messages {
        ...messageFields
      }
    }
  }
  ${MESSAGE_FRAGMENT}
`;

interface IGetMessagesData {
  messagesData: { messages: IMessage[] };
}

interface IGetMessagesArgs {
  conversationId: string;
}

const useConversationSubscribe = (id: string | null) => {
  const conversationId = id || '';
  useSubscription<INewMessageWidgetData, INewMessageWidgetArgs>(NEW_MESSAGE_WIDGET, {
    variables: { conversationId },
    skip: !conversationId,
    onSubscriptionData: ({ client, subscriptionData }) => {
      const newMessage = subscriptionData.data?.newMessage;
      if (!newMessage) return;

      const data = { messagesData: { messages: [newMessage.message] } };
      client.writeQuery<IGetMessagesData, IGetMessagesArgs>({ query: GET_MESSAGES, variables: { conversationId }, data });
    },
  });
};

export default useConversationSubscribe;
