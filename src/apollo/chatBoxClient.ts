import { ApolloClient, from, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { typePoliciesWidget } from './typePolicies';
import { getAuthLink, getWsLink } from './links';
import { getConversationToken } from '../services/chatbox';

const authLink = getAuthLink(getConversationToken);

const wsLink = getWsLink(getConversationToken);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  from([authLink]),
);

const chatBoxClient = new ApolloClient({ link: splitLink, cache: new InMemoryCache({ typePolicies: typePoliciesWidget }) });

export default chatBoxClient;
