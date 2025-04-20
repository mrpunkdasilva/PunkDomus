<template>
  <main class="hand-notes-page">
    <!-- Header -->
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
              v-model="searchQuery"
              placeholder="Buscar anotações..."
              @input="filterNotes"
            />
          </div>
        </div>
      </div>
    </header>

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
  </main>
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
      ]
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
    }
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
  text-align: center;
  margin-bottom: 3rem;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-section h1 {
  font-size: 3.5em;
  color: #21DEEA;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-family: 'Protest Guerrilla', sans-serif;
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5);
}

.section-description {
  color: #FC5D7F;
  font-size: 1.2em;
  margin-bottom: 2rem;
}

/* Search Bar */
.search-bar {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
}

.search-bar input {
  width: 100%;
  padding: 1rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(252, 93, 127, 0.3);
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
}

.search-bar i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #FC5D7F;
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
</style>
