<template>
  <main class="cheat-sheets-page">
    <header class="page-header">
      <div class="header-content">
        <div class="title-section">
          <h1>Cheat Sheets</h1>
          <p class="section-description">
            Guias rápidos e referências técnicas para consulta
          </p>
        </div>

        <div class="search-section">
          <div class="search-bar">
            <i class="fas fa-search"></i>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Buscar cheat sheets..."
              @input="filterSheets"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- Categorias de Cheat Sheets -->
    <section class="sheets-categories">
      <div class="category-tabs">
        <button
          v-for="category in categories"
          :key="category.id"
          :class="['category-tab', { active: activeCategory === category.id }]"
          @click="activeCategory = category.id"
        >
          <i :class="category.icon"></i>
          {{ category.name }}
        </button>
      </div>
    </section>

    <!-- Grid de Cheat Sheets -->
    <section class="sheets-grid">
      <div
        v-for="sheet in filteredSheets"
        :key="sheet.id"
        class="sheet-card"
        @mouseenter="activateGlow($event)"
        @mouseleave="deactivateGlow($event)"
      >
        <div class="sheet-icon">
          <i :class="sheet.icon"></i>
        </div>
        <div class="sheet-content">
          <h3>{{ sheet.title }}</h3>
          <p>{{ sheet.description }}</p>
          <div class="sheet-tags">
            <span v-for="tag in sheet.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
        <div class="sheet-footer">
          <span class="sheet-date">Atualizado: {{ sheet.lastUpdate }}</span>
          <button class="view-sheet">Ver <i class="fas fa-arrow-right"></i></button>
        </div>
      </div>
    </section>

    <!-- Featured Sheets -->
    <section class="featured-sheets">
      <h2>Mais Populares</h2>
      <div class="featured-grid">
        <div
          v-for="sheet in featuredSheets"
          :key="sheet.id"
          class="featured-card"
        >
          <div class="featured-header">
            <i :class="sheet.icon"></i>
            <span class="views-count">{{ sheet.views }} views</span>
          </div>
          <h3>{{ sheet.title }}</h3>
          <p>{{ sheet.description }}</p>
          <div class="featured-footer">
            <span class="difficulty" :class="sheet.difficulty">
              {{ sheet.difficulty }}
            </span>
            <button class="view-featured">Acessar</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'CheatSheets',
  data() {
    return {
      searchQuery: '',
      activeCategory: 'all',
      categories: [
        { id: 'all', name: 'Todos', icon: 'fas fa-globe' },
        { id: 'frontend', name: 'Frontend', icon: 'fas fa-code' },
        { id: 'backend', name: 'Backend', icon: 'fas fa-server' },
        { id: 'devops', name: 'DevOps', icon: 'fas fa-network-wired' },
        { id: 'database', name: 'Database', icon: 'fas fa-database' },
        { id: 'tools', name: 'Tools', icon: 'fas fa-tools' }
      ],
      sheets: [
        {
          id: 1,
          title: 'React Hooks',
          description: 'Referência rápida para todos os React Hooks nativos',
          icon: 'fab fa-react',
          category: 'frontend',
          tags: ['React', 'Hooks', 'JavaScript'],
          lastUpdate: '2024-02-20',
          difficulty: 'intermediate'
        },
        {
          id: 2,
          title: 'Docker Commands',
          description: 'Comandos essenciais para Docker e Docker Compose',
          icon: 'fab fa-docker',
          category: 'devops',
          tags: ['Docker', 'DevOps', 'Container'],
          lastUpdate: '2024-02-18',
          difficulty: 'advanced'
        },
        {
          id: 3,
          title: 'PostgreSQL Queries',
          description: 'Queries SQL comuns e otimizações',
          icon: 'fas fa-database',
          category: 'database',
          tags: ['SQL', 'PostgreSQL', 'Database'],
          lastUpdate: '2024-02-15',
          difficulty: 'intermediate'
        }
      ],
      featuredSheets: [
        {
          id: 1,
          title: 'Git Commands',
          description: 'Comandos Git mais utilizados e workflows',
          icon: 'fab fa-git-alt',
          views: '2.5k',
          difficulty: 'beginner'
        },
        {
          id: 2,
          title: 'TypeScript Types',
          description: 'Guia completo de tipos no TypeScript',
          icon: 'fab fa-js',
          views: '1.8k',
          difficulty: 'intermediate'
        },
        {
          id: 3,
          title: 'Kubernetes',
          description: 'Cheat sheet para comandos kubectl',
          icon: 'fas fa-dharmachakra',
          views: '3.2k',
          difficulty: 'advanced'
        }
      ]
    }
  },
  computed: {
    filteredSheets() {
      let filtered = this.sheets

      if (this.activeCategory !== 'all') {
        filtered = filtered.filter(sheet => sheet.category === this.activeCategory)
      }

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(sheet =>
          sheet.title.toLowerCase().includes(query) ||
          sheet.description.toLowerCase().includes(query) ||
          sheet.tags.some(tag => tag.toLowerCase().includes(query))
        )
      }

      return filtered
    }
  },
  methods: {
    filterSheets() {
      // Implementar lógica adicional de filtro se necessário
      console.log('Filtering sheets:', this.searchQuery)
    },
    activateGlow(event) {
      event.currentTarget.classList.add('glow-active')
    },
    deactivateGlow(event) {
      event.currentTarget.classList.remove('glow-active')
    }
  },
  head() {
    return {
      title: 'Cheat Sheets - PunkDomus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Guias rápidos e referências técnicas para consulta'
        }
      ]
    }
  }
}
</script>

