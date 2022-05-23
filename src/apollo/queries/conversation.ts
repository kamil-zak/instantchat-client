import { gql } from '@apollo/client';
import { IConversation } from '../../interfaces/conversation';

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
        id
        name
      }
      latestMessage {
        id
        isResponse
        content
        time
      }
    }
  }
`;

export const MARK_AS_READ = gql`
  mutation markAsRead($conversationId: ID!) {
    markAsRead(conversationId: $conversationId)
  }
`;

export const CONVERSATION_UNREAD_FRAGMENT = gql`
  fragment READ on Conversation {
    unreadCount
  }
`;
