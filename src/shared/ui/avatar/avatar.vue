<template>
  <div :class="['avatar', `avatar--${size}`, `avatar--${shape}`]" v-bind="$attrs">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="avatar__image"
    />
    <span v-else class="avatar__initials">
      {{ initials }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md',
      validator: v => ['xs', 'sm', 'md', 'lg', 'xl'].includes(v)
    },
    shape: {
      type: String,
      default: 'circle',
      validator: v => ['circle', 'square'].includes(v)
    }
  },
  computed: {
    initials() {
      if (!this.name) return '?'
      return this.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }
  }
}
</script>

<style scoped>
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-card);
  border: 2px solid var(--border-primary);
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-weight: 600;
  overflow: hidden;
  flex-shrink: 0;
}

.avatar--circle { border-radius: 50%; }
.avatar--square { border-radius: var(--radius-md); }

.avatar--xs { width: 32px; height: 32px; font-size: var(--text-xs); }
.avatar--sm { width: 40px; height: 40px; font-size: var(--text-sm); }
.avatar--md { width: 48px; height: 48px; font-size: var(--text-base); }
.avatar--lg { width: 64px; height: 64px; font-size: var(--text-lg); }
.avatar--xl { width: 80px; height: 80px; font-size: var(--text-xl); }

.avatar__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar__initials {
  text-transform: uppercase;
}
</style>
