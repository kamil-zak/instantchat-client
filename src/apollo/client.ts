import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { setContext } from '@apollo/client/link/context';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { clearTokens, getToken } from '../services/tokens';
import { typePolicies } from './typePolicies';
import { EMPTY_USER_PAYLOAD } from './queries/user';

const httpLink = createHttpLink({ uri: '/graphql' });

const authLink = setContext((_, { headers }) => ({
  headers: { ...headers, authorization: `Bearer ${getToken()}` },
})).concat(httpLink);

const wsUrl = window.location.href.replace(/^http(s?:\/\/.*?)\/.*$/, `ws$1/graphql`);

const wsLink = new GraphQLWsLink(
  createClient({
    url: wsUrl,
    connectionParams: () => ({ authorization: `Bearer ${getToken()}` }),
  }),
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  authLink,
);

const client = new ApolloClient({ link: splitLink, cache: new InMemoryCache({ typePolicies }) });

export const logout = () => {
  clearTokens();
  client.writeQuery({ query: EMPTY_USER_PAYLOAD, data: { userPayload: null } });
  client.resetStore();
};

export default client;
