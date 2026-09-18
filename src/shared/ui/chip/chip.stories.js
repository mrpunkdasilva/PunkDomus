import Chip from './chip.vue'

export default {
  title: 'UI/Chip',
  component: Chip,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline']
    },
    removable: {
      control: { type: 'boolean' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Chip },
  props: Object.keys(argTypes),
  template: '<Chip v-bind="$props">{{ text }}</Chip>'
})

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  text: 'Chip Primário'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  text: 'Chip Secundário'
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
  text: 'Chip Outline'
}

export const Removable = Template.bind({})
Removable.args = {
  variant: 'primary',
  removable: true,
  text: 'Removível'
}
