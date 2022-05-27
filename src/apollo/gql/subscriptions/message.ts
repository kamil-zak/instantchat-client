import { gql } from '@apollo/client';
import { IMessage, INewMessage } from '../../../interfaces/message';
import { MESSAGE_FRAGMENT } from '../fragments';

export interface INewUserMessageData {
  newMessage: INewMessage;
}
export interface INewUserMessageArgs {
  userId: string;
}
export const NEW_USER_MESSAGE = gql`
  subscription ($userId: ID!) {
    newMessage: newUserMessage(userId: $userId) {
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

export interface INewConMessageData {
  newMessage: {
    message: IMessage;
  };
}
export interface INewConMessageArgs {
  conversationId: string;
}
export const NEW_CONVERSATION_MESSAGE = gql`
  subscription ($conversationId: ID!) {
    newMessage: newConversationMessage(conversationId: $conversationId) {
      message {
        ...messageFields
      }
    }
  }
  ${MESSAGE_FRAGMENT}
`;
