<template>
  <div class="cat-gallery" v-if="cats.length">
    <h3 class="cat-title">Cat Break</h3>
    <div class="cat-grid">
      <img
        v-for="(cat, index) in cats"
        :key="index"
        :src="cat"
        alt="Random cat"
        class="cat-image"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatGallery',
  data() {
    return {
      cats: []
    }
  },
  async mounted() {
    await this.fetchCats()
  },
  methods: {
    async fetchCats() {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=3&mime_types=gif')
        const data = await response.json()
        this.cats = data.map(cat => cat.url)
      } catch (error) {
        console.error('Error fetching cats:', error)
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
}

.cat-title {
  color: #FC5D7F;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(252, 93, 127, 0.15);
  font-family: 'Protest Guerrilla', sans-serif;
}

.cat-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cat-image {
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(252, 93, 127, 0.2);
  transition: transform 0.3s ease;
}

.cat-image:hover {
  transform: scale(1.02);
}
</style>
