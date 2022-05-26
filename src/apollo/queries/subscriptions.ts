import { gql } from '@apollo/client';
import { IMessage, INewMessage } from '../../interfaces/message';
import { CHAT_FRAGMENT, MESSAGE_FRAGMENT } from './fragments';

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
        ...chatFields
      }
      message {
        ...messageFields
      }
    }
  }
  ${MESSAGE_FRAGMENT}
  ${CHAT_FRAGMENT}
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
