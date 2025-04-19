export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Adicione a configuração de generate se necessário
  generate: {
    fallback: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PunkDomus | Blog Técnico de Desenvolvimento & Cyberpunk',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Blog técnico sobre desenvolvimento de software, documentações e projetos com uma perspectiva cyberpunk.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#1E1E1E' },
      { name: 'author', content: 'Mr Punk da Silva' },
      { name: 'keywords', content: 'desenvolvimento de software, programação, cyberpunk, tech blog, documentação técnica, engenharia de software' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Punk Domus |> Blog Técnico' },
      { property: 'og:description', content: 'Blog técnico sobre desenvolvimento de software, documentações e projetos com uma perspectiva cyberpunk.' },
      { property: 'og:image', content: '/punk_domus_og.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@mrpunksama' },
      { name: 'twitter:creator', content: '@mrpunksama' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/punk_domus.svg' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inria+Sans:wght@300;400;700&family=Protest+Guerrilla&family=Fira+Code:wght@400;500;600&display=swap',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
        integrity: 'sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==',
        crossorigin: 'anonymous'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/google-fonts'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Configuração do google-fonts (alternativa mais robusta)
  googleFonts: {
    families: {
      'Inria+Sans': [300, 400, 700],
      'Protest+Guerrilla': true,
      'Fira+Code': [400, 500, 600]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'tech-docs',
          path: '/tech-docs',
          component: resolve(__dirname, 'pages/tech-docs/index.vue')
        },
        {
          name: 'code-labs',
          path: '/code-labs',
          component: resolve(__dirname, 'pages/code-labs/index.vue')
        },
        {
          name: 'cheat-sheets',
          path: '/cheat-sheets',
          component: resolve(__dirname, 'pages/cheat-sheets/index.vue')
        },
        {
          name: 'hand-notes',
          path: '/hand-notes',
          component: resolve(__dirname, 'pages/hand-notes/index.vue')
        },
        {
          name: 'videos',
          path: '/videos',
          component: resolve(__dirname, 'pages/videos/index.vue')
        }
      )
    }
  }
}
