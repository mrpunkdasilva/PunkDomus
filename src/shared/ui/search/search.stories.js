import Search from './search.vue'

export default {
  title: 'UI/Search',
  component: Search,
  argTypes: {
    placeholder: {
      control: { type: 'text' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Search },
  props: Object.keys(argTypes),
  template: '<Search v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Buscar...'
}

export const CustomPlaceholder = Template.bind({})
CustomPlaceholder.args = {
  placeholder: 'Buscar artigos...'
}
