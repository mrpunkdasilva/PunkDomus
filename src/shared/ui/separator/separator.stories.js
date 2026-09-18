import Separator from './separator.vue'

export default {
  title: 'UI/Separator',
  component: Separator,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'gradient', 'dashed', 'glow']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Separator },
  props: Object.keys(argTypes),
  template: '<Separator v-bind="$props" />'
})

export const Gradient = Template.bind({})
Gradient.args = {
  variant: 'gradient',
  size: 'md'
}

export const Solid = Template.bind({})
Solid.args = {
  variant: 'solid',
  size: 'md'
}

export const Dashed = Template.bind({})
Dashed.args = {
  variant: 'dashed',
  size: 'md'
}

export const Glow = Template.bind({})
Glow.args = {
  variant: 'glow',
  size: 'md'
}
