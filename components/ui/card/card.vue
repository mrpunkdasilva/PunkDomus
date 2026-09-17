<template>
  <div
    :class="[
      'ui-card',
      `ui-card--${variant}`,
      { 'ui-card--hoverable': hoverable }
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiCard',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: v => ['default', 'featured'].includes(v)
    },
    hoverable: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.ui-card {
  background: var(--color-bg-card);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  transition: all var(--transition-normal);
}

.ui-card--featured {
  border-color: var(--border-secondary);
}

.ui-card--hoverable:hover {
  transform: translateY(-5px);
  border-color: var(--border-primary-hover);
  box-shadow: var(--shadow-md), 0 0 20px rgba(33, 222, 234, 0.15);
}

.ui-card--featured.ui-card--hoverable:hover {
  border-color: var(--border-secondary-hover);
  box-shadow: var(--shadow-md), 0 0 20px rgba(252, 93, 127, 0.15);
}

@media (prefers-reduced-motion: reduce) {
  .ui-card {
    transition: none;
  }

  .ui-card--hoverable:hover {
    transform: none;
  }
}
</style>
