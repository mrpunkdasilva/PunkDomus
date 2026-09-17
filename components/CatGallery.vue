<template>
  <div class="cat-gallery" v-if="cats.length">
    <div class="cat-header">
      <span class="cat-icon">🐱</span>
      <h3 class="cat-title">Cat Break</h3>
      <span class="cat-icon">🐱</span>
    </div>
    <p class="cat-subtitle">take a pause, enjoy some cats</p>
    <div class="cat-grid">
      <div
        v-for="(cat, index) in cats"
        :key="index"
        class="cat-wrapper"
        :class="`cat-size-${index}`"
      >
        <img
          :src="cat"
          alt="Random cat"
          class="cat-image"
          loading="lazy"
        />
        <div class="cat-glow"></div>
      </div>
    </div>
    <button class="cat-refresh" @click="fetchCats">
      <span class="refresh-icon">↻</span> more cats
    </button>
  </div>
</template>

<script>
export default {
  name: 'CatGallery',
  data() {
    return {
      cats: [],
      loading: false
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
  margin-top: 24px;
  padding: 20px;
  background: rgba(8, 14, 26, 0.8);
  border: 1px solid rgba(252, 93, 127, 0.15);
  border-radius: 12px;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.cat-title {
  color: #FC5D7F;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(252, 93, 127, 0.15);
  font-family: 'Protest Guerrilla', sans-serif;
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
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.cat-wrapper:hover {
  transform: scale(1.03) rotate(-1deg);
  border-color: rgba(252, 93, 127, 0.5);
  box-shadow: 0 10px 30px rgba(252, 93, 127, 0.2);
}

.cat-wrapper:nth-child(1) {
  animation: slideIn 0.6s ease forwards;
  opacity: 0;
}

.cat-wrapper:nth-child(2) {
  animation: slideIn 0.6s ease 0.2s forwards;
  opacity: 0;
}

.cat-wrapper:nth-child(3) {
  animation: slideIn 0.6s ease 0.4s forwards;
  opacity: 0;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.cat-size-0 {
  height: 140px;
}

.cat-size-1 {
  height: 180px;
}

.cat-size-2 {
  height: 120px;
}

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
  background: linear-gradient(
    135deg,
    rgba(252, 93, 127, 0.1) 0%,
    transparent 50%,
    rgba(33, 222, 234, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
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
  border-radius: 8px;
  color: #FC5D7F;
  font-family: 'Inria Sans', sans-serif;
  font-size: 0.85em;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.cat-refresh:hover {
  background: rgba(252, 93, 127, 0.2);
  border-color: #FC5D7F;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(252, 93, 127, 0.2);
}

.refresh-icon {
  font-size: 1.1em;
  transition: transform 0.3s ease;
}

.cat-refresh:hover .refresh-icon {
  transform: rotate(180deg);
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(252, 93, 127, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(252, 93, 127, 0);
  }
}
</style>
