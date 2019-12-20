import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-fetch';

import * as firebase from 'firebase';
import 'firebase/auth';

export const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URI,
  fetch,
});

export const authLink = setContext(async (_, { headers }) => {
  const { currentUser } = firebase.auth();
  const idToken = currentUser ? await currentUser.getIdToken() : null;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: idToken ? `Bearer ${idToken}` : '',
    },
  };
});


