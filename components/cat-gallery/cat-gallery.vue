<template>
  <div class="cat-gallery" aria-label="Galeria de gatos">
    <div class="cat-header">
      <span class="cat-icon" aria-hidden="true">🐱</span>
      <h3 class="cat-title">Cat Break</h3>
      <span class="cat-icon" aria-hidden="true">🐱</span>
    </div>
    <p class="cat-subtitle">take a pause, enjoy some cats</p>

    <template v-if="loading">
      <CatGallerySkeleton />
    </template>

    <template v-else-if="cats.length">
      <div class="cat-grid">
        <div
          v-for="(cat, index) in cats"
          :key="index"
          class="cat-wrapper"
          :class="`cat-size-${index}`"
        >
          <img
            :src="cat"
            :alt="`Gato meme ${index + 1}`"
            class="cat-image"
            loading="lazy"
          />
          <div class="cat-glow" aria-hidden="true"></div>
        </div>
      </div>
      <button class="cat-refresh" @click="fetchCats" aria-label="Carregar mais gatos">
        <span class="refresh-icon" aria-hidden="true">↻</span> more cats
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CatGallery',
  components: {
    CatGallerySkeleton: () => import('../cat-gallery-skeleton/cat-gallery-skeleton.vue')
  },
  data() {
    return {
      cats: [],
      loading: true
    }
  },
  async mounted() {
    await this.fetchCats()
  },
  methods: {
    async fetchCats() {
      this.loading = true
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=3&mime_types=gif')
        const data = await response.json()
        this.cats = data.map(cat => cat.url)
      } catch (error) {
        console.error('Error fetching cats:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.cat-gallery {
  margin-top: var(--space-md);
  padding: var(--space-md);
  background: var(--color-bg-card);
  border: 1px solid rgba(252, 93, 127, 0.15);
  border-radius: var(--radius-md);
}

.cat-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 4px;
}

.cat-icon {
  font-size: 1.2em;
  animation: bounce 2s infinite;
}

.cat-icon:last-child {
  animation-delay: 0.3s;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.cat-title {
  color: var(--color-secondary);
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(252, 93, 127, 0.15);
  font-family: var(--font-heading);
}

.cat-subtitle {
  color: #666;
  font-size: 0.75em;
  text-align: center;
  margin: 8px 0 16px 0;
  font-style: italic;
}

.cat-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cat-wrapper {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(252, 93, 127, 0.2);
  transition: all var(--transition-bounce);
}

.cat-wrapper:hover {
  transform: scale(1.03) rotate(-1deg);
  border-color: rgba(252, 93, 127, 0.5);
  box-shadow: 0 10px 30px rgba(252, 93, 127, 0.2);
}

.cat-size-0 { height: 140px; }
.cat-size-1 { height: 180px; }
.cat-size-2 { height: 120px; }

.cat-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.cat-wrapper:hover .cat-image {
  transform: scale(1.1);
}

.cat-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(252, 93, 127, 0.1) 0%, transparent 50%, rgba(33, 222, 234, 0.1) 100%);
  opacity: 0;
  transition: opacity var(--transition-normal);
  pointer-events: none;
}

.cat-wrapper:hover .cat-glow {
  opacity: 1;
}

.cat-refresh {
  width: 100%;
  margin-top: 16px;
  padding: 10px;
  background: rgba(252, 93, 127, 0.1);
  border: 1px solid rgba(252, 93, 127, 0.3);
  border-radius: var(--radius-sm);
  color: var(--color-secondary);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.cat-refresh:hover {
  background: rgba(252, 93, 127, 0.2);
  border-color: var(--color-secondary);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(252, 93, 127, 0.2);
}

.cat-refresh:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

.refresh-icon {
  font-size: 1.1em;
  transition: transform var(--transition-normal);
}

.cat-refresh:hover .refresh-icon {
  transform: rotate(180deg);
}

@media (prefers-reduced-motion: reduce) {
  .cat-icon { animation: none; }
  .cat-wrapper { transition: none; }
  .cat-wrapper:hover { transform: none; }
  .cat-image { transition: none; }
  .cat-wrapper:hover .cat-image { transform: none; }
  .cat-glow { transition: none; }
  .cat-refresh { transition: none; }
  .cat-refresh:hover { transform: none; }
  .refresh-icon { transition: none; }
  .cat-refresh:hover .refresh-icon { transform: none; }
}
</style>
