<template>
  <span v-if="count" class="ui-badge" :aria-label="`${count} itens`">
    {{ count > 99 ? '99+' : count }}
  </span>
</template>

<script>
export default {
  name: 'UiBadge',
  props: {
    count: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.ui-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  background: var(--color-secondary);
  color: var(--color-bg-dark);
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 700;
  border-radius: var(--radius-full);
  line-height: 1;
}
</style>
