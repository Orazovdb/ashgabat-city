import tm from './locales/tm'
import ru from './locales/ru'
import en from './locales/en'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      titleTemplate: '%s | ashgabat-city',
      title: 'ashgabat-city',
      htmlAttrs: {
        lang: 'en',
        myAttribute: 'ashgabat-city',
        ...i18nHead.htmlAttrs
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        },
        { property: 'og:title', content: 'ashgabat-city' },
        {
          name: 'author',
          content: 'Salam H.J developers: Orazov Dovran'
        },
        {
          itemprop: 'og:image:width',
          content: `1350`
        },
        {
          itemprop: 'og:image:height',
          content: `1000`
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#F00' },
        { name: 'msapplication-navbutton-color', content: '#F00' },
        { name: 'apple-mobile-web-app-status-bar-style', content: '#F00' },
        { name: 'msapplication-TileColor', content: '#F00' },
        { name: 'application-name', content: 'ashgabat-city' },
        { name: 'msapplication-tooltip', content: 'ashgabat-city' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-title', content: 'ashgabat-city' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        ...i18nHead.meta
      ],
      link: [{ rel: 'icon', type: '/favicon.ico', href: '/favicon.ico' }, ...i18nHead.link]
    }
  },

  server: {
    port: 3011,
    host: '0.0.0.0'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.css', '@/assets/css/style.scss', '@/assets/css/grid.scss'],

  loading: {
    color: 'green',
    height: '3px'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '@/plugins/aos.client', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['@/components', '@/components/base']
  },
  ssr: true,

  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    'cookie-universal-nuxt'
  ],

  i18n: {
    locales: [
      {
        code: 'tm',
        lang: 'TM',
        name: 'TM',
        iso: 'tm-TM',
        file: 'tm',
        isCatchallLocale: true
      },
      { code: 'ru', lang: 'RU', name: 'RU', iso: 'ru-RU', file: 'ru' },
      { code: 'en', lang: 'EN', name: 'EN', iso: 'en-EN', file: 'en' }
    ],
    defaultLocale: 'tm',
    seo: true,
    vueI18n: {
      fallbackLocale: 'tm',
      messages: { tm, ru, en }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  env: {
    baseURL: process.env.baseURL
  },
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.baseURL,
    retry: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
