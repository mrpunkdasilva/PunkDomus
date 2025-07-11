<template>
  <section class="categories-section">
    <h2 class="categories-title">Explore Knowledge</h2>
    <div class="categories-grid">
      <nuxt-link v-for="(category, index) in categories" :key="index" :to="category.path" class="category-card">
        <div class="category-icon" v-html="category.icon"></div>
        <h3 class="category-name">{{ category.name }}</h3>
        <p class="category-description">{{ category.description }}</p>
        <div class="category-decoration"></div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturedCategories',
  data() {
    return {
      categories: [
        {
          icon: '<i class="fas fa-newspaper"></i>',
          name: 'Blog',
          description: 'Artigos, tutoriais e pensamentos sobre o universo da tecnologia.',
          path: '/blog'
        },
        {
          icon: '<i class="fas fa-book-open"></i>',
          name: 'Tech Docs',
          description: 'Documentações técnicas detalhadas sobre arquitetura, padrões e implementações.',
          path: '/tech-docs'
        },
        {
          icon: '<i class="fas fa-flask"></i>',
          name: 'Code Labs',
          description: 'Experimentos práticos, POCs e testes com novas tecnologias.',
          path: '/code-labs'
        },
        {
          icon: '<i class="fas fa-file-code"></i>',
          name: 'Cheat Sheets',
          description: 'Guias rápidos e referências para linguagens, frameworks e ferramentas.',
          path: '/cheat-sheets'
        },
        {
          icon: '<i class="fas fa-pencil-alt"></i>',
          name: 'Hand Notes',
          description: 'Anotações pessoais, insights e reflexões sobre desenvolvimento.',
          path: '/hand-notes'
        },
        {
          icon: '<i class="fas fa-video"></i>',
          name: 'Videos',
          description: 'Tutoriais, demonstrações e explicações em formato visual.',
          path: '/videos'
        }
      ]
    }
  }
}
</script>

<style scoped>
.categories-section {
  margin: 100px 0;
  padding: 0 20px;
}

.categories-title {
  font-size: 3em;
  color: #FC5D7F;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 50px;
  text-align: center;
  text-shadow: 0 0 10px rgba(252, 93, 127, 0.5);
  font-family: 'Protest Guerrilla', sans-serif;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(252, 93, 127, 0.2);
  border-radius: 15px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  cursor: pointer;
  text-decoration: none;
}

.category-card:hover {
  transform: translateY(-5px);
  border-color: rgba(252, 93, 127, 0.4);
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(252, 93, 127, 0.2);
}

.category-card:hover .category-icon {
  color: #21DEEA;
  transform: scale(1.1);
}

.category-icon {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #FC5D7F;
  transition: all 0.3s ease;
}

.category-name {
  font-size: 1.5em;
  color: #21DEEA;
  margin-bottom: 15px;
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5);
  font-family: 'Protest Guerrilla', sans-serif;
  letter-spacing: 1px;
}

.category-description {
  color: #efefef;
  line-height: 1.6;
  font-size: 1em;
  opacity: 0.9;
  font-family: 'Inria Sans', sans-serif;
}

.category-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, transparent 50%, rgba(252, 93, 127, 0.1) 100%);
  pointer-events: none;
}

.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #FC5D7F, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.category-card:hover::before {
  opacity: 1;
}

@media (max-width: 768px) {
  .categories-section {
    margin: 60px 0;
  }

  .categories-title {
    font-size: 2.2em;
  }

  .categories-grid {
    grid-template-columns: 1fr;
  }

  .category-card {
    padding: 25px;
  }
}
</style>