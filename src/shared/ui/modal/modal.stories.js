import Modal from './modal.vue'
import Button from '../button/button.vue'

export default {
  title: 'UI/Modal',
  component: Modal,
  argTypes: {
    open: {
      control: { type: 'boolean' }
    },
    title: {
      control: { type: 'text' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Modal, Button },
  props: Object.keys(argTypes),
  data() {
    return { showModal: args.open }
  },
  template: `
    <div>
      <Button @click="showModal = true">Abrir Modal</Button>
      <Modal :open="showModal" title="Exemplo de Modal" @close="showModal = false">
        <p style="color: var(--color-text-muted); margin-bottom: 20px;">
          Este é um exemplo de modal com conteúdo personalizado.
        </p>
        <Button @click="showModal = false">Fechar</Button>
      </Modal>
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  open: false,
  title: 'Exemplo de Modal'
}
