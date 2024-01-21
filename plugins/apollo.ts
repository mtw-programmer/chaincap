import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { provideApolloClient } from '@vue/apollo-composable';
import { createHttpLink } from '@apollo/client/link/http';

export default defineNuxtPlugin(() => {
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
  });

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    credentials: 'include',
  });

  provideApolloClient(apolloClient);
});
