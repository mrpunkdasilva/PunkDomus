<template>
  <div
    :class="['ui-skeleton', `ui-skeleton--${variant}`]"
    :style="skeletonStyle"
    aria-hidden="true"
  />
</template>

<script>
export default {
  name: 'Skeleton',
  props: {
    variant: {
      type: String,
      default: 'text',
      validator: v => ['text', 'circle', 'rect', 'card'].includes(v)
    },
    width: { type: String, default: '' },
    height: { type: String, default: '' },
    animated: { type: Boolean, default: true }
  },
  computed: {
    skeletonStyle() {
      const style = {}
      if (this.width) style.width = this.width
      if (this.height) style.height = this.height
      return style
    }
  }
}
</script>

<style scoped>
.ui-skeleton {
  background: linear-gradient(
    90deg,
    var(--color-bg-card) 25%,
    rgba(33, 222, 234, 0.05) 50%,
    var(--color-bg-card) 75%
  );
  background-size: 200% 100%;
  border-radius: var(--radius-sm);
}

.ui-skeleton--text {
  height: 1em;
  margin-bottom: 0.5em;
}

.ui-skeleton--text:last-child {
  width: 70%;
}

.ui-skeleton--circle {
  border-radius: 50%;
}

.ui-skeleton--rect {
  border-radius: var(--radius-md);
}

.ui-skeleton--card {
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.ui-skeleton--animated {
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
}

@keyframes skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-skeleton--animated {
    animation: none;
    opacity: 0.5;
  }
}
</style>
