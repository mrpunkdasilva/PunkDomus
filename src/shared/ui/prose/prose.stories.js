import Prose from './prose.vue'

export default {
  title: 'UI/Prose',
  component: Prose,
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: ['p', 'span', 'small', 'strong', 'em']
    },
    variant: {
      control: { type: 'select' },
      options: ['body', 'muted', 'caption', 'lead']
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'semibold', 'bold']
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Prose },
  props: Object.keys(argTypes),
  template: '<Prose v-bind="$props">{{ content }}</Prose>'
})

export const Body = Template.bind({})
Body.args = {
  tag: 'p',
  variant: 'body',
  weight: 'normal',
  content: 'Texto corpo de exemplo.'
}

export const Muted = Template.bind({})
Muted.args = {
  tag: 'p',
  variant: 'muted',
  weight: 'normal',
  content: 'Texto muted de exemplo.'
}

export const Caption = Template.bind({})
Caption.args = {
  tag: 'small',
  variant: 'caption',
  weight: 'normal',
  content: 'Texto de legenda.'
}

export const Lead = Template.bind({})
Lead.args = {
  tag: 'p',
  variant: 'lead',
  weight: 'normal',
  content: 'Texto lead de destaque.'
}

export const Bold = Template.bind({})
Bold.args = {
  tag: 'p',
  variant: 'body',
  weight: 'bold',
  content: 'Texto em negrito.'
}
