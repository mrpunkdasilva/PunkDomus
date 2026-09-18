<template>
  <span
    :class="['chip', `chip--${variant}`]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
    <button
      v-if="removable"
      class="chip__remove"
      @click.stop="$emit('remove')"
      aria-label="Remover"
    >
      &times;
    </button>
  </span>
</template>

<script>
export default {
  name: 'Chip',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: v => ['primary', 'secondary', 'outline'].includes(v)
    },
    removable: Boolean
  }
}
</script>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2xs);
  padding: 8px 16px;
  border-radius: var(--radius-full);
  font-family: var(--font-heading);
  font-size: var(--text-sm);
  border: 1px solid transparent;
  transition: all var(--transition-normal);
  cursor: default;
}

.chip:hover {
  transform: translateY(-2px);
}

.chip--primary {
  background: rgba(252, 93, 127, 0.1);
  color: var(--color-secondary);
  border-color: rgba(252, 93, 127, 0.3);
}

.chip--primary:hover {
  background: rgba(252, 93, 127, 0.2);
  box-shadow: 0 5px 15px rgba(252, 93, 127, 0.2);
}

.chip--secondary {
  background: rgba(33, 222, 234, 0.1);
  color: var(--color-primary);
  border-color: rgba(33, 222, 234, 0.3);
}

.chip--secondary:hover {
  background: rgba(33, 222, 234, 0.2);
  box-shadow: 0 5px 15px rgba(33, 222, 234, 0.2);
}

.chip--outline {
  background: transparent;
  color: var(--color-text-muted);
  border-color: var(--border-primary);
}

.chip--outline:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.chip__remove {
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

.chip__remove:hover {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .chip {
    transition: none;
  }
  .chip:hover {
    transform: none;
  }
}
</style>
