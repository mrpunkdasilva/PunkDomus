import Skeleton from './skeleton.vue'

export default {
  title: 'UI/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'rect', 'circle']
    },
    width: {
      control: { type: 'text' }
    },
    height: {
      control: { type: 'text' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Skeleton },
  props: Object.keys(argTypes),
  template: '<Skeleton v-bind="$props" />'
})

export const Text = Template.bind({})
Text.args = {
  variant: 'text',
  width: '200px',
  height: '1em'
}

export const Rectangle = Template.bind({})
Rectangle.args = {
  variant: 'rect',
  width: '300px',
  height: '200px'
}

export const Circle = Template.bind({})
Circle.args = {
  variant: 'circle',
  width: '50px',
  height: '50px'
}
