import Spinner from './spinner.vue'

export default {
  title: 'UI/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: { type: 'number' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Spinner },
  props: Object.keys(argTypes),
  template: '<Spinner v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  size: 24
}

export const Small = Template.bind({})
Small.args = {
  size: 16
}

export const Large = Template.bind({})
Large.args = {
  size: 48
}
