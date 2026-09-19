<template>
  <div>
    <section class="advanced-filters" v-show="show">
      <div class="filters-grid">
        <div class="filter-group">
          <label>Ordenar por</label>
          <select :value="sortBy" @change="$emit('sort', $event.target.value)">
            <option value="date-desc">Mais recentes</option>
            <option value="date-asc">Mais antigos</option>
            <option value="likes">Mais curtidos</option>
            <option value="title">Título (A-Z)</option>
          </select>
        </div>

        <div class="filter-group">
          <label>Tempo de leitura</label>
          <select :value="readTimeFilter" @change="$emit('readTime', $event.target.value)">
            <option value="all">Todos</option>
            <option value="short">Curto (< 5min)</option>
            <option value="medium">Médio (5-15min)</option>
            <option value="long">Longo (> 15min)</option>
          </select>
        </div>

        <div class="filter-group">
          <label>Status</label>
          <div class="checkbox-group">
            <label>
              <input 
                type="checkbox" 
                :checked="showFavorites"
                @change="$emit('favorites', $event.target.checked)"
              >
              Favoritos
            </label>
            <label>
              <input 
                type="checkbox" 
                :checked="showUnread"
                @change="$emit('unread', $event.target.checked)"
              >
              Não lidos
            </label>
          </div>
        </div>
      </div>
    </section>

    <button
      class="toggle-filters"
      @click="$emit('toggle')"
    >
      <i :class="['fas', show ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
      {{ show ? 'Ocultar filtros' : 'Mostrar filtros' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'HandNotesAdvancedFilters',
  props: {
    show: Boolean,
    sortBy: String,
    readTimeFilter: String,
    showFavorites: Boolean,
    showUnread: Boolean
  }
}
</script>