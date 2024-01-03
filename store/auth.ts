import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ name: 'auth', namespaced: true })
class AuthModule extends VuexModule {
  private account = '' as string;

  get isAuthenticated(): boolean {
    return this.account.length > 0;
  }

  @Mutation
  private SET_ACCOUNT_ADDRESS(address: string) {
    this.account = address;
  }

  @Action
  public async login() {
    try {
      const [address] = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      this.SET_ACCOUNT_ADDRESS(address);
    } catch (ex:any) {
      console.error(ex.message);
    }
  }
}

export default AuthModule;
