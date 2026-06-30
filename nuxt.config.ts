// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/scripts', '@nuxt/image', '@nuxtjs/seo'],
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in',
    },
  },
  runtimeConfig: {
    public: {
      bookingUrl: 'http://hialeahheadspa.booksy.com/a/',
      address: '750 West 49th Street',
      address_2: 'Suite 133',
      city: 'Hialeah',
      state: 'FL',
      zip: '33012',
      phone: '(786) 575-5228',
    },
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: 'double',
        commaDangle: 'always-multiline',
        indent: 'tab',
      },
    },
  },
});
