<template>
  <div class="toc-container" v-if="toc && toc.length">
    <h3 class="toc-title">Neste Artigo</h3>
    <nav class="toc-nav" aria-label="Índice do artigo">
      <ul>
        <li
          v-for="item in toc"
          :key="item.id"
          :class="[
            'toc-item',
            `toc-depth-${item.depth}`,
            { 'toc-active': activeId === item.id }
          ]"
        >
          <a :href="`#${item.id}`" @click.prevent="scrollTo(item.id)" :aria-current="activeId === item.id ? 'true' : undefined">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TableOfContents',
  props: {
    toc: { type: Array, required: true }
  },
  data() {
    return {
      activeId: '',
      observer: null
    }
  },
  mounted() {
    this.setupObserver()
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    },
    setupObserver() {
      const options = {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0
      }

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeId = entry.target.id
          }
        })
      }, options)

      this.$nextTick(() => {
        this.toc.forEach(item => {
          const el = document.getElementById(item.id)
          if (el) {
            this.observer.observe(el)
          }
        })
      })
    }
  }
}
</script>

<style scoped>
.toc-container {
  background: var(--color-bg-card);
  border: 1px solid rgba(33, 222, 234, 0.15);
  border-radius: var(--radius-md);
  padding: var(--space-md);
}

.toc-title {
  color: var(--color-primary);
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid rgba(33, 222, 234, 0.15);
  font-family: var(--font-heading);
}

.toc-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-item {
  margin-bottom: 4px;
}

.toc-item a {
  display: block;
  padding: 6px 10px;
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: var(--text-sm);
  line-height: 1.4;
  border-radius: var(--radius-sm);
  border-left: 2px solid transparent;
  transition: all var(--transition-fast);
  font-family: var(--font-body);
}

.toc-item a:hover {
  color: var(--color-text);
  background: rgba(33, 222, 234, 0.05);
}

.toc-item a:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.toc-depth-3 a {
  padding-left: 24px;
  font-size: var(--text-xs);
}

.toc-active a {
  color: var(--color-primary);
  border-left-color: var(--color-primary);
  background: rgba(33, 222, 234, 0.08);
}

@media (prefers-reduced-motion: reduce) {
  .toc-item a {
    transition: none;
  }
}

@media (max-width: 1200px) {
  .toc-aside {
    display: none;
  }
}
</style>
