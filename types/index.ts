export default {};

declare global {
  interface Window {
    ethereum?: EthereumProvider | undefined;
  }
}

interface EthereumProvider {
  request: (args: any) => Promise<any>;
}
