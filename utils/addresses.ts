import { provideApolloClient, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createHttpLink } from '@apollo/client/link/http';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  credentials: 'include',
});

provideApolloClient(apolloClient);

export const getAddresses = async ():Promise<any> => {
  try {
    const authenticationQuery = gql`
      query addresses {
        addresses {
          status,
          msg,
          address {
            expert,
            regular
          }
        }
      }
    `;

    const response = useQuery(authenticationQuery, {
      notifyOnNetworkStatusChange: true,
      retry: false,
      suspense: false,
    });

    return response;
  } catch (ex) {
    return { error: `Couldn't fetch addresses.` };
  }
};
