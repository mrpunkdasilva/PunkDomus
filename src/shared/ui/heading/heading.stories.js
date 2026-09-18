import Heading from './heading.vue'

export default {
  title: 'UI/Heading',
  component: Heading,
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6]
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'semibold', 'bold']
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Heading },
  props: Object.keys(argTypes),
  template: '<Heading v-bind="$props">{{ content }}</Heading>'
})

export const H1 = Template.bind({})
H1.args = {
  level: 1,
  weight: 'bold',
  content: 'Título Principal'
}

export const H2 = Template.bind({})
H2.args = {
  level: 2,
  weight: 'bold',
  content: 'Título Secundário'
}

export const H3 = Template.bind({})
H3.args = {
  level: 3,
  weight: 'bold',
  content: 'Título Terciário'
}

export const H4 = Template.bind({})
H4.args = {
  level: 4,
  weight: 'semibold',
  content: 'Título Quarto'
}

export const H5 = Template.bind({})
H5.args = {
  level: 5,
  weight: 'semibold',
  content: 'Título Quinto'
}

export const H6 = Template.bind({})
H6.args = {
  level: 6,
  weight: 'normal',
  content: 'Título Sexto'
}
