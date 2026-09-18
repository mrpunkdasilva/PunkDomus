<template>
  <nav :class="['nav', `nav--${variant}`]" v-bind="$attrs" v-on="$listeners">
    <slot />
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    variant: {
      type: String,
      default: 'horizontal',
      validator: v => ['horizontal', 'vertical'].includes(v)
    }
  }
}
</script>

<style scoped>
.nav {
  font-family: var(--font-heading);
}

.nav--horizontal {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.nav--vertical {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}
</style>
