<template>
  <component
    :is="tag"
    :class="['list', `list--${variant}`, `list--${size}`]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'List',
  props: {
    tag: {
      type: String,
      default: 'ul',
      validator: v => ['ul', 'ol'].includes(v)
    },
    variant: {
      type: String,
      default: 'bullet',
      validator: v => ['bullet', 'numbered', 'none'].includes(v)
    },
    size: {
      type: String,
      default: 'md',
      validator: v => ['sm', 'md', 'lg'].includes(v)
    }
  }
}
</script>

<style scoped>
.list {
  font-family: var(--font-body);
  color: var(--color-text);
  padding-left: 0;
  list-style: none;
}

.list--bullet {
  list-style: disc;
  padding-left: var(--space-lg);
}

.list--numbered {
  list-style: decimal;
  padding-left: var(--space-lg);
}

.list--none {
  list-style: none;
  padding-left: 0;
}

.list--sm { font-size: var(--text-sm); }
.list--md { font-size: var(--text-base); }
.list--lg { font-size: var(--text-lg); }

.list :deep(li) {
  margin-bottom: var(--space-xs);
  line-height: 1.6;
}

.list :deep(li:last-child) {
  margin-bottom: 0;
}
</style>
