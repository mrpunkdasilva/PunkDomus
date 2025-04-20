<template>
  <main class="code-labs-page">
    <header class="page-header">
      <div class="header-content">
        <h1>Code Labs</h1>
        <p class="section-description">
          Laboratórios práticos de código com exemplos e implementações hands-on
        </p>
        <div class="search-bar">
          <i class="fas fa-search"></i>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Buscar laboratórios..."
            @input="filterLabs"
          >
        </div>
      </div>
    </header>

    <!-- Featured Lab Section -->
    <section class="featured-lab">
      <div class="lab-content">
        <span class="featured-badge">Em Destaque</span>
        <h2>{{ featuredLab.title }}</h2>
        <p>{{ featuredLab.description }}</p>
        <div class="lab-meta">
          <span><i class="fas fa-code"></i> {{ featuredLab.language }}</span>
          <span><i class="fas fa-clock"></i> {{ featuredLab.duration }}</span>
          <span><i class="fas fa-signal"></i> {{ featuredLab.level }}</span>
        </div>
        <button class="start-lab-btn">
          Iniciar Lab <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>

    <!-- Labs Grid -->
    <section class="labs-grid">
      <div v-for="lab in labs" :key="lab.id" class="lab-card">
        <div class="lab-card-header">
          <i :class="lab.icon"></i>
          <span class="lab-language">{{ lab.language }}</span>
        </div>
        <div class="lab-card-content">
          <h3>{{ lab.title }}</h3>
          <p>{{ lab.description }}</p>
          <div class="lab-info">
            <span><i class="fas fa-clock"></i> {{ lab.duration }}</span>
            <span><i class="fas fa-signal"></i> {{ lab.level }}</span>
          </div>
          <div class="lab-tags">
            <span v-for="tag in lab.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'CodeLabs',
  data() {
    return {
      searchQuery: '',
      featuredLab: {
        title: 'Clean Architecture com Node.js',
        description: 'Implemente uma aplicação completa seguindo os princípios da Clean Architecture e SOLID',
        language: 'Node.js',
        duration: '2 horas',
        level: 'Avançado'
      },
      labs: [
        {
          id: 1,
          title: 'API REST com Express',
          description: 'Desenvolvimento de uma API REST completa com Express e MongoDB',
          language: 'Node.js',
          icon: 'fab fa-node',
          duration: '1.5 horas',
          level: 'Intermediário',
          tags: ['API', 'REST', 'MongoDB']
        },
        {
          id: 2,
          title: 'React Hooks na Prática',
          description: 'Aprenda a usar os principais hooks do React em casos reais',
          language: 'React',
          icon: 'fab fa-react',
          duration: '1 hora',
          level: 'Intermediário',
          tags: ['Hooks', 'Estado', 'Efeitos']
        },
        {
          id: 3,
          title: 'TDD com Jest',
          description: 'Desenvolvimento orientado a testes usando Jest e React Testing Library',
          language: 'JavaScript',
          icon: 'fab fa-js',
          duration: '2 horas',
          level: 'Avançado',
          tags: ['Testes', 'TDD', 'Jest']
        }
      ]
    }
  },
  methods: {
    filterLabs() {
      // Implementar lógica de busca
      console.log('Filtering labs:', this.searchQuery)
    }
  },
  head() {
    return {
      title: 'Code Labs - PunkDomus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Laboratórios práticos de código com exemplos e implementações hands-on'
        }
      ]
    }
  }
}
</script>

<style scoped>
.code-labs-page {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
  align-items: center;
  justify-content: center;
}

.header-content h1 {
  font-size: 2.5em;
  color: #FC5D7F;
  margin-bottom: 20px;
}

.section-description {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2em;
  margin-bottom: 30px;
}

.search-bar {
  max-width: 500px;
  margin: 0 auto;
  position: relative;
}

.search-bar input {
  width: 100%;
  padding: 12px 40px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(252, 93, 127, 0.3);
  border-radius: 8px;
  color: #fff;
  font-size: 1em;
}

.search-bar i {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #FC5D7F;
}

.featured-lab {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(252, 93, 127, 0.2);
  border-radius: 15px;
  padding: 40px;
  margin-bottom: 60px;
  text-align: center;
}

.featured-badge {
  background: #FC5D7F;
  color: #fff;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9em;
  margin-bottom: 20px;
  display: inline-block;
}

.lab-content h2 {
  color: #21DEEA;
  font-size: 2em;
  margin-bottom: 15px;
}

.lab-content p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  font-size: 1.1em;
}

.lab-meta {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
  color: #FC5D7F;
}

.start-lab-btn {
  background: #FC5D7F;
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.start-lab-btn:hover {
  background: #21DEEA;
  transform: translateY(-2px);
}

.labs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.lab-card {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(252, 93, 127, 0.2);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.lab-card:hover {
  transform: translateY(-5px);
  border-color: rgba(252, 93, 127, 0.4);
}

.lab-card-header {
  background: rgba(252, 93, 127, 0.1);
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lab-card-header i {
  font-size: 1.5em;
  color: #21DEEA;
}

.lab-language {
  color: #FC5D7F;
  font-size: 0.9em;
}

.lab-card-content {
  padding: 20px;
}

.lab-card-content h3 {
  color: #21DEEA;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.lab-card-content p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 15px;
  line-height: 1.4;
}

.lab-info {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  color: #FC5D7F;
  font-size: 0.9em;
}

.lab-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background: rgba(33, 222, 234, 0.1);
  color: #21DEEA;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.8em;
}

@media (max-width: 768px) {
  .lab-meta {
    flex-direction: column;
    gap: 15px;
  }

  .featured-lab {
    padding: 20px;
  }

  .lab-content h2 {
    font-size: 1.5em;
  }
}
</style>
