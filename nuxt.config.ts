// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/scripts', '@nuxt/image', '@nuxtjs/seo', '@nuxt/content'],
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [{ name: 'google-site-verification', content: 'HrmjKXDI67M5Cg_AlnswPQY-sItqyj5WxNopSJEeauw' }],
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
      geo: {
        latitude: 25.866456,
        longitude: -80.3007936,
      },
      socialMedia: {
        instagram: 'https://www.instagram.com/hialeah_headspa/',
        tiktok: 'https://www.tiktok.com/@hialeah_headspa',
      },
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
