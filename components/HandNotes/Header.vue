<template>
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
            :value="searchQuery"
            @input="$emit('search', $event.target.value)"
            placeholder="Buscar anotações..."
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HandNotesHeader',
  props: {
    searchQuery: {
      type: String,
      default: ''
    }
  }
}
</script>