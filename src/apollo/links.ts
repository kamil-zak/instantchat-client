import { createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { GRAPHQL_URL, WS_URL } from '../constants/config';

export const httpLink = createHttpLink({ uri: GRAPHQL_URL });

export const getAuthLink = (tokenGetter: () => Promise<string>) =>
  setContext(async (_, { headers }) => ({
    headers: { ...headers, authorization: `Bearer ${await tokenGetter()}` },
  })).concat(httpLink);

export const getWsLink = (tokenGetter: () => Promise<string>) =>
  new GraphQLWsLink(
    createClient({
      url: WS_URL,
      connectionParams: async () => ({ authorization: `Bearer ${await tokenGetter()}` }),
    }),
  );
