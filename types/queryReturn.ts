import { UseQueryReturn } from '@vue/apollo-composable';

interface QuerySetup {
  notifyOnNetworkStatusChange: boolean;
  retry: boolean;
  suspense: boolean;
}

export type QueryReturn = UseQueryReturn<any, QuerySetup>;
