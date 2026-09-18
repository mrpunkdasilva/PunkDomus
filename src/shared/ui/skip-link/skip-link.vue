<template>
  <a
    :href="href"
    class="skip-link"
    @click.prevent="skipTo"
  >
    <slot>Pular para o conteúdo</slot>
  </a>
</template>

<script>
export default {
  name: 'SkipLink',
  props: {
    href: {
      type: String,
      default: '#main-content'
    }
  },
  methods: {
    skipTo() {
      const target = document.querySelector(this.href)
      if (target) {
        target.setAttribute('tabindex', '-1')
        target.focus()
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.skip-link {
  position: fixed;
  top: -100%;
  left: var(--space-sm);
  z-index: var(--z-skip-link);
  padding: var(--space-xs) var(--space-md);
  background: var(--color-primary);
  color: var(--color-bg-dark);
  font-family: var(--font-body);
  font-weight: 700;
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
  text-decoration: none;
  transition: top var(--transition-fast);
}

.skip-link:focus {
  top: 0;
  outline: 3px solid var(--color-secondary);
  outline-offset: 2px;
}
</style>
