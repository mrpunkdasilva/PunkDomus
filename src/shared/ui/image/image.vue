<template>
  <div :class="['image-wrapper', `image-wrapper--${radius}`]" v-bind="$attrs">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
      :class="['image', `image--${objectFit}`]"
      @error="onError"
    />
    <div v-else class="image-fallback">
      <slot name="fallback">
        <span class="image-fallback__icon">?</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Image',
  props: {
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: ''
    },
    lazy: {
      type: Boolean,
      default: true
    },
    objectFit: {
      type: String,
      default: 'cover',
      validator: v => ['cover', 'contain', 'fill', 'none'].includes(v)
    },
    radius: {
      type: String,
      default: 'md',
      validator: v => ['none', 'sm', 'md', 'lg', 'full'].includes(v)
    }
  },
  methods: {
    onError(e) {
      this.$emit('error', e)
    }
  }
}
</script>

<style scoped>
.image-wrapper {
  overflow: hidden;
  display: inline-block;
  position: relative;
  background: var(--color-bg-card);
}

.image-wrapper--none { border-radius: 0; }
.image-wrapper--sm { border-radius: var(--radius-sm); }
.image-wrapper--md { border-radius: var(--radius-md); }
.image-wrapper--lg { border-radius: var(--radius-lg); }
.image-wrapper--full { border-radius: var(--radius-full); }

.image {
  display: block;
  width: 100%;
  height: 100%;
}

.image--cover { object-fit: cover; }
.image--contain { object-fit: contain; }
.image--fill { object-fit: fill; }
.image--none { object-fit: none; }

.image-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100px;
  background: var(--color-bg-card);
  border: 1px dashed var(--border-primary);
}

.image-fallback__icon {
  font-size: 2em;
  color: var(--color-text-muted);
}
</style>
