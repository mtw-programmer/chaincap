export default async () => {
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

    // API Validation

    return navigateTo('/dashboard');
  } catch (ex) {
    return { error: 'There was a problem with your authentication.' };
  }
};
