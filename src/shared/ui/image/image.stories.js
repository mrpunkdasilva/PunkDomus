import Image from './image.vue'

export default {
  title: 'UI/Image',
  component: Image,
  argTypes: {
    src: {
      control: { type: 'text' }
    },
    alt: {
      control: { type: 'text' }
    },
    objectFit: {
      control: { type: 'select' },
      options: ['cover', 'contain', 'fill', 'none']
    },
    radius: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full']
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Image },
  props: Object.keys(argTypes),
  template: '<Image v-bind="$props" style="width: 300px; height: 200px;" />'
})

export const Default = Template.bind({})
Default.args = {
  src: 'https://picsum.photos/300/200',
  alt: 'Imagem de exemplo',
  objectFit: 'cover',
  radius: 'md'
}

export const Circle = Template.bind({})
Circle.args = {
  src: 'https://picsum.photos/200/200',
  alt: 'Avatar circular',
  objectFit: 'cover',
  radius: 'full'
}

export const NoRadius = Template.bind({})
NoRadius.args = {
  src: 'https://picsum.photos/300/200',
  alt: 'Sem bordas',
  objectFit: 'cover',
  radius: 'none'
}

export const WithoutSrc = Template.bind({})
WithoutSrc.args = {
  src: null,
  alt: 'Sem imagem',
  objectFit: 'cover',
  radius: 'md'
}
