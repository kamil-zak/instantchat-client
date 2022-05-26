import { ApolloClient } from '@apollo/client';
import { GET_CONVERSATIONS, GET_MESSAGES, IGetConversationsData, IGetMessagesArgs, IGetMessagesData } from '../apollo/queries/queries';
import { IMessage, INewMessage } from '../interfaces/message';

export const insertMessagesCache = (client: ApolloClient<object>, message: IMessage, conversationId: string) => {
  const data = { messagesData: { messages: [message] } };
  client.writeQuery<IGetMessagesData, IGetMessagesArgs>({ query: GET_MESSAGES, variables: { conversationId }, data });
};

export const updateConversationsCache = (client: ApolloClient<object>, newMessage: INewMessage, conversationId: string) => {
  const queryData = client.readQuery<IGetConversationsData>({ query: GET_CONVERSATIONS });
  if (!queryData) return;
  const oldConversation = queryData.conversations.find((conversation) => conversation.id === conversationId);
  const conversations = queryData.conversations.filter((conversation) => conversation.id !== conversationId);
  const { conversationId: id, message: latestMessage, chat } = newMessage;
  const unreadCount = latestMessage.isResponse ? 0 : (oldConversation?.unreadCount || 0) + 1;
  const newConversation = { __typename: 'Conversation', id, unreadCount, chat, latestMessage };
  conversations.unshift(newConversation);
  client.writeQuery<IGetConversationsData>({ query: GET_CONVERSATIONS, data: { conversations } });
};
