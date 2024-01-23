import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { provideApolloClient } from '@vue/apollo-composable';
import { createHttpLink } from '@apollo/client/link/http';

export default defineNuxtPlugin(() => {
  const runTimeConfig = useRuntimeConfig();

  const httpLink = createHttpLink({
    uri: runTimeConfig.public.API_BASE_URL,
  });

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    credentials: 'include',
  });

  provideApolloClient(apolloClient);
});
