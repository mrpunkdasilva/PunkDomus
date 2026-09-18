import Button from './button.vue'

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    loading: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props">{{ text }}</Button>'
})

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  size: 'md',
  text: 'Botão Primário'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  text: 'Botão Secundário'
}

export const Ghost = Template.bind({})
Ghost.args = {
  variant: 'ghost',
  size: 'md',
  text: 'Botão Ghost'
}

export const Small = Template.bind({})
Small.args = {
  variant: 'primary',
  size: 'sm',
  text: 'Pequeno'
}

export const Large = Template.bind({})
Large.args = {
  variant: 'primary',
  size: 'lg',
  text: 'Grande'
}

export const Loading = Template.bind({})
Loading.args = {
  variant: 'primary',
  size: 'md',
  loading: true,
  text: 'Carregando'
}

export const Disabled = Template.bind({})
Disabled.args = {
  variant: 'primary',
  size: 'md',
  disabled: true,
  text: 'Desabilitado'
}
