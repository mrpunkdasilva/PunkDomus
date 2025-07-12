<template>
  <main class="tech-docs-page">
    <header class="tech-docs-header">
      <div class="header-content">
        <h1>Tech Docs</h1>
        <p class="section-description">
          Documentações técnicas detalhadas sobre arquitetura, padrões e implementações
        </p>
        <!-- Barra de busca -->
        <div class="search-bar">
          <i class="fas fa-search"></i>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Buscar documentação..."
            @input="filterDocs"
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

    <div class="tech-docs-grid">
      <!-- Main Sections (Análises Técnicas, Arquitetura & Design, etc.) -->
      <section
        v-for="section in mainSectionsData"
        :key="section.id"
        :class="['docs-section', section.id]"
        @mouseenter="activateGlow($event)"
        @mouseleave="deactivateGlow($event)"
      >
        <div class="section-icon">
          <i :class="section.icon"></i>
        </div>
        <h2>{{ section.title }}</h2>
        <ul>
          <li v-for="(docTitle, index) in section.exampleDocs" :key="index">{{ docTitle }}</li>
          <li v-if="section.exampleDocs.length === 0">Nenhum documento nesta categoria ainda.</li>
        </ul>
        <div class="section-footer">
          <span class="doc-count">{{ section.docCount }} docs</span>
          <button class="view-all">Ver todos <i class="fas fa-arrow-right"></i></button>
        </div>
      </section>
    </div>

    <!-- Featured Docs -->
    <section class="featured-docs">
      <h2>Documentações em Destaque</h2>
      <div class="docs-cards">
        <article v-for="doc in featuredDocs" :key="doc.id" class="doc-card">
          <div class="card-header">
            <!-- Removed doc.icon as it's not in the JSON for documents -->
            <span class="category">{{ doc.category }}</span>
          </div>
          <h3>{{ doc.title }}</h3>
          <p>{{ doc.description }}</p>
          <div class="card-footer">
            <span class="date">{{ doc.date }}</span>
            <a :href="doc.url" target="_blank" rel="noopener noreferrer" class="read-more">Ler mais</a>
          </div>
        </article>
        <p v-if="featuredDocs.length === 0">Nenhuma documentação em destaque no momento.</p>
      </div>
    </section>

    <!-- Latest Updates -->
    <section class="latest-updates">
      <h2>Últimas Atualizações</h2>
      <div class="updates-timeline">
        <div v-for="update in latestUpdates" :key="update.id" class="update-item">
          <div class="update-date">{{ update.date }}</div>
          <div class="update-content">
            <span class="update-tag" :class="update.type">{{ update.type }}</span>
            <h3><a :href="update.url" target="_blank" rel="noopener noreferrer">{{ update.title }}</a></h3>
            <p>{{ update.description }}</p>
            <div class="update-meta">
              <span class="author"><i class="fas fa-user"></i> {{ update.author }}</span>
              <span class="category"><i class="fas fa-folder"></i> {{ update.category }}</span>
            </div>
          </div>
        </div>
        <p v-if="latestUpdates.length === 0">Nenhuma atualização recente.</p>
      </div>
    </section>

    <!-- Tech Categories -->
    <section class="tech-categories">
      <h2>Categorias</h2>
      <div class="categories-grid">
        <div v-for="category in techCategories" :key="category.name" class="category-card">
          <div class="category-icon">
            <i :class="category.icon"></i>
          </div>
          <h3>{{ category.name }}</h3>
          <p>{{ category.count }} documentos</p>
          <div class="category-tags">
            <span v-for="tag in category.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
        <p v-if="techCategories.length === 0">Nenhuma categoria disponível.</p>
      </div>
    </section>

    <!-- Quick Access -->
    <section class="quick-access">
      <h2>Acesso Rápido</h2>
      <div class="quick-links">
        <a v-for="link in quickLinks" :key="link.id" :href="link.url" target="_blank" rel="noopener noreferrer" class="quick-link">
          <i :class="link.icon"></i>
          <span>{{ link.title }}</span>
          <span class="link-description">{{ link.description }}</span>
        </a>
        <p v-if="quickLinks.length === 0">Nenhum link rápido disponível.</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'TechDocs',
  async asyncData({ $content }) {
    const techDocsData = await $content('tech-docs').fetch();
    const allContent = await $content().fetch();
    const techUpdates = allContent.filter(item => item.slug === 'tech-updates');
    return { 
      allDocs: techDocsData.documents,
      allQuickLinks: techDocsData.quickLinks,
      allUpdates: techUpdates
    };
  },
  data() {
    return {
      searchQuery: '',
      filteredDocs: [], // Inicialmente vazia, será preenchida por computed ou filterDocs
      mainSectionsConfig: [
        { id: 'analysis', title: 'Análises Técnicas', icon: 'fas fa-microscope', categoryMatch: 'Análises Técnicas' },
        { id: 'architecture', title: 'Arquitetura & Design', icon: 'fas fa-layer-group', categoryMatch: 'Arquitetura & Design' },
        { id: 'code', title: 'Análise de Código', icon: 'fas fa-code', categoryMatch: 'Análise de Código' },
        { id: 'engineering', title: 'Engenharia', icon: 'fas fa-cogs', categoryMatch: 'Engenharia' }
      ]
    };
  },
  computed: {
    // Documentos filtrados pela busca
    currentDocs() {
      if (!this.searchQuery) {
        return this.allDocs;
      }
      const query = this.searchQuery.toLowerCase();
      return this.allDocs.filter(doc => {
        return (
          doc.title.toLowerCase().includes(query) ||
          doc.description.toLowerCase().includes(query) ||
          doc.category.toLowerCase().includes(query) ||
          (doc.technologies && doc.technologies.some(tech => tech.toLowerCase().includes(query)))
        );
      });
    },
    featuredDocs() {
      return this.currentDocs.filter(doc => doc.status === 'featured');
    },
    latestUpdates() {
      // Ordena as atualizações pela data, do mais recente para o mais antigo
      const updates = [...this.allUpdates].sort((a, b) => new Date(b.date) - new Date(a.date));
      console.log('latestUpdates computed property result:', updates);
      return updates;
    },
    mainSectionsData() {
      return this.mainSectionsConfig.map(section => {
        const docsInSection = this.currentDocs.filter(doc => doc.category === section.categoryMatch);
        return {
          ...section,
          docCount: docsInSection.length,
          // Pega os 4 primeiros títulos como exemplos para a lista
          exampleDocs: docsInSection.slice(0, 4).map(doc => doc.title)
        };
      });
    },
    techCategories() {
      const categoriesMap = {};
      this.allDocs.forEach(doc => {
        if (!categoriesMap[doc.category]) {
          categoriesMap[doc.category] = { 
            name: doc.category, 
            count: 0, 
            tags: new Set(),
            // Adiciona um ícone padrão ou mapeia para ícones específicos se necessário
            icon: 'fas fa-folder'
          };
        }
        categoriesMap[doc.category].count++;
        if (doc.technologies) {
          doc.technologies.forEach(tech => categoriesMap[doc.category].tags.add(tech));
        }
      });

      // Converte o mapa de volta para um array e converte Sets para arrays
      return Object.values(categoriesMap).map(cat => ({
        ...cat,
        tags: Array.from(cat.tags)
      }));
    },
    quickLinks() {
      return this.allQuickLinks;
    }
  },
  methods: {
    filterDocs() {
      // A filtragem agora é feita automaticamente pela computed property `currentDocs`
      // Não precisamos de lógica aqui, apenas o v-model já atualiza searchQuery
    },
    activateGlow(event) {
      event.currentTarget.classList.add('glow-active');
    },
    deactivateGlow(event) {
      event.currentTarget.classList.remove('glow-active');
    }
  },
  head() {
    return {
      title: 'Tech Docs - PunkDomus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Documentações técnicas detalhadas sobre arquitetura, padrões e implementações'
        }
      ]
    };
  }
}
</script>

