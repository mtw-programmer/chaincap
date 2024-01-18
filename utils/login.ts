import { provideApolloClient, useQuery } from '@vue/apollo-composable';
import { watch } from 'vue';
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

export const useLogin = async () => {
  try {
    if (!process.client) {
      return { error: 'Something went wrong! Please, try again later.' };
    }
    
    if (!(window as any).ethereum) {
      return { error: 'MetaMask not detected. Please, install it to proceed.' };
    }

    const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    const userAddress = accounts[0];
    
    const message = 'Authenticate to ChainCAP Ventures';
    const signature = await (window as any).ethereum.request({
      method: 'personal_sign',
      params: [message, userAddress],
    });

    const authenticationQuery = gql`
      query getSuccessMock {
        getMockSuccess {
          status
          msg
        }
      }
    `;

    const { result, loading } = useQuery(authenticationQuery);

    console.log(loading.value);

    watch(result, () => {
      if (result.value.getMockSuccess.status == 200) {
        console.log(loading.value);
        return navigateTo('/dashboard');
      }
    });

    if (!result.value) {
      return { error: 'No' };
    } else if (result.value.getMockSuccess.status != 200) {
      return { error: 'No' };
    } else if (result.value.getMockSuccess.status == 200) {
      console.log(loading.value);
      return navigateTo('/dashboard');
    }
  } catch (ex) {
    return { error: `Couldn't authenticate with your wallet.` };
  }
};
