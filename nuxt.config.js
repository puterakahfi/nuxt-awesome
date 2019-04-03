import pkg from './package'

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/nuxt-awesome/'
        }
      }
    : {}

export default {
  mode: 'spa',
  routerBase,
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      {
        src: 'stisla/modules/jquery.min.js',
        type: 'text/javascript'
      },
      {
        src: 'stisla/js/popper.js',
        type: 'text/javascript'
      },
      {
        src: 'stisla/modules/bootstrap/js/bootstrap.min.js',
        type: 'text/javascript'
      },

      {
        src: 'stisla/modules/nicescroll/jquery.nicescroll.min.js',
        type: 'text/javascript'
      },
      {
        src: 'stisla/js/stisla.js',
        type: 'text/javascript'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'stisla/modules/bootstrap/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'stisla/css/style.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'stisla/css/components.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'stisla/modules/fontawesome/css/all.min.css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'red' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
