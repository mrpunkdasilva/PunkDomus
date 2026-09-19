<template>
  <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }" class="blog-card-link" :aria-label="`Ler artigo: ${post.title}`">
    <article class="blog-card">
      <div class="card-image" :style="imageStyle">
        <img v-if="post.img" :src="require(`~/public/resources/${post.img}`)" :alt="post.title" class="card-image-img" loading="lazy"/>
        <div v-else class="card-image-placeholder" :style="{ background: placeholderColor }">
          <span class="placeholder-text" aria-hidden="true">{{ post.title.charAt(0) }}</span>
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-title">{{ post.title }}</h3>
        <div class="card-meta">
          <time class="date" :datetime="post.createdAt">{{ formatDate(post.createdAt) }}</time>
          <div class="tags" v-if="post.tags">
            <Tag v-for="tag in post.tags" :key="tag">{{ tag }}</Tag>
          </div>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
import { formatDate } from '~/shared/utils/format-date'

const CYBER_COLORS = [
  '#21DEEA', '#FC5D7F', '#9B59B6', '#E74C3C', '#2ECC71',
  '#F39C12', '#1ABC9C', '#E91E63', '#00BCD4', '#FF5722',
]

function hashCode(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash)
}

export default {
  name: 'BlogCard',

  props: {
    post: { type: Object, required: true }
  },
  computed: {
    placeholderColor() {
      const index = hashCode(this.post.slug) % CYBER_COLORS.length
      return CYBER_COLORS[index]
    },
    imageStyle() {
      if (this.post.img) return {}
      return { height: '200px' }
    }
  },
  methods: {
    formatDate
  }
}
</script>

<style scoped>
.blog-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.blog-card {
  background: var(--color-bg-card);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all var(--transition-bounce);
  height: 389px;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.blog-card:hover {
  transform: translateY(-10px) scale(1.03);
  border-color: var(--border-primary-hover);
  box-shadow: var(--shadow-lg);
}

.card-image {
  width: 100%;
  height: 140px;
  overflow: hidden;
  border-bottom: 1px solid var(--border-primary);
  flex-shrink: 0;
}

.card-image-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.card-image-placeholder::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    45deg, transparent, transparent 10px,
    rgba(0, 0, 0, 0.1) 10px, rgba(0, 0, 0, 0.1) 20px
  );
}

.placeholder-text {
  font-size: 2em;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  font-family: var(--font-heading);
  z-index: 1;
}

.card-content {
  padding: var(--space-sm);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: var(--space-md);
}

.card-title {
  color: var(--color-primary);
  font-size: var(--text-sm);
  font-weight: 700;
  line-height: 1.3;
}

.card-meta {
  margin-top: auto;
  padding: var(--space-sm);
  border-top: 1px solid rgba(252, 93, 127, 0.1);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.date {
  font-size: 0.7em;
  color: var(--color-secondary);
  display: block;
  margin-bottom: var(--space-2xs);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2xs);
}

@media (prefers-reduced-motion: reduce) {
  .blog-card {
    transition: none;
  }

  .blog-card:hover {
    transform: none;
  }
}

@media (max-width: 480px) {
  .blog-card {
    height: 300px;
  }

  .card-image {
    height: 140px;
  }

  .card-content {
    padding: var(--space-xs);
    gap: var(--space-sm);
  }

  .card-meta {
    padding: var(--space-xs);
    gap: var(--space-2xs);
  }
}
</style>
