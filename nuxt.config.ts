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
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      autoSubfolderIndex: false
    },
    routeRules: {
    '/': { prerender: true },
    '/contact': { prerender: true },
    // Do NOT prerender your email API endpoint so it stays a live function
    '/api/send-email': { prerender: false } 
  }
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
