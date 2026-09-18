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
    config.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-loader'
    })

    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      '~': require('path').resolve(__dirname, '../src'),
      '@': require('path').resolve(__dirname, '../src')
    }

    return config
  }
}
