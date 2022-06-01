import { gql } from '@apollo/client';

export interface IIsTypingSubArgs {
  conversationId: string;
}
export const IS_TYPING_SUB = gql`
  subscription ($conversationId: ID!) {
    isTyping(conversationId: $conversationId)
  }
`;
export const IS_TYPING_SUB_WIDGET = gql`
  subscription ($conversationId: ID!) {
    isTypingWidget(conversationId: $conversationId)
  }
`;
