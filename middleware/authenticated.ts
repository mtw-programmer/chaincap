import { Middleware } from '@nuxt/types';

const authMiddleware:Middleware = ({ store, redirect }) => {
  if (store.getters['auth/isAuthenticated'].length == 0) {
    return redirect('/login');
  }
};

export default authMiddleware;
