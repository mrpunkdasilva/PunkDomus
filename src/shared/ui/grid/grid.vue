<template>
  <div
    :class="[
      'grid',
      `grid--${columns}`,
      `grid--gap-${gap}`,
      { 'grid--equal': equalHeight }
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    columns: {
      type: [Number, String],
      default: 'auto',
      validator: v => [1, 2, 3, 4, 'auto'].includes(v)
    },
    gap: {
      type: String,
      default: 'md',
      validator: v => ['sm', 'md', 'lg', 'xl'].includes(v)
    },
    equalHeight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  width: 100%;
}

.grid--1 { grid-template-columns: 1fr; }
.grid--2 { grid-template-columns: repeat(2, 1fr); }
.grid--3 { grid-template-columns: repeat(3, 1fr); }
.grid--4 { grid-template-columns: repeat(4, 1fr); }
.grid--auto { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }

.grid--equal > * {
  display: flex;
  flex-direction: column;
}

.grid--gap-sm { gap: var(--space-sm); }
.grid--gap-md { gap: var(--space-md); }
.grid--gap-lg { gap: var(--space-lg); }
.grid--gap-xl { gap: var(--space-xl); }

@media (max-width: 768px) {
  .grid--2,
  .grid--3,
  .grid--4 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .grid--3,
  .grid--4 {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
