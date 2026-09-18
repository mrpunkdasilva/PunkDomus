const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|vue)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links'
  ],
  framework: '@storybook/vue',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config) => {
    const vueLoaderRule = config.module.rules.find(
      r => r.test && r.test.toString() === '/\\.vue$/'
    )
    if (vueLoaderRule) {
      delete vueLoaderRule.resource
      delete vueLoaderRule.issuer
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../src'),
      '@': path.resolve(__dirname, '../src'),
      '~~': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/app/assets')
    }

    return config
  }
}
