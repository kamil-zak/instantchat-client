import { IMessage } from '../interfaces/message';

export const exampleMessages: IMessage[] = [
  { id: '1', content: 'Hi, it is possible to pay by card?', isResponse: false, time: new Date().toISOString() },
  { id: '2', content: 'Hello, of course you can pay by card. ', isResponse: true, time: new Date().toISOString() },
  { id: '3', content: 'Thank you', isResponse: false, time: new Date().toISOString() },
];
