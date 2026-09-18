<template>
  <div class="ui-search">
    <i class="fas fa-search ui-search__icon" aria-hidden="true" />
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      class="ui-search__input"
      aria-label="Buscar"
      v-on="{ ...$listeners, input: e => $emit('input', e.target.value) }"
    />
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    value: { type: String, default: '' },
    placeholder: { type: String, default: 'Buscar...' }
  }
}
</script>

<style scoped>
.ui-search {
  position: relative;
  width: 100%;
  max-width: 600px;
}

.ui-search__icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
  pointer-events: none;
  font-size: 16px;
}

.ui-search__input {
  width: 100%;
  padding: 15px 25px 15px 45px;
  background: var(--color-bg-card);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-full);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: var(--text-md);
  transition: all var(--transition-normal);
  outline: none;
}

.ui-search__input::placeholder {
  color: var(--color-text-muted);
  opacity: 0.6;
}

.ui-search__input:focus {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-glow-primary);
}

@media (prefers-reduced-motion: reduce) {
  .ui-search__input {
    transition: none;
  }
}
</style>
