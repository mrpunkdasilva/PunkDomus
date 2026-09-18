import Header from './header.vue'
import Link from '../link/link.vue'

export default {
  title: 'UI/Header',
  component: Header,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'sticky', 'transparent']
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Header, Link },
  props: Object.keys(argTypes),
  template: `
    <Header v-bind="$props">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="color: var(--color-primary); font-family: var(--font-hero); font-size: 1.5em;">
          PunkDomus
        </span>
        <nav style="display: flex; gap: 20px;">
          <Link to="/blog" variant="primary">Blog</Link>
          <Link to="/about" variant="primary">Sobre</Link>
          <Link to="/contact" variant="primary">Contato</Link>
        </nav>
      </div>
    </Header>
  `
})

export const Default = Template.bind({})
Default.args = {
  variant: 'default'
}

export const Sticky = Template.bind({})
Sticky.args = {
  variant: 'sticky'
}

export const Transparent = Template.bind({})
Transparent.args = {
  variant: 'transparent'
}
