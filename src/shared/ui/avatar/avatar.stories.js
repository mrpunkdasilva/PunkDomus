import Avatar from './avatar.vue'

export default {
  title: 'UI/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square']
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Avatar },
  props: Object.keys(argTypes),
  template: '<Avatar v-bind="$props" />'
})

export const WithImage = Template.bind({})
WithImage.args = {
  src: 'https://picsum.photos/200/200',
  alt: 'Avatar',
  size: 'md',
  shape: 'circle'
}

export const WithInitials = Template.bind({})
WithInitials.args = {
  src: null,
  name: 'Mr Punk da Silva',
  size: 'md',
  shape: 'circle'
}

export const Square = Template.bind({})
Square.args = {
  src: 'https://picsum.photos/200/200',
  alt: 'Avatar quadrado',
  size: 'lg',
  shape: 'square'
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  src: null,
  name: 'PS',
  size: 'xs',
  shape: 'circle'
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  src: 'https://picsum.photos/200/200',
  alt: 'Avatar grande',
  size: 'xl',
  shape: 'circle'
}
