<template>
  <component
    :is="`h${level}`"
    :class="['heading', `heading--${level}`, `heading--${weight}`]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    level: {
      type: Number,
      default: 2,
      validator: v => v >= 1 && v <= 6
    },
    weight: {
      type: String,
      default: 'bold',
      validator: v => ['light', 'normal', 'semibold', 'bold'].includes(v)
    }
  }
}
</script>

<style scoped>
.heading {
  color: var(--color-primary);
  font-family: var(--font-heading);
  line-height: 1.2;
  margin-bottom: var(--space-sm);
}

.heading:last-child {
  margin-bottom: 0;
}

.heading--1 {
  font-family: var(--font-hero);
  font-size: clamp(2.5em, 5vw, 4em);
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5), 0 0 20px rgba(33, 222, 234, 0.3);
}

.heading--2 {
  font-size: var(--text-2xl);
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5);
}

.heading--3 {
  font-size: var(--text-xl);
}

.heading--4 {
  font-size: var(--text-lg);
}

.heading--5 {
  font-size: var(--text-md);
}

.heading--6 {
  font-size: var(--text-base);
}

.heading--light {
  font-weight: 300;
}

.heading--normal {
  font-weight: 400;
}

.heading--semibold {
  font-weight: 600;
}

.heading--bold {
  font-weight: 700;
}
</style>
