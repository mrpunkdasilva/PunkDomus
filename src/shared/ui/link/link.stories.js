import Link from './link.vue'

export default {
  title: 'UI/Link',
  component: Link,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost']
    },
    external: {
      control: { type: 'boolean' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Link },
  props: Object.keys(argTypes),
  template: '<Link v-bind="$props">{{ text }}</Link>'
})

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  to: '/exemplo',
  text: 'Link Primário'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  to: '/exemplo',
  text: 'Link Secundário'
}

export const Ghost = Template.bind({})
Ghost.args = {
  variant: 'ghost',
  to: '/exemplo',
  text: 'Link Ghost'
}

export const External = Template.bind({})
External.args = {
  variant: 'primary',
  href: 'https://example.com',
  external: true,
  text: 'Link Externo'
}
