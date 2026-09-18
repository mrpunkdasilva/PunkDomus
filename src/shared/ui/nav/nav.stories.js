import Nav from './nav.vue'
import Link from '../link/link.vue'

export default {
  title: 'UI/Nav',
  component: Nav,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical']
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Nav, Link },
  props: Object.keys(argTypes),
  template: `
    <Nav v-bind="$props">
      <Link to="/home" variant="primary">Home</Link>
      <Link to="/blog" variant="primary">Blog</Link>
      <Link to="/about" variant="primary">Sobre</Link>
      <Link to="/contact" variant="primary">Contato</Link>
    </Nav>
  `
})

export const Horizontal = Template.bind({})
Horizontal.args = {
  variant: 'horizontal'
}

export const Vertical = Template.bind({})
Vertical.args = {
  variant: 'vertical'
}
