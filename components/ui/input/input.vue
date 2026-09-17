<template>
  <label class="ui-input" :class="{ 'ui-input--focused': isFocused }">
    <span v-if="label" class="ui-input__label">{{ label }}</span>
    <div class="ui-input__wrapper">
      <i v-if="icon" :class="['ui-input__icon', icon]"></i>
      <input
        ref="input"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :disabled="disabled"
        class="ui-input__field"
        v-bind="$attrs"
        v-on="{ ...$listeners, input: onInput, focus: onFocus, blur: onBlur }"
      />
    </div>
  </label>
</template>

<script>
export default {
  name: 'UiInput',
  props: {
    value: { type: [String, Number], default: '' },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    label: { type: String, default: '' },
    icon: { type: String, default: '' },
    disabled: Boolean
  },
  data() {
    return { isFocused: false }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
    onFocus() {
      this.isFocused = true
      this.$emit('focus')
    },
    onBlur() {
      this.isFocused = false
      this.$emit('blur')
    },
    focus() {
      this.$refs.input.focus()
    }
  }
}
</script>

<style scoped>
.ui-input {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  width: 100%;
}

.ui-input__label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 600;
}

.ui-input__wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.ui-input__icon {
  position: absolute;
  left: 16px;
  color: var(--color-text-muted);
  font-size: var(--text-base);
  pointer-events: none;
  transition: color var(--transition-fast);
}

.ui-input__field {
  width: 100%;
  padding: 14px 20px;
  padding-left: 44px;
  background: var(--color-bg-card);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-full);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: var(--text-md);
  transition: all var(--transition-normal);
  outline: none;
}

.ui-input:not(:has(.ui-input__icon)) .ui-input__field {
  padding-left: 20px;
}

.ui-input__field::placeholder {
  color: var(--color-text-muted);
  opacity: 0.6;
}

.ui-input--focused .ui-input__field {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-glow-primary);
}

.ui-input--focused .ui-input__icon {
  color: var(--color-primary);
}

.ui-input__field:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (prefers-reduced-motion: reduce) {
  .ui-input__field {
    transition: none;
  }
}
</style>
