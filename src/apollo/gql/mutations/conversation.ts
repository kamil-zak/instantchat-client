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
