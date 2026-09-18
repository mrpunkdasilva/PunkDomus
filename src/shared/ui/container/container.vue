<template>
  <component
    :is="tag"
    :class="['container', `container--${size}`, { 'container--centered': centered }]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Container',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    size: {
      type: String,
      default: 'md',
      validator: v => ['sm', 'md', 'lg', 'xl', 'full'].includes(v)
    },
    centered: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.container--centered {
  display: flex;
  flex-direction: column;
}

.container--sm { max-width: 640px; }
.container--md { max-width: 1024px; }
.container--lg { max-width: 1280px; }
.container--xl { max-width: 1440px; }
.container--full { max-width: 100%; }
</style>
