<template>
  <span class="ui-spinner" :style="{ width: size + 'px', height: size + 'px' }">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-spinner__svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-linecap="round" class="ui-spinner__track" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round" class="ui-spinner__head" />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    size: {
      type: Number,
      default: 24
    }
  }
}
</script>

<style scoped>
.ui-spinner {
  display: inline-flex;
  color: var(--color-primary);
}

.ui-spinner__svg {
  width: 100%;
  height: 100%;
  animation: spinner-rotate 1s linear infinite;
}

.ui-spinner__track {
  opacity: 0.2;
}

.ui-spinner__head {
  animation: spinner-dash 1.5s ease-in-out infinite;
}

@keyframes spinner-rotate {
  100% { transform: rotate(360deg); }
}

@keyframes spinner-dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
