import Section from './section.vue'

export default {
  title: 'UI/Section',
  component: Section,
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    id: {
      control: { type: 'text' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Section },
  props: Object.keys(argTypes),
  template: `
    <Section v-bind="$props">
      <p style="color: var(--color-text-muted);">Conteúdo da seção aqui.</p>
    </Section>
  `
})

export const WithTitle = Template.bind({})
WithTitle.args = {
  title: 'Título da Seção',
  id: 'secao-exemplo'
}

export const WithoutTitle = Template.bind({})
WithoutTitle.args = {
  title: '',
  id: ''
}
