import { IChat } from './chat';

export interface IMessage {
  id: string;
  isResponse: boolean;
  content: string;
  time: string;
}

export interface IMessages {
  hasMore: boolean;
  messages: IMessage[];
}

export interface INewMessage {
  conversationId: string;
  chat: IChat;
  message: IMessage;
}