<style scoped>
.tech-docs-page {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg,
    rgba(8, 14, 26, 0.9) 0%,
    rgba(8, 14, 26, 0.95) 50%,
    rgba(8, 14, 26, 0.9) 100%
  );
    padding: 5rem 3rem;
    padding-bottom: 9rem;
}

.tech-docs-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  justify-content: center;
}

.header-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.cyber-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.cyber-lines .line {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, #21DEEA, transparent);
  animation: cyber-line 8s infinite;
  opacity: 0.3;
}

.cyber-lines .line:nth-child(1) {
  top: 20%;
  width: 80%;
  left: 10%;
  animation-delay: 0s;
}

.cyber-lines .line:nth-child(2) {
  top: 40%;
  width: 60%;
  left: 20%;
  animation-delay: 2s;
}

.cyber-lines .line:nth-child(3) {
  top: 60%;
  width: 70%;
  left: 15%;
  animation-delay: 4s;
}

@keyframes cyber-line {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.tech-docs-header h1 {
  font-size: 3.5em;
  color: #21DEEA;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: 'Protest Guerrilla', sans-serif;
  text-shadow:
    0 0 10px rgba(33, 222, 234, 0.5),
    0 0 20px rgba(33, 222, 234, 0.3);
}

.search-bar {
  max-width: 500px;
  margin: 30px auto 0;
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

.section-description {
  font-size: 1.2em;
  color: #FC5D7F;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.tech-docs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.docs-section {
  padding: 30px;
  background: rgba(8, 14, 26, 0.8);
  border-radius: 15px;
  border: 1px solid rgba(33, 222, 234, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.docs-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(33, 222, 234, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.docs-section.glow-active::before {
  transform: translateX(100%);
}

.docs-section:hover {
  transform: translateY(-5px);
  border-color: #21DEEA;
  box-shadow: 0 0 20px rgba(33, 222, 234, 0.2);
}

.section-icon {
  font-size: 2em;
  color: #21DEEA;
  margin-bottom: 20px;
  text-align: center;
}

.docs-section h2 {
  color: #FC5D7F;
  font-size: 1.5em;
  margin-bottom: 20px;
  text-align: center;
}

.docs-section ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.docs-section ul li {
  color: #fff;
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
}

.docs-section ul li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #FC5D7F;
}

.section-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(33, 222, 234, 0.2);
}

.doc-count {
  color: #21DEEA;
  font-size: 0.9em;
}

.view-all {
  background: none;
  border: none;
  color: #FC5D7F;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9em;
  transition: all 0.3s ease;
}

.view-all:hover {
  color: #21DEEA;
}

.view-all i {
  transition: transform 0.3s ease;
}

.view-all:hover i {
  transform: translateX(5px);
}

.featured-docs {
  margin-top: 80px;
}

.featured-docs h2 {
  font-size: 2em;
  color: #21DEEA;
  margin-bottom: 30px;
  text-align: center;
}

.docs-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.doc-card {
  background: rgba(8, 14, 26, 0.8);
  border: 1px solid rgba(33, 222, 234, 0.2);
  border-radius: 15px;
  padding: 25px;
  transition: all 0.3s ease;
}

.doc-card:hover {
  transform: translateY(-5px);
  border-color: #21DEEA;
  box-shadow: 0 0 20px rgba(33, 222, 234, 0.2);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.card-header i {
  color: #21DEEA;
  font-size: 1.2em;
}

.category {
  color: #FC5D7F;
  font-size: 0.9em;
}

.doc-card h3 {
  color: #21DEEA;
  font-size: 1.3em;
  margin-bottom: 10px;
}

.doc-card p {
  color: #fff;
  font-size: 0.95em;
  margin-bottom: 20px;
  line-height: 1.5;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.date {
  color: #FC5D7F;
  font-size: 0.85em;
}

.read-more {
  background: none;
  border: 1px solid #21DEEA;
  color: #21DEEA;
  padding: 5px 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.read-more:hover {
  background: #21DEEA;
  color: #080E1A;
}

.latest-updates {
  margin-top: 60px;
  padding: 30px;
  background: rgba(8, 14, 26, 0.8);
  border-radius: 15px;
}

.updates-timeline {
  margin-top: 30px;
}

.update-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  border-left: 2px solid #21DEEA;
  margin-bottom: 20px;
  background: rgba(33, 222, 234, 0.05);
  border-radius: 0 15px 15px 0;
}

.update-date {
  color: #21DEEA;
  font-size: 0.9em;
  min-width: 100px;
}

.update-tag {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  margin-bottom: 10px;
}

.update-tag.new {
  background: rgba(0, 255, 0, 0.2);
  color: #4CAF50;
}

.update-tag.update {
  background: rgba(33, 222, 234, 0.2);
  color: #21DEEA;
}

.update-tag.fix {
  background: rgba(255, 87, 34, 0.2);
  color: #FF5722;
}

.update-content h3 {
  color: #FC5D7F;
  margin-bottom: 8px;
}

.update-meta {
  margin-top: 10px;
  display: flex;
  gap: 20px;
  color: #21DEEA;
  font-size: 0.9em;
}

.tech-categories {
  margin-top: 60px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.category-card {
  background: rgba(8, 14, 26, 0.8);
  border: 1px solid rgba(33, 222, 234, 0.2);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  border-color: #21DEEA;
  box-shadow: 0 0 20px rgba(33, 222, 234, 0.2);
}

.category-icon {
  font-size: 2em;
  color: #21DEEA;
  margin-bottom: 15px;
}

.category-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
  justify-content: center;
}

.tag {
  background: rgba(252, 93, 127, 0.1);
  color: #FC5D7F;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.8em;
}

.quick-access {
  margin-top: 60px;
  margin-bottom: 60px;
}

.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.quick-link {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: rgba(8, 14, 26, 0.8);
  border: 1px solid rgba(33, 222, 234, 0.2);
  border-radius: 15px;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;
}

.quick-link:hover {
  transform: translateX(5px);
  border-color: #21DEEA;
  background: rgba(33, 222, 234, 0.1);
}

.quick-link i {
  font-size: 1.5em;
  color: #21DEEA;
}

.quick-link span {
  display: block;
}

.link-description {
  font-size: 0.9em;
  color: #FC5D7F;
  margin-top: 5px;
}

@media (max-width: 768px) {
  .tech-docs-page {
    padding: 60px 15px;
  }

  .tech-docs-header h1 {
    font-size: 2.5em;
  }

  .section-description {
    font-size: 1em;
  }

  .tech-docs-grid {
    grid-template-columns: 1fr;
  }

  .docs-cards {
    grid-template-columns: 1fr;
  }

  .update-item {
    flex-direction: column;
    gap: 10px;
  }

  .update-date {
    min-width: auto;
  }

  .quick-links {
    grid-template-columns: 1fr;
  }
}
</style>
