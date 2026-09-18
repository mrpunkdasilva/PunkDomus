import '../src/app/assets/css/variables.css'
import '../src/shared/styles/global.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#080E1A'
      },
      {
        name: 'light',
        value: '#1E1E1E'
      }
    ]
  }
}
