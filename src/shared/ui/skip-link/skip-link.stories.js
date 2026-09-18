import SkipLink from './skip-link.vue'

export default {
  title: 'UI/SkipLink',
  component: SkipLink,
  argTypes: {}
}

const Template = (args, { argTypes }) => ({
  components: { SkipLink },
  props: Object.keys(argTypes),
  template: '<SkipLink />'
})

export const Default = Template.bind({})
Default.args = {}
