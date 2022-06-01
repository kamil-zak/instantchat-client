import { gql } from '@apollo/client';

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

export interface IIsTypingArgs {
  conversationId: string;
}
export const IS_TYPING = gql`
  mutation ($conversationId: ID!) {
    isTyping(conversationId: $conversationId)
  }
`;

export const IS_TYPING_WIDGET = gql`
  mutation ($conversationId: ID!) {
    isTypingWidget(conversationId: $conversationId)
  }
`;
