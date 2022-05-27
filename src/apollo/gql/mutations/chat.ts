import { gql } from '@apollo/client';
import { IChat } from '../../../interfaces/chat';
import { CHAT_FRAGMENT } from '../fragments';

export interface ICreateChatData {
  createdChat: IChat;
}
export interface ICreateChatArgs {
  userId: string;
  details: Omit<IChat, 'id'>;
}
export const CREATE_CHAT = gql`
  mutation ($userId: ID!, $details: ChatInput!) {
    createdChat: createChat(userId: $userId, details: $details) {
      ...chatFields
    }
  }
  ${CHAT_FRAGMENT}
`;

export interface IUpdateChatData {
  updatedChat: IChat;
}
export interface IUpdateChatArgs {
  chatId: string;
  details: Omit<IChat, 'id'>;
}
export const UPDATE_CHAT = gql`
  mutation ($chatId: ID!, $details: ChatInput!) {
    updatedChat: updateChat(chatId: $chatId, details: $details) {
      ...chatFields
    }
  }
  ${CHAT_FRAGMENT}
`;

export interface IDeleteChatData {
  deletedChat: { id: string };
}
export interface IDeleteChatArgs {
  chatId: string;
}
export const DELETE_CHAT = gql`
  mutation ($chatId: ID!) {
    deletedChat: deleteChat(chatId: $chatId) {
      id
    }
  }
`;
