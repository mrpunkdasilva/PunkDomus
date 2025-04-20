<template>
  <transition name="modal">
    <div class="note-modal">
      <div class="modal-content">
        <button class="close-modal" @click="$emit('close')">
          <i class="fas fa-times"></i>
        </button>

        <div class="modal-header">
          <h2>{{ note.title }}</h2>
          <div class="note-meta">
            <span class="date">{{ formatDate(note.date) }}</span>
            <span :class="['type', note.type]">
              {{ note.type }}
            </span>
          </div>
        </div>

        <div class="modal-body">
          <p>{{ note.content || note.excerpt }}</p>

          <div class="note-tags">
            <span v-for="tag in note.tags"
                  :key="tag"
                  class="tag">
              {{ tag }}
            </span>
          </div>
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
</template>

<script>
export default {
  name: 'NoteModal',
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }
  }
}
</script>