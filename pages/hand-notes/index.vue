<template>
  <div class="hand-notes-page">
    <header class="page-header">
      <div class="header-content">
        <div class="title-section">
          <h1>Hand Notes</h1>
          <p class="section-description">
            Anotações e insights sobre desenvolvimento e tecnologia
          </p>
        </div>
        <div class="search-section">
          <div class="search-bar">
            <i class="fas fa-search"></i>
            <input
              type="text"
              placeholder="Buscar anotações..."
              v-model="searchQuery"
            >
          </div>
        </div>
      </div>
    </header>
    <!-- Nova Seção: Featured Notes -->
    <section class="featured-notes">
      <h2 class="featured-title">
        <i class="fas fa-star"></i>
        Notas em Destaque
      </h2>

      <div class="featured-carousel-wrapper">
        <button
          class="carousel-btn prev"
          @click="prevSlide"
          :disabled="currentSlide <= 0"
        >
          <i class="fas fa-chevron-left"></i>
        </button>

        <div class="featured-cards-container" ref="carouselContainer">
          <div
            class="featured-cards-track"
            :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }"
          >
            <div
              v-for="note in featuredNotes"
              :key="note.id"
              class="featured-card"
              :class="{ 'new': note.isNew }"
            >
              <div class="card-header">
                <span v-if="note.isNew" class="new-badge">Novo</span>
                <span class="featured-tag">
                  <i :class="getTagIcon(note.type)"></i>
                  {{ note.type }}
                </span>
              </div>

              <h3>{{ note.title }}</h3>
              <p>{{ note.excerpt }}</p>

              <div class="card-stats">
                <span>
                  <i class="fas fa-clock"></i>
                  {{ note.readTime }}min
                </span>
                <span>
                  <i class="fas fa-heart"></i>
                  {{ note.likes }}
                </span>
              </div>

              <div class="card-actions">
                <button class="action-btn primary" @click="viewNote(note)">
                  Ler mais
                </button>
                <button
                  class="action-btn secondary"
                  @click="toggleFavorite(note)"
                  :class="{ 'active': note.isFavorite }"
                >
                  <i class="fas fa-bookmark"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-btn next"
          @click="nextSlide"
          :disabled="currentSlide >= maxSlides"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

      <!-- Indicadores de slide -->
      <div class="carousel-indicators">
        <button
          v-for="index in maxSlides + 1"
          :key="index"
          class="indicator-dot"
          :class="{ active: currentSlide === index - 1 }"
          @click="goToSlide(index - 1)"
        ></button>
      </div>
    </section>

    <!-- Tags Section -->
    <section class="notes-filters">
      <div class="filter-tags">
        <button
          v-for="tag in tags"
          :key="tag.id"
          :class="['tag-button', { active: activeTag === tag.id }]"
          @click="activeTag = tag.id"
        >
          <i :class="tag.icon"></i>
          {{ tag.name }}
          <span class="tag-count">{{ getTagCount(tag.id) }}</span>
        </button>
      </div>
    </section>

    <!-- Grid de Notas -->
    <section class="notes-grid">
        <NoteCard
          v-for="note in processedNotes"
          :key="note.id"
          :note="note"
          @view="viewNote"
        />
      <TransitionGroup name="note-list">
      </TransitionGroup>
    </section>

    <!-- Modal de Nota -->
    <transition name="modal">
      <div v-if="selectedNote" class="modal-overlay" @click.self="selectedNote = null">
        <div class="modal-content">
          <button class="close-modal" @click="selectedNote = null">
            <i class="fas fa-times"></i>
          </button>

          <div class="modal-header">
            <h2>{{ selectedNote.title }}</h2>
            <div class="note-meta">
              <span class="date">{{ formatDate(selectedNote.date) }}</span>
              <span class="read-time">{{ selectedNote.readTime }} min leitura</span>
            </div>
          </div>

          <div class="modal-body">
            {{ selectedNote.content }}
          </div>

          <div class="modal-footer">
            <button class="action-btn">
              <i class="fas fa-heart"></i>
              Curtir
            </button>
            <button class="action-btn">
              <i class="fas fa-bookmark"></i>
              Salvar
            </button>
            <button class="action-btn">
              <i class="fas fa-share"></i>
              Compartilhar
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import NoteCard from '~/components/NoteCard.vue'

