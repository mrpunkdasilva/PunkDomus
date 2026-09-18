<template>
  <main class="category-page">
    <header class="category-header">
      <h1>{{ categoryName }}</h1>
      <p class="category-description">Explorando documentos na categoria {{ categoryName }}</p>
    </header>

    <section class="category-docs-grid">
      <article v-for="doc in categoryDocs" :key="doc.id" class="doc-card">
        <div class="card-header">
          <span class="category">{{ doc.category }}</span>
        </div>
        <h3>{{ formatTitle(doc.title) }}</h3>
        <p>{{ doc.description }}</p>
        <div class="tech-tags">
          <span v-for="tech in doc.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
        </div>
        <div class="card-footer">
          <span class="date">{{ doc.date }}</span>
          <a :href="doc.url" target="_blank" rel="noopener noreferrer" class="read-more">Ler mais</a>
        </div>
      </article>
      <p v-if="categoryDocs.length === 0">Nenhum documento encontrado nesta categoria.</p>
    </section>
  </main>
</template>

<script>
export default {
  name: 'CategoryPage',
  async asyncData({ params, $content }) {
    const categorySlug = params.categorySlug;
    const techDocsData = await $content('tech-docs').fetch();

    // Encontrar o nome da categoria original a partir do slug
    const categoryName = techDocsData.documents.find(doc =>
      doc.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
    )?.category || categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    const categoryDocs = techDocsData.documents.filter(doc =>
      doc.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
    );

    return { categoryName, categoryDocs };
  },
  head() {
    return {
      title: `${this.categoryName} - Tech Docs - PunkDomus`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Documentos técnicos na categoria ${this.categoryName}`
        }
      ]
    };
  },
  methods: {
    formatTitle(title) {
      return title
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
  }
}
</script>

<style scoped>
.category-page {
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

.category-header {
  text-align: center;
  margin-bottom: 60px;
}

.category-header h1 {
  font-size: 3.5em;
  color: #21DEEA;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: 'Protest Guerrilla', sans-serif;
  text-shadow:
    0 0 10px rgba(33, 222, 234, 0.5),
    0 0 20px rgba(33, 222, 234, 0.3);
}

.category-description {
  font-size: 1.2em;
  color: #FC5D7F;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 0 0 5px rgba(252, 93, 127, 0.4);
}

.category-docs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.doc-card {
  background: rgba(8, 14, 26, 0.9);
  border: 1px solid rgba(33, 222, 234, 0.3);
  border-radius: 15px;
  padding: 25px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(33, 222, 234, 0.1);
}

.doc-card::before {
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

.doc-card:hover::before {
  transform: translateX(100%);
}

.doc-card:hover {
  transform: translateY(-8px);
  border-color: #21DEEA;
  box-shadow: 0 0 25px rgba(33, 222, 234, 0.4);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.category {
  color: #FC5D7F;
  font-size: 0.9em;
}

.doc-card h3 {
  color: #21DEEA;
  font-size: 1.4em;
  margin-bottom: 10px;
  text-shadow: 0 0 8px rgba(33, 222, 234, 0.6);
}

.doc-card p {
  color: #fff;
  font-size: 0.95em;
  margin-bottom: 15px;
  line-height: 1.5;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.tech-tag {
  background: rgba(33, 222, 234, 0.1);
  color: #21DEEA;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8em;
  border: 1px solid rgba(33, 222, 234, 0.3);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 15px;
  border-top: 1px solid rgba(33, 222, 234, 0.1);
}

.date {
  color: #FC5D7F;
  font-size: 0.85em;
}

.read-more {
  background: none;
  border: 1px solid #FC5D7F;
  color: #FC5D7F;
  padding: 8px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 0 5px rgba(252, 93, 127, 0.3);
}

.read-more:hover {
  background: #FC5D7F;
  color: #080E1A;
  box-shadow: 0 0 15px rgba(252, 93, 127, 0.6);
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .category-page {
    padding: 60px 15px;
  }

  .category-header h1 {
    font-size: 2.5em;
  }

  .category-description {
    font-size: 1em;
  }

  .category-docs-grid {
    grid-template-columns: 1fr;
  }
}
</style>
