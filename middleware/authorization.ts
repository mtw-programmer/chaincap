export default defineNuxtRouteMiddleware(async (to, from) => {
  try {

  } catch (error: any) {
    return navigateTo('/login');
  }
});
