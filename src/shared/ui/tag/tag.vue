<template>
  <span :class="['ui-tag', `ui-tag--${variant}`]">
    <slot />
    <button
      v-if="removable"
      class="ui-tag__remove"
      @click.stop="$emit('remove')"
      aria-label="Remover tag"
    >
      &times;
    </button>
  </span>
</template>

<script>
export default {
  name: 'UiTag',
  props: {
    variant: {
      type: String,
      default: 'secondary',
      validator: v => ['primary', 'secondary'].includes(v)
    },
    removable: Boolean
  }
}
</script>

<style scoped>
.ui-tag {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2xs);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  border: 1px solid transparent;
  white-space: nowrap;
}

.ui-tag--primary {
  background: rgba(33, 222, 234, 0.1);
  color: var(--color-primary);
  border-color: rgba(33, 222, 234, 0.2);
}

.ui-tag--secondary {
  background: rgba(252, 93, 127, 0.1);
  color: var(--color-secondary);
  border-color: rgba(252, 93, 127, 0.2);
}

.ui-tag__remove {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  background: transparent;
  border: none;
  color: inherit;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity var(--transition-fast);
}

.ui-tag__remove:hover {
  opacity: 1;
}

.ui-tag__remove:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 1px;
  border-radius: 2px;
}
</style>
