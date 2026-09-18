<template>
  <footer :class="['footer', `footer--${variant}`]" v-bind="$attrs" v-on="$listeners">
    <slot />
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: v => ['default', 'minimal'].includes(v)
    }
  }
}
</script>

<style scoped>
.footer {
  font-family: var(--font-body);
  color: var(--color-text-muted);
  padding: var(--space-xl) var(--space-lg);
  border-top: 1px solid var(--border-primary);
}

.footer--default {
  background: rgba(8, 14, 26, 0.9);
}

.footer--minimal {
  background: transparent;
  padding: var(--space-md) var(--space-lg);
  text-align: center;
}
</style>
