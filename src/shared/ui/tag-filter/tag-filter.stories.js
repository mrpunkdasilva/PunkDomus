import TagFilter from './tag-filter.vue'

export default {
  title: 'UI/TagFilter',
  component: TagFilter,
  argTypes: {
    tags: {
      control: { type: 'array' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { TagFilter },
  props: Object.keys(argTypes),
  data() {
    return { selectedTag: null }
  },
  template: '<TagFilter v-bind="$props" v-model="selectedTag" />'
})

export const Default = Template.bind({})
Default.args = {
  tags: ['JavaScript', 'Vue', 'Nuxt', 'CSS', 'Design System']
}
