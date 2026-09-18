<template>
  <component
    :is="tag"
    :class="['text', `text--${variant}`, `text--${weight}`]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Text',
  props: {
    tag: {
      type: String,
      default: 'p',
      validator: v => ['p', 'span', 'small', 'strong', 'em'].includes(v)
    },
    variant: {
      type: String,
      default: 'body',
      validator: v => ['body', 'muted', 'caption', 'lead'].includes(v)
    },
    weight: {
      type: String,
      default: 'normal',
      validator: v => ['light', 'normal', 'semibold', 'bold'].includes(v)
    }
  }
}
</script>

<style scoped>
.text {
  font-family: var(--font-body);
  line-height: 1.6;
  margin-bottom: 0;
}

.text:last-child {
  margin-bottom: 0;
}

.text--body {
  font-size: var(--text-base);
  color: var(--color-text);
}

.text--muted {
  font-size: var(--text-base);
  color: var(--color-text-muted);
}

.text--caption {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.text--lead {
  font-size: var(--text-lg);
  color: var(--color-text);
  line-height: 1.8;
}

.text--light {
  font-weight: 300;
}

.text--normal {
  font-weight: 400;
}

.text--semibold {
  font-weight: 600;
}

.text--bold {
  font-weight: 700;
}
</style>
