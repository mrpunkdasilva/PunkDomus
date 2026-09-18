<template>
  <main class="video-page">
    <header class="page-header">
      <div class="header-content">
        <h1 class="glitch-text" data-text="Video Lab">Video Lab</h1>
        <p class="section-description">
          Tutoriais, demonstrações e conteúdo técnico em formato de vídeo
        </p>
        <div class="search-bar">
          <i class="fas fa-search"></i>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Buscar vídeos..."
            @input="filterVideos"
          >
        </div>
      </div>
      <!-- Efeito decorativo cyberpunk -->
      <div class="cyber-lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </header>

    <section class="featured-video" v-if="featuredVideo">
      <div class="video-player">
        <iframe
          :src="getYouTubeEmbedUrl(featuredVideo.youtubeId)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-info">
        <h2>{{ featuredVideo.title }}</h2>
        <p>{{ featuredVideo.description }}</p>
        <div class="video-meta">
          <span><i class="fas fa-clock"></i> {{ featuredVideo.duration }}</span>
          <span><i class="fas fa-calendar"></i> {{ formatDate(featuredVideo.date) }}</span>
        </div>
      </div>
    </section>

    <section class="video-categories">
      <button
        v-for="category in categories"
        :key="category.id"
        :class="['category-btn', { active: activeCategory === category.id }]"
        @click="activeCategory = category.id"
      >
        <i :class="category.icon"></i>
        {{ category.name }}
      </button>
    </section>

    <section class="video-grid">
      <div
        v-for="video in filteredVideos"
        :key="video.id"
        class="video-card"
        @click="playVideo(video)"
      >
        <div class="video-player">
          <iframe
            :src="getYouTubeEmbedUrl(video.youtubeId)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-card-content">
          <h3>{{ video.title }}</h3>
          <p>{{ video.description }}</p>
          <div class="video-tags">
            <span v-for="tag in video.tags" :key="tag" class="tag">
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal de Vídeo -->
    <transition name="modal">
      <div v-if="selectedVideo" class="video-modal" @click.self="closeVideo">
        <div class="modal-content">
          <button class="close-btn" @click="closeVideo">
            <i class="fas fa-times"></i>
          </button>
          <div class="video-container">
            <iframe
              :src="getYouTubeEmbedUrl(selectedVideo.youtubeId)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video-details">
            <h2>{{ selectedVideo.title }}</h2>
            <p>{{ selectedVideo.description }}</p>
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>

<script>
export default {
  name: 'VideoPage',
  data() {
    return {
      searchQuery: '',
      activeCategory: 'all',
      selectedVideo: null,
      categories: [
        { id: 'all', name: 'Todos', icon: 'fas fa-globe' },
        { id: 'tutorials', name: 'Tutoriais', icon: 'fas fa-graduation-cap' },
        { id: 'coding', name: 'Coding', icon: 'fas fa-code' },
        { id: 'reviews', name: 'Reviews', icon: 'fas fa-star' }
      ],
      videos: [
        {
          id: 1,
          title: 'Introdução ao Vue.js 3',
          description: 'Aprenda os fundamentos do Vue.js 3 e Composition API',
          youtubeId: 'YOUTUBE_VIDEO_ID_HERE',
          duration: '12:34',
          date: '2024-02-15',
          category: 'tutorials',
          tags: ['vue', 'javascript', 'frontend']
        }
        // Adicione mais vídeos aqui
      ]
    }
  },
  computed: {
    featuredVideo() {
      return this.videos[0]
    },
    filteredVideos() {
      let filtered = this.videos

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(video =>
          video.title.toLowerCase().includes(query) ||
          video.description.toLowerCase().includes(query)
        )
      }

      if (this.activeCategory !== 'all') {
        filtered = filtered.filter(video => video.category === this.activeCategory)
      }

      return filtered
    }
  },
  methods: {
    getYouTubeEmbedUrl(videoId) {
      return `https://www.youtube.com/embed/${videoId}`
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    filterVideos() {
      // Implementar lógica de filtro se necessário
    },
    playVideo(video) {
      this.selectedVideo = video
    },
    closeVideo() {
      this.selectedVideo = null
    }
  },
  head() {
    return {
      title: 'Video Lab - PunkDomus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tutoriais, demonstrações e conteúdo técnico em formato de vídeo'
        }
      ]
    }
  }
}
</script>

