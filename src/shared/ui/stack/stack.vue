<template>
  <component
    :is="tag"
    :class="[
      'stack',
      `stack--${direction}`,
      `stack--gap-${gap}`,
      `stack--align-${align}`,
      `stack--justify-${justify}`
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Stack',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    direction: {
      type: String,
      default: 'vertical',
      validator: v => ['horizontal', 'vertical'].includes(v)
    },
    gap: {
      type: String,
      default: 'md',
      validator: v => ['none', 'xs', 'sm', 'md', 'lg', 'xl'].includes(v)
    },
    align: {
      type: String,
      default: 'stretch',
      validator: v => ['start', 'center', 'end', 'stretch'].includes(v)
    },
    justify: {
      type: String,
      default: 'start',
      validator: v => ['start', 'center', 'end', 'between', 'around'].includes(v)
    }
  }
}
</script>

<style scoped>
.stack {
  display: flex;
}

.stack--vertical {
  flex-direction: column;
}

.stack--horizontal {
  flex-direction: row;
}

.stack--gap-none { gap: 0; }
.stack--gap-xs { gap: var(--space-2xs); }
.stack--gap-sm { gap: var(--space-xs); }
.stack--gap-md { gap: var(--space-sm); }
.stack--gap-lg { gap: var(--space-md); }
.stack--gap-xl { gap: var(--space-lg); }

.stack--align-start { align-items: flex-start; }
.stack--align-center { align-items: center; }
.stack--align-end { align-items: flex-end; }
.stack--align-stretch { align-items: stretch; }

.stack--justify-start { justify-content: flex-start; }
.stack--justify-center { justify-content: center; }
.stack--justify-end { justify-content: flex-end; }
.stack--justify-between { justify-content: space-between; }
.stack--justify-around { justify-content: space-around; }
</style>
