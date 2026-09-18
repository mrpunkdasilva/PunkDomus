import Grid from './grid.vue'
import Card from '../card/card.vue'

export default {
  title: 'UI/Grid',
  component: Grid,
  argTypes: {
    columns: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 'auto']
    },
    gap: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl']
    },
    equalHeight: {
      control: { type: 'boolean' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Grid, Card },
  props: Object.keys(argTypes),
  template: `
    <Grid v-bind="$props">
      <Card><p style="color: var(--color-text-muted);">Item 1</p></Card>
      <Card><p style="color: var(--color-text-muted);">Item 2</p></Card>
      <Card><p style="color: var(--color-text-muted);">Item 3</p></Card>
    </Grid>
  `
})

export const ThreeColumns = Template.bind({})
ThreeColumns.args = {
  columns: 3,
  gap: 'md',
  equalHeight: true
}

export const TwoColumns = Template.bind({})
TwoColumns.args = {
  columns: 2,
  gap: 'lg',
  equalHeight: true
}

export const AutoFit = Template.bind({})
AutoFit.args = {
  columns: 'auto',
  gap: 'md',
  equalHeight: true
}