<style scoped>
.video-page {
  min-height: 100vh;
  padding: 80px 30px;
  background: linear-gradient(180deg,
    rgba(8, 14, 26, 0.9) 0%,
    rgba(8, 14, 26, 0.95) 50%,
    rgba(8, 14, 26, 0.9) 100%
  );
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cyber-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.cyber-lines .line {
  position: absolute;
  background: rgba(252, 93, 127, 0.1);
  overflow: hidden;
}

.cyber-lines .line:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  transform: translateX(-100%);
  animation: slide-right 2s linear infinite;
}

.cyber-lines .line:nth-child(2) {
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  transform: translateY(-100%);
  animation: slide-down 2s linear infinite;
}

.cyber-lines .line:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 100%;
  height: 1px;
  transform: translateX(100%);
  animation: slide-left 2s linear infinite;
}

@keyframes slide-right {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes slide-down {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

@keyframes slide-left {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
  z-index: 1;
}

.glitch-text {
  font-size: 3.5em;
  color: #21DEEA;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: 'Protest Guerrilla', sans-serif;
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5),
               0 0 20px rgba(33, 222, 234, 0.3);
}

.section-description {
  font-size: 1.2em;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
}

.search-bar {
  max-width: 600px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(252, 93, 127, 0.3);
  border-radius: 25px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-bar input {
  background: transparent;
  border: none;
  color: #fff;
  width: 100%;
  font-size: 1.1em;
}

.search-bar input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.video-player {
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16/9;
  position: relative;
}

.video-player iframe {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.featured-video {
  max-width: 1200px;
  margin: 0 auto 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  border: 1px solid rgba(252, 93, 127, 0.2);
}

.video-info {
  width: 100%;
  max-width: 800px;
  text-align: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  border: 1px solid rgba(252, 93, 127, 0.2);
}

.video-info h2 {
  font-size: 1.8em;
  color: #FC5D7F;
  margin-bottom: 15px;
  font-family: 'Protest Guerrilla', sans-serif;
}

.video-info p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 1.1em;
}

.video-meta {
  display: flex;
  justify-content: center;
  gap: 30px;
  color: #21DEEA;
  font-size: 0.9em;
}

.video-meta span {
  display: flex;
  align-items: center;
  gap: 8px;
}

.video-meta i {
  font-size: 1.2em;
}

.video-categories {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.category-btn {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(252, 93, 127, 0.3);
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.category-btn i {
  font-size: 1.1em;
}

.category-btn.active {
  background: rgba(252, 93, 127, 0.2);
  border-color: #FC5D7F;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.video-card {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(252, 93, 127, 0.2);
  transition: all 0.3s ease;
}

.video-card:hover {
  transform: translateY(-5px);
  border-color: rgba(252, 93, 127, 0.4);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.video-card-content {
  padding: 20px;
}

.video-card-content h3 {
  color: #FC5D7F;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.video-card-content p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 15px;
  line-height: 1.4;
}

.video-tags {
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
}

.tag {
  color: #21DEEA;
  font-size: 0.9em;
}

/* Modal Styles */
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  width: 90%;
  max-width: 1200px;
  background: rgba(8, 14, 26, 0.95);
  border-radius: 15px;
  padding: 20px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5em;
  cursor: pointer;
}

/* Responsividade */
@media (max-width: 768px) {
  .featured-video {
    padding: 20px;
  }

  .video-info h2 {
    font-size: 1.5em;
  }

  .video-info p {
    font-size: 1em;
  }

  .video-meta {
    flex-direction: column;
    gap: 15px;
  }
}

/* Animações */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}
</style>
