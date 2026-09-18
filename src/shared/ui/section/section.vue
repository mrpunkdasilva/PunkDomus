<template>
  <section
    :id="id"
    :aria-labelledby="id ? `section-${id}` : undefined"
    class="ui-section"
  >
    <h2 v-if="title" :id="id ? `section-${id}` : undefined" class="ui-section__title">
      {{ title }}
    </h2>
    <div class="ui-section__line" v-if="title" />
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: { type: String, default: '' },
    id: { type: String, default: '' }
  }
}
</script>

<style scoped>
.ui-section {
  width: 100%;
}

.ui-section__title {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  color: var(--color-primary);
  text-align: center;
  margin-bottom: var(--space-lg);
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5);
}

.ui-section__line {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-secondary), transparent);
  width: 50%;
  margin: 0 auto var(--space-xl);
}
</style>
