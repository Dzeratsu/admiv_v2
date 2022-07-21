require('dotenv').config()
export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: process.env.PORT
  },
  env: {
    sity: process.env.sity,
    apiWeather: process.env.apiWeather
  },
  head: {
    title: 'Msoff_v2',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@assets/styles/main.scss' }
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@plugins/v-mask.js', ssr: false },
    { src: '@plugins/vue-cool-lightbox.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxt/typescript-build'
  ],

  pwa: {
    icon: false // disables the icon module
  },
  axios: {
    baseURL: process.env.BASE_URL
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  auth: {
    redirect: {
      home: false
    },
    cookie: {
      options: {
        expires: 10
      }
    },
    watchLoggedIn: true,
    strategies: {
      local: {
        user: {
          property: 'result',
          autoFetch: true
        },
        token: {
          required: true,
          property: 'access_token',
          type: 'Bearer'
        },
        endpoints: {
          login: { url: '/auth/getToken', method: 'post' },
          user: { url: '/user/info', method: 'get' }
        }
      }
    }
  },
  router: {
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
