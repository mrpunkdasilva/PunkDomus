<template>
  <article class="note-card" @click="$emit('view', note)">
    <div class="card-header">
      <h3 class="note-title">{{ note.title }}</h3>
      <div class="note-meta">
        <span class="date">{{ formatDate(note.date) }}</span>
        <span class="read-time">{{ note.readTime }} min</span>
      </div>
    </div>

    <p class="note-excerpt">{{ note.excerpt }}</p>

    <div class="note-tags">
      <span v-for="tag in note.tags" :key="tag" class="tag">
        {{ tag }}
      </span>
    </div>

    <div class="card-footer">
      <div class="stats">
        <span class="likes">
          <i class="fas fa-heart"></i>
          {{ note.likes }}
        </span>
      </div>
      <div class="indicators">
        <i v-if="note.isFavorite" class="fas fa-bookmark"></i>
        <i v-if="!note.isRead" class="fas fa-circle"></i>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'NoteCard',
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('pt-BR', {
        month: 'short',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.note-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(252, 93, 127, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.note-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(33, 222, 234, 0.05), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.note-card:hover::before {
  transform: translateX(100%);
}

.note-card:hover {
  transform: translateY(-5px);
  border-color: rgba(252, 93, 127, 0.4);
  box-shadow: 0 5px 15px rgba(252, 93, 127, 0.1);
}

.card-header {
  margin-bottom: 1rem;
}

.note-title {
  color: #21DEEA;
  font-size: 1.2em;
  margin-bottom: 0.5rem;
}

.note-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.8em;
  color: #FC5D7F;
}

.note-excerpt {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.note-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: rgba(33, 222, 234, 0.1);
  color: #21DEEA;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8em;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stats {
  display: flex;
  gap: 1rem;
}

.likes {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #FC5D7F;
}

.indicators {
  display: flex;
  gap: 0.5rem;
}

.indicators i {
  color: #FC5D7F;
  font-size: 0.8em;
}

.fa-circle {
  font-size: 0.5em;
}
</style>