export default {
  name: 'HandNotes',
  components: {
    NoteCard
  },
  data() {
    return {
      searchQuery: '',
      selectedNote: null,
      activeTag: 'all',
      tags: [
        { id: 'all', name: 'Todas', icon: 'fas fa-layer-group' },
        { id: 'thoughts', name: 'Reflexões', icon: 'fas fa-brain' },
        { id: 'tutorials', name: 'Tutoriais', icon: 'fas fa-graduation-cap' },
        { id: 'snippets', name: 'Snippets', icon: 'fas fa-code' },
        { id: 'resources', name: 'Recursos', icon: 'fas fa-bookmark' }
      ],
      notes: [
        {
          id: 1,
          title: 'Reflexões sobre Clean Architecture',
          excerpt: 'Pensamentos sobre a implementação de Clean Architecture em projetos reais',
          content: 'Conteúdo completo da nota sobre Clean Architecture...',
          type: 'thought',
          date: '2024-02-25',
          tags: ['Arquitetura', 'Clean Code', 'Reflexão'],
          readTime: 8,
          likes: 42,
          isRead: false,
          isFavorite: true
        },
        {
          id: 2,
          title: 'Setup WSL2 + Docker',
          excerpt: 'Passo a passo para configurar ambiente de desenvolvimento no Windows',
          content: 'Guia completo de configuração do WSL2 com Docker...',
          type: 'tutorial',
          date: '2024-02-23',
          tags: ['WSL2', 'Docker', 'Windows'],
          readTime: 15,
          likes: 28,
          isRead: true,
          isFavorite: false
        },
        {
          id: 3,
          title: 'Snippets úteis TypeScript',
          excerpt: 'Coleção de tipos e utilidades que uso frequentemente',
          content: 'Biblioteca de snippets TypeScript para uso diário...',
          type: 'snippet',
          date: '2024-02-20',
          tags: ['TypeScript', 'Código', 'Dicas'],
          readTime: 5,
          likes: 35,
          isRead: false,
          isFavorite: true
        }
      ],
      featuredNotes: [
        {
          id: 'f1',
          title: 'Guia Definitivo de Design Patterns',
          excerpt: 'Uma análise profunda dos padrões mais utilizados no desenvolvimento moderno',
          type: 'tutorial',
          readTime: 15,
          likes: 124,
          isNew: true,
          isFavorite: false
        },
        {
          id: 'f2',
          title: 'Clean Architecture na Prática',
          excerpt: 'Implementando arquitetura limpa em projetos reais',
          type: 'article',
          readTime: 12,
          likes: 98,
          isNew: false,
          isFavorite: true
        },
        {
          id: 'f3',
          title: 'TypeScript Tips & Tricks',
          excerpt: 'Dicas avançadas para melhorar seu código TypeScript',
          type: 'snippet',
          readTime: 8,
          likes: 156,
          isNew: true,
          isFavorite: false
        },
        {
          id: 'f4',
          title: 'DevOps Pipeline Automation',
          excerpt: 'Automatizando deploys com GitHub Actions',
          type: 'tutorial',
          readTime: 20,
          likes: 87,
          isNew: false,
          isFavorite: true
        }
      ],
      currentSlide: 0,
      slideWidth: 0,
      cardsPerView: 3,
      maxSlides: 0,
      resizeTimeout: null
    }
  },
  computed: {
    processedNotes() {
      let filtered = [...this.notes]

      // Filtrar por busca
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(note =>
          note.title.toLowerCase().includes(query) ||
          note.excerpt.toLowerCase().includes(query)
        )
      }

      // Filtrar por tag
      if (this.activeTag !== 'all') {
        filtered = filtered.filter(note =>
          note.type === this.activeTag.slice(0, -1)
        )
      }

      return filtered
    }
  },
  methods: {
    filterNotes() {
      // Método mantido para possível debounce futuro
      console.log('Filtering notes:', this.searchQuery)
    },
    getTagCount(tagId) {
      if (tagId === 'all') return this.notes.length
      return this.notes.filter(note =>
        note.type === tagId.slice(0, -1)
      ).length
    },
    viewNote(note) {
      this.selectedNote = note
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    getTagIcon(type) {
      const icons = {
        tutorial: 'fas fa-graduation-cap',
        article: 'fas fa-book',
        snippet: 'fas fa-code',
        default: 'fas fa-file-alt'
      }
      return icons[type] || icons.default
    },
    initializeCarousel() {
      const container = this.$refs.carouselContainer
      if (!container) return

      // Calcula a largura do slide baseado no container
      this.slideWidth = container.offsetWidth / this.cardsPerView

      // Calcula o número máximo de slides
      this.maxSlides = Math.max(0, Math.ceil(this.featuredNotes.length / this.cardsPerView) - 1)

      // Reseta a posição se necessário
      if (this.currentSlide > this.maxSlides) {
        this.currentSlide = this.maxSlides
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    },
    nextSlide() {
      if (this.currentSlide < this.maxSlides) {
        this.currentSlide++
      }
    },
    goToSlide(index) {
      this.currentSlide = Math.min(Math.max(0, index), this.maxSlides)
    },
    handleResize() {
      // Debounce para evitar múltiplas chamadas durante o resize
      clearTimeout(this.resizeTimeout)
      this.resizeTimeout = setTimeout(() => {
        this.updateCardsPerView()
        this.initializeCarousel()
      }, 250)
    },
    updateCardsPerView() {
      const width = window.innerWidth
      if (width < 768) {
        this.cardsPerView = 1
      } else if (width < 1024) {
        this.cardsPerView = 2
      } else {
        this.cardsPerView = 3
      }
    }
  },
  mounted() {
    this.updateCardsPerView()
    this.initializeCarousel()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    clearTimeout(this.resizeTimeout)
  },
  head() {
    return {
      title: 'Hand Notes - PunkDomus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Anotações e insights sobre desenvolvimento e tecnologia'
        }
      ]
    }
  }
}
</script>

