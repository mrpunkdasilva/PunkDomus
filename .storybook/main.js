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
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': require('path').resolve(__dirname, '../src'),
      '@': require('path').resolve(__dirname, '../src')
    }

    return config
  }
}
