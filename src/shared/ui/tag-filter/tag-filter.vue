<template>
  <div class="ui-tag-filter" role="group" :aria-label="label">
    <button
      class="ui-tag-filter__btn"
      :class="{ 'ui-tag-filter__btn--active': !modelValue }"
      @click="$emit('update:modelValue', null)"
    >
      All
    </button>
    <button
      v-for="tag in tags"
      :key="tag"
      class="ui-tag-filter__btn"
      :class="{ 'ui-tag-filter__btn--active': modelValue === tag }"
      :aria-pressed="modelValue === tag"
      @click="$emit('update:modelValue', tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'UiTagFilter',
  props: {
    tags: { type: Array, required: true },
    modelValue: { type: String, default: null },
    label: { type: String, default: 'Filtrar por tag' }
  }
}
</script>

<style scoped>
.ui-tag-filter {
  display: flex;
  justify-content: center;
  gap: var(--space-xs);
  flex-wrap: wrap;
}

.ui-tag-filter__btn {
  background: transparent;
  border: 1px solid var(--color-secondary);
  color: var(--color-secondary);
  padding: 8px 16px;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  cursor: pointer;
  transition: all var(--transition-normal);
}

.ui-tag-filter__btn:hover {
  background: rgba(252, 93, 127, 0.1);
}

.ui-tag-filter__btn--active {
  background: var(--color-secondary);
  color: var(--color-bg-dark);
}

.ui-tag-filter__btn:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .ui-tag-filter__btn {
    transition: none;
  }
}
</style>
