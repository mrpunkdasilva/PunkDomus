<template>
  <div
    v-if="open"
    class="ui-modal"
    @click.self="$emit('close')"
    @keydown.escape="$emit('close')"
  >
    <div
      class="ui-modal__backdrop"
      @click="$emit('close')"
    />
    <div
      ref="dialog"
      class="ui-modal__dialog"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="titleId"
      tabindex="-1"
    >
      <div class="ui-modal__header">
        <h2 :id="titleId" class="ui-modal__title">{{ title }}</h2>
        <button
          class="ui-modal__close"
          @click="$emit('close')"
          aria-label="Fechar modal"
        >
          &times;
        </button>
      </div>
      <div class="ui-modal__body">
        <slot />
      </div>
      <div v-if="$slots.footer" class="ui-modal__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
let modalId = 0

export default {
  name: 'UiModal',
  props: {
    open: Boolean,
    title: { type: String, default: '' }
  },
  data() {
    return {
      titleId: `ui-modal-title-${++modalId}`,
      previousActiveElement: null
    }
  },
  watch: {
    open(val) {
      if (val) {
        this.previousActiveElement = document.activeElement
        this.$nextTick(() => {
          this.$refs.dialog?.focus()
          document.body.style.overflow = 'hidden'
        })
      } else {
        document.body.style.overflow = ''
        this.$nextTick(() => {
          this.previousActiveElement?.focus()
        })
      }
    }
  },
  beforeDestroy() {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.ui-modal {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-lg);
}

.ui-modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
}

.ui-modal__dialog {
  position: relative;
  width: 100%;
  max-width: 600px;
  max-height: 85vh;
  overflow-y: auto;
  background: var(--color-bg-card);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  animation: modal-in 0.3s ease;
}

.ui-modal__dialog:focus {
  outline: none;
}

.ui-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md) var(--space-lg);
  border-bottom: 1px solid var(--border-primary);
}

.ui-modal__title {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  color: var(--color-primary);
  margin: 0;
}

.ui-modal__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: transparent;
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  font-size: 24px;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.ui-modal__close:hover {
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}

.ui-modal__close:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

.ui-modal__body {
  padding: var(--space-lg);
}

.ui-modal__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-lg);
  border-top: 1px solid var(--border-primary);
}

@keyframes modal-in {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ui-modal__dialog {
    animation: none;
  }
}
</style>
