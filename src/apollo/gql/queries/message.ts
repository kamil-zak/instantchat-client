import { gql } from '@apollo/client';
import { IMessages } from '../../../interfaces/message';
import { MESSAGE_FRAGMENT } from '../fragments';

export interface IGetMessagesData {
  messagesData: IMessages;
}
export interface IGetMessagesArgs {
  conversationId: string;
  before?: string;
  limit?: number;
}
export const GET_MESSAGES = gql`
  query getMessages($conversationId: ID!, $before: ID, $limit: Int) {
    messagesData: getMessages(conversationId: $conversationId, before: $before, limit: $limit) {
      hasMore
      messages {
        ...messageFields
      }
    }
  }
  ${MESSAGE_FRAGMENT}
`;
