import Card from './card.vue'

export default {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'featured']
    },
    hoverable: {
      control: { type: 'boolean' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Card },
  props: Object.keys(argTypes),
  template: `
    <Card v-bind="$props">
      <h3 style="color: var(--color-primary); margin-bottom: 10px;">Título do Card</h3>
      <p style="color: var(--color-text-muted);">Este é um exemplo de card com conteúdo.</p>
    </Card>
  `
})

export const Default = Template.bind({})
Default.args = {
  variant: 'default',
  hoverable: true
}

export const Featured = Template.bind({})
Featured.args = {
  variant: 'featured',
  hoverable: true
}

export const NotHoverable = Template.bind({})
NotHoverable.args = {
  variant: 'default',
  hoverable: false
}
