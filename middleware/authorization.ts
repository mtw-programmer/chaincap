export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    return navigateTo('/login');
  } catch (error: any) {
    return navigateTo('/login');
  }
});
