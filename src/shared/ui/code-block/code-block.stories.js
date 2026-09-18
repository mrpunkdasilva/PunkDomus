import CodeBlock from './code-block.vue'

export default {
  title: 'UI/CodeBlock',
  component: CodeBlock,
  argTypes: {
    language: {
      control: { type: 'text' }
    },
    title: {
      control: { type: 'text' }
    },
    copyable: {
      control: { type: 'boolean' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { CodeBlock },
  props: Object.keys(argTypes),
  template: `
    <CodeBlock v-bind="$props">{{ code }}</CodeBlock>
  `
})

export const JavaScript = Template.bind({})
JavaScript.args = {
  language: 'javascript',
  title: 'Exemplo JavaScript',
  copyable: true,
  code: `const saudacao = (nome) => {
  return \`Olá, \${nome}!\`;
}

console.log(saudacao('Mundo'));`
}

export const Vue = Template.bind({})
Vue.args = {
  language: 'vue',
  title: 'Componente Vue',
  copyable: true,
  code: `<template>
  <div class="exemplo">
    <h1>{{ titulo }}</h1>
    <p>{{ descricao }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: 'Exemplo',
      descricao: 'Um componente Vue'
    }
  }
}
<\/script>`
}

export const CSS = Template.bind({})
CSS.args = {
  language: 'css',
  title: 'Estilos CSS',
  copyable: true,
  code: `.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  color: var(--color-primary);
  font-size: 2em;
}`
}

export const WithoutCopy = Template.bind({})
WithoutCopy.args = {
  language: 'javascript',
  title: 'Sem botão de copiar',
  copyable: false,
  code: `console.log('Sem opção de copiar');`
}
