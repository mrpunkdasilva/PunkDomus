import List from './list.vue'

export default {
  title: 'UI/List',
  component: List,
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: ['ul', 'ol']
    },
    variant: {
      control: { type: 'select' },
      options: ['bullet', 'numbered', 'none']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { List },
  props: Object.keys(argTypes),
  template: `
    <List v-bind="$props">
      <li>Primeiro item</li>
      <li>Segundo item</li>
      <li>Terceiro item</li>
    </List>
  `
})

export const Unordered = Template.bind({})
Unordered.args = {
  tag: 'ul',
  variant: 'bullet',
  size: 'md'
}

export const Ordered = Template.bind({})
Ordered.args = {
  tag: 'ol',
  variant: 'numbered',
  size: 'md'
}

export const NoStyle = Template.bind({})
NoStyle.args = {
  tag: 'ul',
  variant: 'none',
  size: 'md'
}
