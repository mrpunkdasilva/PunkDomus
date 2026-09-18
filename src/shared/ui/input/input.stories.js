import Input from './input.vue'

export default {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'search']
    },
    placeholder: {
      control: { type: 'text' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Input },
  props: Object.keys(argTypes),
  template: '<Input v-bind="$props" />'
})

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  placeholder: 'Digite algo...'
}

export const Search = Template.bind({})
Search.args = {
  type: 'search',
  placeholder: 'Buscar...'
}

export const Email = Template.bind({})
Email.args = {
  type: 'email',
  placeholder: 'email@exemplo.com'
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
  placeholder: 'Senha'
}
