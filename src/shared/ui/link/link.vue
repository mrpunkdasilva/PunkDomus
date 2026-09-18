<template>
  <nuxt-link
    v-if="to && !external"
    :to="to"
    :class="['link', `link--${variant}`]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </nuxt-link>
  <a
    v-else
    :href="href"
    :target="target"
    :rel="rel"
    :class="['link', `link--${variant}`]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    href: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: 'primary',
      validator: v => ['primary', 'secondary', 'ghost'].includes(v)
    },
    external: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    target() {
      return this.external ? '_blank' : null
    },
    rel() {
      return this.external ? 'noopener noreferrer' : null
    }
  }
}
</script>

<style scoped>
.link {
  font-family: var(--font-heading);
  text-decoration: none;
  transition: all var(--transition-normal);
  cursor: pointer;
}

.link--primary {
  color: var(--color-secondary);
}

.link--primary:hover {
  color: var(--color-primary);
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5);
}

.link--secondary {
  color: var(--color-primary);
}

.link--secondary:hover {
  color: var(--color-secondary);
  text-shadow: 0 0 10px rgba(252, 93, 127, 0.5);
}

.link--ghost {
  color: var(--color-text-muted);
  border-bottom: 1px solid transparent;
}

.link--ghost:hover {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.link:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 2px;
}
</style>
