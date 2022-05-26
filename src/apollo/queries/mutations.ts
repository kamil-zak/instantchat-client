import { gql } from '@apollo/client';

export interface ISendMessageArgs {
  conversationId: string;
  content: string;
  isResponse: boolean;
}
export const SEND_MESSAGE = gql`
  mutation ($content: String!, $conversationId: ID!, $isResponse: Boolean) {
    sendMessage(content: $content, conversationId: $conversationId, isResponse: $isResponse)
  }
`;

export interface ICreateConData {
  conversationData: { id: string; token: string };
}
export interface ICreateConArgs {
  chatId: string;
}
export const CREATE_CON = gql`
  mutation ($chatId: ID!) {
    conversationData: createConversation(chatId: $chatId) {
      id
      token
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

export const LOGOUT = gql`
  mutation {
    signOut
  }
`;
