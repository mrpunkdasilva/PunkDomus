import Container from './container.vue'

export default {
  title: 'UI/Container',
  component: Container,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full']
    },
    centered: {
      control: { type: 'boolean' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Container },
  props: Object.keys(argTypes),
  template: `
    <Container v-bind="$props">
      <div style="background: var(--color-bg-card); padding: 20px; border: 1px solid var(--border-primary);">
        <p style="color: var(--color-text-muted);">Conteúdo dentro do container.</p>
      </div>
    </Container>
  `
})

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  centered: true
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  centered: true
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  centered: true
}

export const Full = Template.bind({})
Full.args = {
  size: 'full',
  centered: false
}
