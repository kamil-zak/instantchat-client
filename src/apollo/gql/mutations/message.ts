import { gql } from '@apollo/client';

export interface ISendMessageData {
  id: string;
}
export interface ISendMessageArgs {
  conversationId: string;
  content: string;
}
export const SEND_MESSAGE = gql`
  mutation ($content: String!, $conversationId: ID!) {
    sendedMessage: sendMessage(content: $content, conversationId: $conversationId) {
      id
    }
  }
`;

export const SEND_MESSAGE_WIDGET = gql`
  mutation ($content: String!, $conversationId: ID!) {
    sendedMessage: sendMessageWidget(content: $content, conversationId: $conversationId) {
      id
    }
  }
`;

export interface IMarkAsReadArgs {
  conversationId: string;
}
export const MARK_AS_READ = gql`
  mutation markAsRead($conversationId: ID!) {
    markAsRead(conversationId: $conversationId)
  }
`;
