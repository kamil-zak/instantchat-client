import { gql } from '@apollo/client';

export const CONVERSATION_UNREAD_FRAGMENT = gql`
  fragment unread on Conversation {
    unreadCount
  }
`;

export const MESSAGE_FRAGMENT = gql`
  fragment messageFields on Message {
    id
    content
    isResponse
    time
  }
`;

export const CHAT_FRAGMENT = gql`
  fragment chatFields on Chat {
    id
    name
  }
`;
