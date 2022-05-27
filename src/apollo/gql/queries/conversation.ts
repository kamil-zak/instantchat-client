import { gql } from '@apollo/client';
import { IConversation } from '../../../interfaces/conversation';
import { MESSAGE_FRAGMENT } from '../fragments';

export interface IGetConversationsData {
  conversations: IConversation[];
}
export interface IGetConversationsArgs {
  userId: string;
}
export const GET_CONVERSATIONS = gql`
  query getConversations($userId: ID!) {
    conversations: getConversations(userId: $userId) {
      id
      unreadCount
      chat {
        name
      }
      latestMessage {
        ...messageFields
      }
    }
  }
  ${MESSAGE_FRAGMENT}
`;