<style scoped>
.hand-notes-page {
  min-height: 100vh;
  background: linear-gradient(180deg,
    rgba(8, 14, 26, 0.9) 0%,
    rgba(8, 14, 26, 0.95) 50%,
    rgba(8, 14, 26, 0.9) 100%
  );
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Header Styles */
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
  font-size: 1.2em;
  color: rgba(239, 239, 239, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.search-section {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.search-bar {
  position: relative;
  width: 100%;
}

.search-bar input {
  width: 100%;
  padding: 15px 45px;
  background: rgba(8, 14, 26, 0.8);
  border: 1px solid rgba(33, 222, 234, 0.3);
  border-radius: 25px;
  color: #fff;
  font-size: 1.1em;
  transition: all 0.3s ease;
}

.search-bar input:focus {
  outline: none;
  border-color: #21DEEA;
  box-shadow: 0 0 15px rgba(33, 222, 234, 0.3);
}

.search-bar input::placeholder {
  color: rgba(239, 239, 239, 0.5);
}

.search-bar i {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #21DEEA;
  font-size: 1.2em;
}

/* Efeito de borda gradiente no header */
.page-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(252, 93, 127, 0.5),
    #FC5D7F,
    rgba(252, 93, 127, 0.5),
    transparent
  );
}

/* Media Queries */
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

  .search-bar input {
    padding: 12px 40px;
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .title-section h1 {
    font-size: 2em;
  }

  .section-description {
    font-size: 0.9em;
  }
}

/* Filter Tags */
.notes-filters {
  margin-bottom: 3rem;
}

.filter-tags {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.tag-button {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(33, 222, 234, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tag-button i {
  color: #21DEEA;
}

.tag-button.active {
  background: rgba(33, 222, 234, 0.2);
  border-color: #21DEEA;
}

.tag-count {
  background: rgba(252, 93, 127, 0.2);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8em;
}

/* Notes Grid - Versão Flexbox Responsiva */
.notes-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
}

.note-card {
  flex: 1;
  min-width: 300px;
  max-width: 400px;
}

/* Media Queries para Responsividade */
@media (max-width: 768px) {
  .hand-notes-page {
    padding: 2rem 1rem;
  }

  .page-header {
    margin-bottom: 2rem;
  }

  .title-section h1 {
    font-size: 2.5em;
  }

  .section-description {
    font-size: 1em;
  }

  .notes-grid {
    gap: 1rem;
  }

  .note-card {
    min-width: 100%;
  }
}

@media (max-width: 480px) {
  .hand-notes-page {
    padding: 1.5rem 0.8rem;
  }

  .title-section h1 {
    font-size: 2em;
  }
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(8, 14, 26, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(33, 222, 234, 0.3);
  border-radius: 12px;
  padding: 2rem;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-modal {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #FC5D7F;
  cursor: pointer;
  font-size: 1.5em;
}

.modal-header {
  margin-bottom: 2rem;
}

.modal-header h2 {
  color: #21DEEA;
  margin-bottom: 1rem;
}

.note-meta {
  display: flex;
  gap: 1rem;
  color: #FC5D7F;
  font-size: 0.9em;
}

.modal-body {
  margin-bottom: 2rem;
  line-height: 1.6;
}

.modal-footer {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.action-btn {
  background: rgba(252, 93, 127, 0.1);
  border: 1px solid rgba(252, 93, 127, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: rgba(252, 93, 127, 0.2);
  border-color: #FC5D7F;
}

/* Animations */
.note-list-enter-active,
.note-list-leave-active {
  transition: all 0.3s ease;
}

.note-list-enter-from,
.note-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.featured-notes {
  width: 100%;
  max-width: 1400px;
  margin: 4rem auto;
  padding: 0 60px; /* Aumentado para acomodar as setas */
  position: relative;
}

.featured-title {
  font-size: 2em;
  color: #21DEEA;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5);
}

.featured-carousel-wrapper {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

.featured-cards-container {
  overflow: hidden;
  padding: 1rem 0;
}

.featured-cards-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.featured-card {
  flex: 0 0 calc(33.333% - 2rem);
  margin: 0 1rem;
  background: rgba(8, 14, 26, 0.8);
  border: 1px solid rgba(252, 93, 127, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.featured-card:hover {
  transform: translateY(-5px);
  border-color: rgba(252, 93, 127, 0.4);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4),
              0 0 20px rgba(252, 93, 127, 0.2);
}

/* Carousel Navigation */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: rgba(8, 14, 26, 0.9);
  border: 1px solid rgba(252, 93, 127, 0.3);
  color: #FC5D7F;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.carousel-btn:hover:not(:disabled) {
  background: rgba(252, 93, 127, 0.1);
  border-color: #FC5D7F;
  color: #21DEEA;
  box-shadow: 0 0 15px rgba(252, 93, 127, 0.3);
}

.carousel-btn.prev {
  left: 0;
}

.carousel-btn.next {
  right: 0;
}

.carousel-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(252, 93, 127, 0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator-dot.active {
  background: #FC5D7F;
  box-shadow: 0 0 10px rgba(252, 93, 127, 0.5);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.featured-tag {
  background: rgba(252, 93, 127, 0.1);
  color: #FC5D7F;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.new-badge {
  background: rgba(33, 222, 234, 0.1);
  color: #21DEEA;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9em;
}

.card-stats {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  color: rgba(239, 239, 239, 0.7);
  font-size: 0.9em;
}

.card-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.action-btn {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9em;
}

.action-btn.primary {
  background: rgba(252, 93, 127, 0.1);
  border: 1px solid rgba(252, 93, 127, 0.3);
  color: #FC5D7F;
}

.action-btn.primary:hover {
  background: rgba(252, 93, 127, 0.2);
  border-color: #FC5D7F;
}

.action-btn.secondary {
  background: transparent;
  border: 1px solid rgba(33, 222, 234, 0.3);
  color: #21DEEA;
}

.action-btn.secondary:hover {
  background: rgba(33, 222, 234, 0.1);
  border-color: #21DEEA;
}

@media (max-width: 1024px) {
  .featured-notes {
    padding: 0 40px; /* Ajustado para telas menores */
  }

  .featured-card {
    flex: 0 0 calc(50% - 2rem);
  }
}

@media (max-width: 768px) {
  .featured-notes {
    padding: 0 30px; /* Ajustado para mobile */
  }

  .featured-card {
    flex: 0 0 calc(100% - 2rem);
  }

  .carousel-btn {
    width: 35px;
    height: 35px;
  }
}
</style>
