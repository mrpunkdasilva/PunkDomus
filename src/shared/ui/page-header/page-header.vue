<template>
  <header class="ui-page-header">
    <h1 class="ui-page-header__title">{{ title }}</h1>
    <p v-if="subtitle" class="ui-page-header__subtitle">{{ subtitle }}</p>
    <div class="ui-page-header__line" />
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, default: '' }
  }
}
</script>

<style scoped>
.ui-page-header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.ui-page-header__title {
  font-family: var(--font-hero);
  font-size: clamp(2.5em, 5vw, 4em);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: var(--space-xs);
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5), 0 0 20px rgba(33, 222, 234, 0.3);
}

.ui-page-header__subtitle {
  font-family: var(--font-body);
  font-size: clamp(1em, 2vw, 1.2em);
  color: var(--color-text-muted);
  margin-bottom: var(--space-md);
  line-height: 1.6;
}

.ui-page-header__line {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-secondary), transparent);
  width: 50%;
  margin: 0 auto;
}
</style>
