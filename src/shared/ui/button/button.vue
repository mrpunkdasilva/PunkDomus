<template>
  <button
    :class="['ui-button', `ui-button--${variant}`, `ui-button--${size}`, { 'ui-button--loading': loading }]"
    :disabled="disabled || loading"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span v-if="loading" class="ui-button__spinner">
      <UiSpinner :size="size === 'sm' ? 14 : 18" />
    </span>
    <span class="ui-button__content" :class="{ 'ui-button__content--hidden': loading }">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  components: {
    UiSpinner: () => import('../spinner/spinner.vue')
  },
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: v => ['primary', 'secondary', 'ghost'].includes(v)
    },
    size: {
      type: String,
      default: 'md',
      validator: v => ['sm', 'md', 'lg'].includes(v)
    },
    loading: Boolean,
    disabled: Boolean
  }
}
</script>

<style scoped>
.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  font-family: var(--font-body);
  font-weight: 600;
  border: 1px solid transparent;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-normal);
  text-decoration: none;
  white-space: nowrap;
}

.ui-button:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

.ui-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Sizes */
.ui-button--sm {
  padding: 6px 14px;
  font-size: var(--text-xs);
}

.ui-button--md {
  padding: 10px 24px;
  font-size: var(--text-sm);
}

.ui-button--lg {
  padding: 14px 32px;
  font-size: var(--text-base);
}

/* Variants */
.ui-button--primary {
  background: var(--color-primary);
  color: var(--color-bg-dark);
  border-color: var(--color-primary);
}

.ui-button--primary:hover:not(:disabled) {
  background: transparent;
  color: var(--color-primary);
  box-shadow: var(--shadow-glow-primary);
}

.ui-button--secondary {
  background: transparent;
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}

.ui-button--secondary:hover:not(:disabled) {
  background: var(--color-secondary);
  color: var(--color-bg-dark);
  box-shadow: var(--shadow-glow-secondary);
}

.ui-button--ghost {
  background: transparent;
  color: var(--color-text-muted);
  border-color: var(--border-primary);
}

.ui-button--ghost:hover:not(:disabled) {
  color: var(--color-primary);
  border-color: var(--color-primary);
}

/* Loading */
.ui-button__spinner {
  position: absolute;
}

.ui-button__content--hidden {
  visibility: hidden;
}

.ui-button--loading {
  position: relative;
}
</style>
