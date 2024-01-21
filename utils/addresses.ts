import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

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
