<template>
  <div class="toc-container" v-if="toc && toc.length">
    <h3 class="toc-title">Neste Artigo</h3>
    <nav class="toc-nav">
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
          <a :href="`#${item.id}`" @click.prevent="scrollTo(item.id)">
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
    toc: {
      type: Array,
      required: true
    }
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
  background: rgba(8, 14, 26, 0.8);
  border: 1px solid rgba(33, 222, 234, 0.15);
  border-radius: 12px;
  padding: 24px;
}

.toc-title {
  color: #21DEEA;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(33, 222, 234, 0.15);
  font-family: 'Protest Guerrilla', sans-serif;
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
  color: #afafaf;
  text-decoration: none;
  font-size: 0.85em;
  line-height: 1.4;
  border-radius: 6px;
  border-left: 2px solid transparent;
  transition: all 0.2s ease;
  font-family: 'Inria Sans', sans-serif;
}

.toc-item a:hover {
  color: #efefef;
  background: rgba(33, 222, 234, 0.05);
}

.toc-depth-3 a {
  padding-left: 24px;
  font-size: 0.8em;
}

.toc-active a {
  color: #21DEEA;
  border-left-color: #21DEEA;
  background: rgba(33, 222, 234, 0.08);
}

@media (max-width: 1200px) {
  .toc-aside {
    display: none;
  }
}
</style>
