<template>
  <div :class="['code-block', { 'code-block--copyable': copyable }]" v-bind="$attrs">
    <div v-if="language || title" class="code-block__header">
      <span v-if="language" class="code-block__language">{{ language }}</span>
      <span v-if="title" class="code-block__title">{{ title }}</span>
      <button
        v-if="copyable"
        class="code-block__copy"
        @click="copyCode"
        :aria-label="copied ? 'Copiado!' : 'Copiar código'"
      >
        {{ copied ? '✓' : '📋' }}
      </button>
    </div>
    <pre class="code-block__pre"><code class="code-block__code" :class="language ? `language-${language}` : ''"><slot /></code></pre>
  </div>
</template>

<script>
export default {
  name: 'CodeBlock',
  props: {
    language: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    copyable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      copied: false
    }
  },
  methods: {
    async copyCode() {
      const code = this.$el.querySelector('code')?.textContent || ''
      try {
        await navigator.clipboard.writeText(code)
        this.copied = true
        setTimeout(() => { this.copied = false }, 2000)
      } catch (e) {
        console.error('Falha ao copiar:', e)
      }
    }
  }
}
</script>

<style scoped>
.code-block {
  background: var(--color-bg-dark);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: var(--space-md);
}

.code-block__header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-xs) var(--space-md);
  background: rgba(33, 222, 234, 0.05);
  border-bottom: 1px solid var(--border-primary);
}

.code-block__language {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.code-block__title {
  font-family: var(--font-heading);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  flex: 1;
}

.code-block__copy {
  background: transparent;
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-sm);
  padding: 4px 8px;
  cursor: pointer;
  font-size: var(--text-sm);
  transition: all var(--transition-fast);
}

.code-block__copy:hover {
  border-color: var(--color-primary);
  background: rgba(33, 222, 234, 0.1);
}

.code-block__pre {
  margin: 0;
  padding: var(--space-md);
  overflow-x: auto;
}

.code-block__code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-text);
  line-height: 1.6;
}
</style>
