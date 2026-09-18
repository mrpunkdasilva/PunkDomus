import Tag from './tag.vue'

export default {
  title: 'UI/Tag',
  component: Tag,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
    },
    removable: {
      control: { type: 'boolean' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Tag },
  props: Object.keys(argTypes),
  template: '<Tag v-bind="$props">{{ text }}</Tag>'
})

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  text: 'Tag Primária'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  text: 'Tag Secundária'
}

export const Removable = Template.bind({})
Removable.args = {
  variant: 'primary',
  removable: true,
  text: 'Removível'
}
