import { gql } from '@apollo/client';

export interface ISendMessageData {
  id: string;
}
export interface ISendMessageArgs {
  conversationId: string;
  content: string;
  isResponse: boolean;
}
export const SEND_MESSAGE = gql`
  mutation ($content: String!, $conversationId: ID!, $isResponse: Boolean) {
    sendedMessage: sendMessage(content: $content, conversationId: $conversationId, isResponse: $isResponse) {
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
