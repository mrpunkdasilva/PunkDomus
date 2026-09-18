<template>
  <div
    :class="['separator', `separator--${variant}`, `separator--${size}`]"
    role="separator"
    :aria-label="label"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: 'Separator',
  props: {
    variant: {
      type: String,
      default: 'gradient',
      validator: v => ['solid', 'gradient', 'dashed', 'glow'].includes(v)
    },
    size: {
      type: String,
      default: 'md',
      validator: v => ['sm', 'md', 'lg'].includes(v)
    },
    label: {
      type: String,
      default: 'Separador'
    }
  }
}
</script>

<style scoped>
.separator {
  width: 100%;
  border: none;
}

.separator--sm { height: 1px; }
.separator--md { height: 2px; }
.separator--lg { height: 3px; }

.separator--solid {
  background: var(--color-primary);
}

.separator--gradient {
  background: linear-gradient(90deg, transparent, var(--color-secondary), transparent);
}

.separator--dashed {
  background: none;
  border-top: 2px dashed var(--color-secondary);
}

.separator--glow {
  background: linear-gradient(90deg, transparent, var(--color-secondary), transparent);
  box-shadow: 0 0 10px rgba(252, 93, 127, 0.5);
}
</style>
