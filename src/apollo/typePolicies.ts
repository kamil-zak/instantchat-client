import { FieldMergeFunction, TypePolicies } from '@apollo/client';

interface IRef {
  __ref: string;
}

interface IMessagesRefs {
  hasMore: boolean;
  messages: IRef[];
}

const empty: IMessagesRefs = {
  hasMore: true,
  messages: [],
};

const mergeMessages: FieldMergeFunction = (prev: IMessagesRefs = empty, incoming: IMessagesRefs = empty, { args }) => {
  const notExist = ({ __ref }: IRef) => prev.messages.every((message) => message.__ref !== __ref);
  const newMessages = incoming.messages.filter(notExist);
  return {
    hasMore: incoming.hasMore ?? prev.hasMore,
    messages: args?.limit ? [...newMessages, ...prev.messages] : [...prev.messages, ...newMessages],
  };
};

export const typePolicies: TypePolicies = {
  Query: {
    fields: {
      getMessages: {
        keyArgs: ['conversationId'],
        merge: mergeMessages,
      },
      getConversations: {
        keyArgs: false,
      },
      getChats: {
        keyArgs: false,
        merge: (existing, incoming) => incoming,
      },
    },
  },
};
