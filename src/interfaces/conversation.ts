import { IChat } from './chat';
import { IMessage } from './message';

export interface IConversation {
  id: string;
  chat: IChat;
  unreadCount: number;
  latestMessage: IMessage;
}
