import { defineNuxtConfig } from 'nuxt/config';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createHttpLink } from '@apollo/client/link/http';

const httpLink = createHttpLink({
  uri: process.env.API_BASE_URL,
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  credentials: 'include',
});

export default defineNuxtConfig({
  app: {
    head: {
      title: 'ChainCAP Ventures',
        htmlAttrs: {
          lang: 'en',
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' },
        ],
        script: [
          {
            hid: 'font-awesome',
            src: 'https://kit.fontawesome.com/0c93a334b2.js',
            crossorigin: 'anonymous',
          },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  apollo: {
    client: apolloClient,
  },

  router: {
    middleware: ['authorization'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/variables/main.scss', '~/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      '@apollo/client',
      'ts-invariant/process',
    ],
  },
});
