import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-fetch';

export const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URI,
  fetch,
});

export const authLink = (idToken) => setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: idToken ? `Bearer ${idToken}` : '',
    },
  };
});


