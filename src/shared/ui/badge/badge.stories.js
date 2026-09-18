import Badge from './badge.vue'

export default {
  title: 'UI/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Badge },
  props: Object.keys(argTypes),
  template: '<Badge v-bind="$props">{{ text }}</Badge>'
})

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  text: 'Badge Primário'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  text: 'Badge Secundário'
}
