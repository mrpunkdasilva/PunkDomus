import PageHeader from './page-header.vue'

export default {
  title: 'UI/PageHeader',
  component: PageHeader,
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    subtitle: {
      control: { type: 'text' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { PageHeader },
  props: Object.keys(argTypes),
  template: '<PageHeader v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  title: 'Título da Página',
  subtitle: 'Subtítulo descritivo da página'
}

export const WithoutSubtitle = Template.bind({})
WithoutSubtitle.args = {
  title: 'Só Título'
}
