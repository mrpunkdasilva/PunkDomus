export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Server configuration
  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Punk Domus |> Blog Técnico',
    titleTemplate: '%s | Punk Domus',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Blog técnico sobre desenvolvimento de software, documentações e projetos com uma perspectiva cyberpunk.'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#1E1E1E' },

      // Open Graph
      { property: 'og:site_name', content: 'Punk Domus' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Punk Domus |> Blog Técnico'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Blog técnico sobre desenvolvimento de software, documentações e projetos com uma perspectiva cyberpunk.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/punk_domus_og.png'
      },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@mrpunksama' },
      { name: 'twitter:creator', content: '@mrpunksama' },

      // PWA
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    link: [
      // Favicon
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/punk_domus.svg' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },

      // Fonts
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-scrollto.js',
    '~/plugins/prism.js',
    { src: '~/plugins/vue-particles.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/color-mode',
    '@nuxtjs/pwa'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/feed'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-synthwave84.css'
      }
    },
    nestedProperties: ['author.name']
  },

  // PWA configuration
  pwa: {
    manifest: {
      name: 'Punk Domus',
      short_name: 'PunkDomus',
      lang: 'pt-BR',
      display: 'standalone',
      theme_color: '#1E1E1E',
      background_color: '#1E1E1E',
      description: 'Blog técnico com estética cyberpunk'
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        }
      ]
    }
  },

  // Sitemap Configuration
  sitemap: {
    hostname: 'https://seu-dominio.com',
    gzip: true,
    exclude: [
      '/admin/**'
    ]
  },

  // Feed Configuration
  feed: {
    create: {
      async create(feed) {
        feed.options = {
          title: 'Punk Domus Blog',
          link: 'https://seu-dominio.com/feed.xml',
          description: 'Últimos artigos do Punk Domus'
        }

        const { $content } = require('@nuxt/content')
        const articles = await $content('blog').fetch()

        articles.forEach(article => {
          feed.addItem({
            title: article.title,
            id: article.slug,
            link: `https://seu-dominio.com/blog/${article.slug}`,
            description: article.description
          })
        })
      },
      path: '/feed.xml',
      type: 'rss2'
    }
  },

  // Robots.txt configuration
  robots: {
    UserAgent: '*',
    Disallow: '/admin',
    Sitemap: 'https://seu-dominio.com/sitemap.xml'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    transpile: ['vue-particles'],
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.devtool = 'source-map'
      }
    }
  },

  // Runtime Config
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://seu-dominio.com'
  },

  // Loading Configuration
  loading: {
    color: '#21DEEA',
    height: '3px'
  }
}
