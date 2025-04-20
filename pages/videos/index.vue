<template>
  <main class="videos-page">
    <header class="page-header">
      <div class="header-content">
        <div class="title-section">
          <h1>Videos</h1>
          <p class="section-description">
            Conteúdo em vídeo sobre programação e tecnologia
          </p>
        </div>
        <div class="search-section">
          <div class="search-bar">
            <i class="fas fa-search"></i>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Buscar vídeos..."
            >
          </div>
        </div>
      </div>
    </header>

    <!-- Video Categories -->
    <section class="video-categories">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-chip"
        :class="{ active: selectedCategory === category.id }"
        @click="selectedCategory = category.id"
      >
        <i :class="category.icon"></i>
        {{ category.name }}
      </div>
    </section>

    <!-- Video Grid -->
    <section class="videos-grid">
      <article
        v-for="video in filteredVideos"
        :key="video.id"
        class="video-card"
      >
        <div class="video-wrapper">
          <video
            class="video-player"
            :poster="`https://img.youtube.com/vi/${getYoutubeId(video.youtubeUrl)}/maxresdefault.jpg`"
            @click="openVideo(getYoutubeId(video.youtubeUrl))"
          >
            <source :src="`https://www.youtube.com/embed/${getYoutubeId(video.youtubeUrl)}`" type="video/mp4">
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div class="play-button">
            <i class="fab fa-youtube"></i>
          </div>
        </div>
        <div class="video-content">
          <h3>{{ video.title }}</h3>
          <p>{{ video.description }}</p>
          <div class="video-footer">
            <div class="tags">
              <span v-for="tag in video.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Videos',
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'all',
      categories: [
        { id: 'all', name: 'Todos', icon: 'fas fa-border-all' },
        { id: 'tutorials', name: 'Tutoriais', icon: 'fas fa-graduation-cap' },
        { id: 'coding', name: 'Live Coding', icon: 'fas fa-code' },
        { id: 'reviews', name: 'Reviews', icon: 'fas fa-star' },
        { id: 'tips', name: 'Dicas', icon: 'fas fa-lightbulb' }
      ],
      videos: [
        {
          id: 1,
          title: 'Setup WSL2 + Docker no Windows',
          description: 'Configuração completa de ambiente de desenvolvimento no Windows usando WSL2 e Docker',
          youtubeUrl: 'https://youtu.be/GUz2rEC3JL8',
          category: 'tutorials',
          tags: ['WSL2', 'Docker', 'Windows']
        }
      ]
    }
  },
  computed: {
    filteredVideos() {
      let filtered = this.videos

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(video =>
          video.title.toLowerCase().includes(query) ||
          video.description.toLowerCase().includes(query)
        )
      }

      if (this.selectedCategory !== 'all') {
        filtered = filtered.filter(video => video.category === this.selectedCategory)
      }

      return filtered
    },
    getYoutubeId() {
      return (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
        const match = url.match(regExp)
        return (match && match[2].length === 11) ? match[2] : null
      }
    }
  },
  methods: {
    openVideo(videoId) {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')
    }
  }
}
</script>

<style scoped>
.videos-page {
  min-height: 100vh;
  background: linear-gradient(180deg,
    rgba(8, 14, 26, 0.9) 0%,
    rgba(8, 14, 26, 0.95) 50%,
    rgba(8, 14, 26, 0.9) 100%
  );
  padding-bottom: 60px;
}

.page-header {
  width: 100%;
  background: rgba(8, 14, 26, 0.95);
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
  border-bottom: 2px solid rgba(252, 93, 127, 0.3);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.title-section {
  text-align: center;
}

.title-section h1 {
  font-size: 3.5em;
  color: #21DEEA;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: 'Protest Guerrilla', sans-serif;
  text-shadow:
    0 0 10px rgba(33, 222, 234, 0.5),
    0 0 20px rgba(33, 222, 234, 0.3);
}

.section-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2em;
  max-width: 600px;
  margin: 0 auto;
}

.search-section {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.search-bar {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(33, 222, 234, 0.3);
  border-radius: 30px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
}

.search-bar:focus-within {
  background: rgba(255, 255, 255, 0.15);
  border-color: #21DEEA;
  box-shadow: 0 0 15px rgba(33, 222, 234, 0.2);
}

.search-bar i {
  color: #21DEEA;
  font-size: 1.2em;
}

.search-bar input {
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.1em;
  outline: none;
}

.search-bar input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.video-categories {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.category-chip {
  padding: 8px 16px;
  background: rgba(33, 222, 234, 0.1);
  border: 1px solid rgba(33, 222, 234, 0.3);
  border-radius: 20px;
  color: #21DEEA;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-chip i {
  margin-right: 8px;
}

.category-chip:hover,
.category-chip.active {
  background: rgba(33, 222, 234, 0.2);
  border-color: #21DEEA;
  box-shadow: 0 0 15px rgba(33, 222, 234, 0.3);
}

.videos-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.video-card {
  background: rgba(8, 14, 26, 0.8);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(33, 222, 234, 0.2);
  transition: all 0.3s ease;
}

.video-wrapper {
  position: relative;
  cursor: pointer;
}

.video-player {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.8;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.play-button i {
  font-size: 3em;
  color: #ff0000;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(33, 222, 234, 0.3);
}

.video-card:hover .play-button {
  opacity: 1;
}

.video-card:hover .video-player {
  transform: scale(1.05);
}

.video-content {
  padding: 20px;
}

.video-content h3 {
  color: #21DEEA;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.video-content p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9em;
  margin-bottom: 15px;
}

.video-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background: rgba(252, 93, 127, 0.2);
  color: #FC5D7F;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.9em;
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .page-header {
    padding: 40px 20px;
  }

  .title-section h1 {
    font-size: 2.5em;
  }

  .section-description {
    font-size: 1em;
    padding: 0 20px;
  }

  .search-bar {
    margin: 0 20px;
  }

  .videos-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

@media (max-width: 480px) {
  .title-section h1 {
    font-size: 2em;
  }

  .category-chip {
    padding: 6px 12px;
    font-size: 0.9em;
  }

  .search-bar {
    padding: 10px 15px;
  }

  .search-bar input {
    font-size: 1em;
  }
}
</style>
