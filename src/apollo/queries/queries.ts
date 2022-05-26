import { gql } from '@apollo/client';
import { IChat } from '../../interfaces/chat';
import { IConversation } from '../../interfaces/conversation';
import { IMessage, IMessages } from '../../interfaces/message';
import { IUserPayload } from '../../interfaces/user';
import { CHAT_FRAGMENT, MESSAGE_FRAGMENT } from './fragments';

export interface IGetFullMessagesData {
  messagesData: IMessages;
}
export interface IGetFullMessagesArgs {
  conversationId: string;
  before?: string;
  limit?: number;
}
export const GET_FULL_MESSAGES = gql`
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

export interface IGetMessagesData {
  messagesData: { messages: IMessage[] };
}
export interface IGetMessagesArgs {
  conversationId: string;
}
export const GET_MESSAGES = gql`
  query getMessages($conversationId: ID!) {
    messagesData: getMessages(conversationId: $conversationId) {
      messages {
        ...messageFields
      }
    }
  }
  ${MESSAGE_FRAGMENT}
`;

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
        ...chatFields
      }
      latestMessage {
        ...messageFields
      }
    }
  }
  ${MESSAGE_FRAGMENT}
  ${CHAT_FRAGMENT}
`;

export interface IGetChatsData {
  chats: IChat[];
}
export interface IGetChatsArgs {
  userId: string;
}
export const GET_CHATS = gql`
  query ($userId: ID!) {
    chats: getChats(userId: $userId) {
      ...chatFields
    }
  }
  ${CHAT_FRAGMENT}
`;

export interface IUserPayloadData {
  userPayload: IUserPayload;
}
export const USER_PAYLOAD = gql`
  query userPayload {
    userPayload {
      id
      email
    }
  }
`;

export const EMPTY_USER_PAYLOAD = gql`
  query {
    userPayload
  }
`;
