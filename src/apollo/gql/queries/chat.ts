import { gql } from '@apollo/client';
import { IChat } from '../../../interfaces/chat';
import { CHAT_FRAGMENT } from '../fragments';

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

export interface IGetChatData {
  chat: IChat;
}
export interface IGetChatArgs {
  chatId: string;
}
export const GET_CHAT = gql`
  query ($chatId: ID!) {
    chat: getChat(chatId: $chatId) {
      ...chatFields
    }
  }
  ${CHAT_FRAGMENT}
`;
