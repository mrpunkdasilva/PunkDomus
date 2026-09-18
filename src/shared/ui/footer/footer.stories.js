import Footer from './footer.vue'
import Text from '../text/text.vue'
import Link from '../link/link.vue'

export default {
  title: 'UI/Footer',
  component: Footer,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal']
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Footer, Text, Link },
  props: Object.keys(argTypes),
  template: `
    <Footer v-bind="$props">
      <Text variant="muted" tag="p">
        © 2024 PunkDomus. Todos os direitos reservados.
      </Text>
      <Link to="/privacy" variant="ghost">Política de Privacidade</Link>
    </Footer>
  `
})

export const Default = Template.bind({})
Default.args = {
  variant: 'default'
}

export const Minimal = Template.bind({})
Minimal.args = {
  variant: 'minimal'
}
