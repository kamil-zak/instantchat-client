import { ApolloClient, from, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { typePolicies } from './typePolicies';
import { getAuthLink, getWsLink } from './links';
import { getUserToken, setUserToken } from '../services/auth';
import { onError } from '@apollo/client/link/error';
import { USER_PAYLOAD } from './gql/queries/user';
import { CODES } from '../constants/errorCodes';
import { toast } from 'react-toastify';

const authLink = getAuthLink(getUserToken);

const cache = new InMemoryCache({ typePolicies });

export const clearCache = () => {
  setUserToken('');
  cache.writeQuery({ query: USER_PAYLOAD, data: { userPayload: null } });
  cache.reset();
};

const logoutLink = onError(({ networkError, graphQLErrors }) => {
  if (networkError) toast.error('Cannot connect to the server');
  (graphQLErrors || []).forEach((error) => {
    if (error.extensions.code === CODES.UNAUTHENTICATED) clearCache();
  });
});

const wsLink = getWsLink(getUserToken);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  from([logoutLink, authLink]),
);

const panelClient = new ApolloClient({ link: splitLink, cache });

export default panelClient;
