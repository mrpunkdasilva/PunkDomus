import Stack from './stack.vue'
import Button from '../button/button.vue'

export default {
  title: 'UI/Stack',
  component: Stack,
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical']
    },
    gap: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl']
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch']
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around']
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Stack, Button },
  props: Object.keys(argTypes),
  template: `
    <Stack v-bind="$props">
      <Button variant="primary">Botão 1</Button>
      <Button variant="secondary">Botão 2</Button>
      <Button variant="ghost">Botão 3</Button>
    </Stack>
  `
})

export const Vertical = Template.bind({})
Vertical.args = {
  direction: 'vertical',
  gap: 'md',
  align: 'start',
  justify: 'start'
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: 'horizontal',
  gap: 'md',
  align: 'center',
  justify: 'start'
}

export const SpaceBetween = Template.bind({})
SpaceBetween.args = {
  direction: 'horizontal',
  gap: 'none',
  align: 'center',
  justify: 'between'
}
