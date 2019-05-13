import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-fetch';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { getTokens } from './auth';

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URI,
  fetch,
});

const authLink = setContext((_, { headers }) => {
  const token = getTokens();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token.idToken}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
