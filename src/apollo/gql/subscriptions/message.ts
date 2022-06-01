import { gql } from '@apollo/client';
import { IMessage, INewMessage } from '../../../interfaces/message';
import { MESSAGE_FRAGMENT } from '../fragments';

export interface INewMessageData {
  newMessage: INewMessage;
}
export interface INewMessageArgs {
  userId: string;
}
export const NEW_MESSAGE = gql`
  subscription ($userId: ID!) {
    newMessage: newMessage(userId: $userId) {
      conversationId
      chat {
        name
      }
      message {
        ...messageFields
      }
    }
  }
  ${MESSAGE_FRAGMENT}
`;

export interface INewMessageWidgetData {
  newMessage: {
    message: IMessage;
  };
}
export interface INewMessageWidgetArgs {
  conversationId: string;
}
export const NEW_MESSAGE_WIDGET = gql`
  subscription ($conversationId: ID!) {
    newMessage: newMessageWidget(conversationId: $conversationId) {
      message {
        ...messageFields
      }
    }
  }
  ${MESSAGE_FRAGMENT}
`;
