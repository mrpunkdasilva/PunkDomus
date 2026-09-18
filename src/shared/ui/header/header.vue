<template>
  <header :class="['header', `header--${variant}`]" v-bind="$attrs" v-on="$listeners">
    <slot />
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: v => ['default', 'sticky', 'transparent'].includes(v)
    }
  }
}
</script>

<style scoped>
.header {
  font-family: var(--font-heading);
  padding: var(--space-md) var(--space-lg);
  z-index: var(--z-sticky);
}

.header--default {
  background: rgba(8, 14, 26, 0.95);
  border-bottom: 1px solid var(--border-primary);
}

.header--sticky {
  position: sticky;
  top: 0;
  background: rgba(8, 14, 26, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-primary);
}

.header--transparent {
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>
