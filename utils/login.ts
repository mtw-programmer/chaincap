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

export const getLoginResponse = async ():Promise<any> => {
  try {
    if (!process.client) {
      return { error: 'Something went wrong! Please, try again later.' };
    }
    
    if (!window.ethereum) {
      return { error: 'MetaMask not detected. Please, install it to proceed.' };
    }

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const userAddress = accounts[0];
    
    const message = 'Authenticate to ChainCAP Ventures';
    const signature = await window.ethereum.request({
      method: 'personal_sign',
      params: [message, userAddress],
    });

    const authenticationQuery = gql`
      query login {
        login {
          status
          msg
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
    return { error: `Couldn't authenticate with your wallet.` };
  }
};
