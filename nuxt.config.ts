// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/scripts', '@nuxt/image', '@nuxtjs/seo'],
  devtools: { enabled: true },
  runtimeConfig:{
    public:{
      bookingUrl: 'https://hialeahheadspa.glossgenius.com',
      address: '750 West 49th Street',
      address_2: 'Suite 133',
      city: 'Hialeah', 
      state: 'FL',
      zip: '33012',
      phone: '(786)111-2222'
    }
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in',
    },
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'cloudflare-pages',
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
