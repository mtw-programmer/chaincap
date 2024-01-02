import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';

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
  public login() {
    console.log('test');
  }
}

export default AuthModule;