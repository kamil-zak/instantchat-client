import { FieldMergeFunction, TypePolicies } from '@apollo/client';

interface IMessagesRefs {
  hasMore: boolean;
  messages: { __ref: string }[];
}

const empty: IMessagesRefs = {
  hasMore: true,
  messages: [],
};

const mergeMessages: FieldMergeFunction = (prev: IMessagesRefs = empty, incoming: IMessagesRefs = empty, { args }) => {
  const notExist = ({ __ref }: { __ref: string }) => prev.messages.every((message) => message.__ref !== __ref);
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
    },
  },
};
