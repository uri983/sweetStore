const isProduction = process.env.NODE_ENV === 'production';
const editorMode = process.env.SWELL_EDITOR === 'true';
const storeId = process.env.SWELL_STORE_ID;
const publicKey = process.env.SWELL_PUBLIC_KEY;
const storeUrl = process.env.SWELL_STORE_URL;
const vaultUrl = process.env.SWELL_VAULT_URL;

export default () => {
  return {
    target: editorMode ? 'server' : 'static',

    build: {
      analyze: !isProduction,
      extend(config, { isDev, isClient }) {
        config.node = {
          fs: 'empty',
        };

        // ....
      },
    },

    vue: {
      config: {
        devtools: !isProduction,
        productionTip: false,
      },
    },

    /*
     ** Make all components in the /components folder available in templates without
     *  needing to import them explicitly or define them on the Vue instance object.
     */
    components: true,

    /*
     ** Set the progress-bar color
     */
    loading: {
      // color: Set by the swell module.
      continuous: true,
    },

    /*
     ** Vue plugins to load before mounting the App
     */
    plugins: [
      { src: '~/plugins/global-scripts', mode: 'client' },
      { src: '~/plugins/vue-credit-card-validation', mode: 'client' },
      { src: '~/plugins/directives', mode: 'client' },
      { src: '~/plugins/swell-lang.js' },
      { src: '~/plugins/filters.js' },
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
      ['@nuxtjs/gtm'],
      'nuxt-breakpoints',
      // [
      //   '@nuxtjs/sentry',
      //   /*
      //    ** Logs app errors with Sentry's browser and node SDKs.
      //    *
      //    *  You can use environment variables or the object below to set config options.
      //    *  See https://github.com/nuxt-community/sentry-module for all available
      //    *  options, defaults, and environment variables.
      //    */
      //   {
      //     // dsn: '', // or SENTRY_DSN in .env
      //     // config: {}
      //   },
      // ],

      /*
       ** Generates a sitemap.xml
       *
       *  Automatically generate or serve dynamic sitemap.xml for Nuxt projects!
       *  See https://github.com/nuxt-community/sentry-module for all available
       *  options, defaults, and environment variables.
       */
      '@nuxtjs/sitemap',
    ],

    buildModules: [
      '@nuxtjs/device',
      // https://go.nuxtjs.dev/eslint
      '@nuxtjs/eslint-module',
      // https://go.nuxtjs.dev/stylelint
      '@nuxtjs/stylelint-module',
      [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        /*
         ** Adds TailwindCSS (including PurgeCSS)
         *
         *  See https://tailwindcss.nuxtjs.org/ for config options.
         */
        {
          // Put your config overrides here
        },
      ],

      [
        '~/modules/swell',
        /*
         ** Initializes Swell.js SDK and injects it into Nuxt's context.
         *  It also sets additional plugins and module settings for
         *  full integration (e.g. i18n settings, styling, etc...)
         */
      ],

      [
        '~/modules/swell-editor',
        /*
         ** Provides communication and utilitiy functions for interfacing
         *  with Swell's storefront editor and fetching settings/content.
         */
      ],

      ['@nuxtjs/i18n'],

      [
        '@nuxtjs/google-fonts',
        /*
         ** Parses Google Font families and loads them via stylesheet.
         *
         *  The config object is generated by the swell-editor module.
         *  See https://github.com/nuxt-community/google-fonts-module if you want
         *  to eject or provide your own config options.
         */
        // Options set by the swell module
      ],

      [
        '@nuxtjs/pwa',
        /*
         ** Provides PWA (Progressive Web App) functionality including app icons,
         *  SEO metadata, manifest.json file, and offline caching.
         *
         *  Use the object below to set config options.
         *  See https://pwa.nuxtjs.org/ for all available options and defaults.
         */
      ],
    ],

    swell: {
      storeId,
      publicKey,
      storeUrl,
      vaultUrl,
      editorMode,
    },

    gtm: {
      // Set by the swell module
    },

    pwa: {
      manifest: false,
      meta: {
        // name: Set by the swell module
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern:
              `${process.env.CDN_HOST}/*` || 'https://cdn.schema.io/*',
          },
        ],
      },
    },

    i18n: {
      locales: ['es'],
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'es',
        messages: {
          en: {
            welcome: 'Welcome',
          },
          fr: {
            welcome: 'Bienvenue',
          },
          es: {
            welcome: 'Bienvenido',
          },
        },
      },
    },

    sitemap: {
      // hostname: Set by the swell module
      gzip: true,
      i18n: true,
      exclude: ['/account/**', '/*/account/**'],
    },

    generate: {
      exclude: [/^\/?([a-z]{2}-?[A-Z]{2}?)?\/account/],
      fallback: true, // Fallback to the generated 404.html,
      concurrency: 1,
      interval: 50,
      crawler: false,
      // routes: Set by the swell module
    },

    /*
     ** Extend default Nuxt routes to add page aliases
     */
    router: {
      middleware: ['currency'],
      trailingSlash: true,
      extendRoutes(routes, resolve) {
        // Rewrite to use the pages/_slug.vue component for home page, since the
        // content type is the same. If you want to have a unique template,
        // create a pages/index.vue and remove this route definition.
        routes.push(
          {
            name: 'index',
            path: '/',
            component: resolve(__dirname, 'pages/mainStore/HomePage.vue'),
          },
          {
            name: 'Categorias',
            path: '/Categorias',
            component: resolve(__dirname, 'pages/categorias/Categorias.vue'),
          },
          {
            name: 'Contact',
            path: '/Contacto',
            component: resolve(__dirname, 'pages/contact/index.vue'),
          },
          {
            name: 'Ubicacion',
            path: '/Ubicacion',
            component: resolve(__dirname, 'pages/ubicacion/ubicacion.vue'),
          },
          {
            name: 'Checkout',
            path: '/Checkout',
            component: resolve(__dirname, 'pages/Checkout/CheckOut.vue'),
          },
          {
            name: 'OrderDetail',
            path: '/confirmation/:id',
            component: resolve(__dirname, 'pages/Checkout/OrderDetail.vue'),
          },
        );
      },
    },

    /*
     ** Extend default Nuxt server options
     */
    server: {
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 3333,
    },

    env: {
      cdnHost: process.env.CDN_HOST || 'https://cdn.schema.io',
      storeId: process.env.SWELL_STORE_ID,
      publicKey: process.env.SWELL_PUBLIC_KEY,
      backendUrl: process.env.SWELL_STORE_BACKEND,
    },
  };
};