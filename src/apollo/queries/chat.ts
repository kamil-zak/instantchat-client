import { gql } from '@apollo/client';
import { IChat } from '../../interfaces/chat';

export interface IGetChatsData {
  chats: IChat[];
}
export interface IGetChatsArgs {
  userId: string;
}

export const GET_CHATS = gql`
  query ($userId: ID!) {
    chats: getChats(userId: $userId) {
      id
      name
    }
  }
`;