<style scoped>
.cheat-sheets-page {
  min-height: 100vh;
  background: linear-gradient(180deg,
    rgba(8, 14, 26, 0.9) 0%,
    rgba(8, 14, 26, 0.95) 50%,
    rgba(8, 14, 26, 0.9) 100%
  );
}

.page-header {
  text-align: center;
  padding: 60px 0 40px;
}

.page-header h1 {
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
  color: #FC5D7F;
  max-width: 600px;
  margin: 0 auto 30px;
}

.search-bar {
  max-width: 500px;
  margin: 0 auto;
  position: relative;
}

.search-bar input {
  width: 100%;
  padding: 12px 40px;
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

.search-bar i {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #21DEEA;
}

.sheets-categories {
  margin: 40px 0;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  padding: 0 20px;
}

.category-tab {
  background: rgba(8, 14, 26, 0.8);
  border: 1px solid rgba(33, 222, 234, 0.3);
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.category-tab i {
  color: #21DEEA;
}

.category-tab.active,
.category-tab:hover {
  background: rgba(33, 222, 234, 0.1);
  border-color: #21DEEA;
  box-shadow: 0 0 15px rgba(33, 222, 234, 0.2);
}

.sheets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.sheet-card {
  background: rgba(8, 14, 26, 0.8);
  border: 1px solid rgba(33, 222, 234, 0.2);
  border-radius: 15px;
  padding: 25px;
  transition: all 0.3s ease;
}

.sheet-card:hover {
  transform: translateY(-5px);
  border-color: #21DEEA;
  box-shadow: 0 0 20px rgba(33, 222, 234, 0.2);
}

.sheet-icon {
  font-size: 2em;
  color: #21DEEA;
  margin-bottom: 20px;
}

.sheet-content h3 {
  color: #FC5D7F;
  margin-bottom: 10px;
  font-size: 1.3em;
}

.sheet-content p {
  color: #fff;
  margin-bottom: 15px;
  line-height: 1.5;
}

.sheet-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  background: rgba(252, 93, 127, 0.1);
  color: #FC5D7F;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.9em;
}

.sheet-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid rgba(33, 222, 234, 0.2);
}

.sheet-date {
  color: #21DEEA;
  font-size: 0.9em;
}

.view-sheet {
  background: none;
  border: none;
  color: #FC5D7F;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.view-sheet:hover {
  color: #21DEEA;
}

.view-sheet i {
  transition: transform 0.3s ease;
}

.view-sheet:hover i {
  transform: translateX(5px);
}

.featured-sheets {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.featured-sheets h2 {
  color: #21DEEA;
  font-size: 2em;
  margin-bottom: 30px;
  text-align: center;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.featured-card {
  background: rgba(8, 14, 26, 0.8);
  border: 1px solid rgba(33, 222, 234, 0.2);
  border-radius: 15px;
  padding: 25px;
  transition: all 0.3s ease;
}

.featured-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.featured-header i {
  font-size: 1.5em;
  color: #21DEEA;
}

.views-count {
  color: #FC5D7F;
  font-size: 0.9em;
}

.featured-card h3 {
  color: #FC5D7F;
  margin-bottom: 10px;
}

.featured-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.difficulty {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.9em;
}

.difficulty.beginner {
  background: rgba(76, 175, 80, 0.1);
  color: #4CAF50;
}

.difficulty.intermediate {
  background: rgba(33, 222, 234, 0.1);
  color: #21DEEA;
}

.difficulty.advanced {
  background: rgba(252, 93, 127, 0.1);
  color: #FC5D7F;
}

.view-featured {
  background: rgba(33, 222, 234, 0.1);
  border: 1px solid #21DEEA;
  color: #21DEEA;
  padding: 5px 15px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-featured:hover {
  background: rgba(33, 222, 234, 0.2);
  box-shadow: 0 0 15px rgba(33, 222, 234, 0.3);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem;
}

.title-section {
  text-align: center;
}

.search-section {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .page-header {
    padding: 40px 20px;
  }

  .page-header h1 {
    font-size: 2.5em;
  }

  .sheets-grid {
    grid-template-columns: 1fr;
  }

  .featured-grid {
    grid-template-columns: 1fr;
  }

  .header-content {
    gap: 1.5rem;
  }
}
</style>
