import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - random-blog',
    title: 'random-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyA_sfuOPP2m9DuzGEr4gmAfjkaFrPw5K0I',
          authDomain: 'random-blog-fba85.firebaseapp.com',
          databaseURL: 'https://random-blog-fba85-default-rtdb.firebaseio.com/',
          projectId: 'random-blog-fba85',
          storageBucket: 'random-blog-fba85.appspot.com',
          messagingSenderId: '967824461480',
          appId: '1:967824461480:web:5da5d949de6d58ba523c9d',
          measurementId: ''
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],
  // router: {
  //   middleware: 'log.js'
  // },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#673AB7',
          secondary: '#fffdfd',
          accent: '#00897B',
          error: '#BF360C'
        }
      }
    },
    treeShake: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  env: {
    API_KEY: 'AIzaSyA_sfuOPP2m9DuzGEr4gmAfjkaFrPw5K0I'
  }
}
