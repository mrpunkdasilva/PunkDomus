export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Punk Domus |> Nuxt',
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
      { rel: 'icon', type: 'svg', href: '/punk_domus.svg' }
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
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
