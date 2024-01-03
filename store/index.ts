import { createStore } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import AuthModule from './auth';

export const store = createStore({
  modules: {
    auth: AuthModule,
  },
});

export const authStore = getModule(AuthModule, store);
