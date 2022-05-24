import { gql } from '@apollo/client';
import { IMessages, INewMessage } from '../../interfaces/message';

export interface IGetMessagesData {
  getMessages: IMessages;
}

export interface IGetMessagesArgs {
  conversationId: string;
  before?: string;
  limit?: number;
}

export const GET_MESSAGES = gql`
  query getMessages($conversationId: ID!, $before: ID, $limit: Int) {
    getMessages(conversationId: $conversationId, before: $before, limit: $limit) {
      hasMore
      messages {
        content
        id
        isResponse
        time
      }
    }
  }
`;

export const GET_ONLY_MESSAGES = gql`
  query getMessages($conversationId: ID!) {
    getMessages(conversationId: $conversationId) {
      messages {
        content
        id
        isResponse
        time
      }
    }
  }
`;

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

export interface IMessageSubData {
  newMessage: INewMessage;
}

export interface IMessageSubArgs {
  userId: string;
}

export const MESSAGE_SUB = gql`
  subscription ($userId: ID!) {
    newMessage: newUserMessage(userId: $userId) {
      conversationId
      chat {
        id
        name
      }
      message {
        id
        isResponse
        content
        time
      }
    }
  }
`;

export const CHATBOX_MESSAGE_SUB = gql`
  subscription ($conversationId: ID!) {
    newMessage: newConversationMessage(conversationId: $conversationId) {
      message {
        id
        isResponse
        content
        time
      }
    }
  }
`;
