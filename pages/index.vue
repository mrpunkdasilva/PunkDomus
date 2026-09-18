<template>
  <main class="home-page">
    <!-- Seção de destaque -->
    <section class="featured-section">
      <div class="featured-content">
        <h1 class="featured-title">Welcome to PunkDomus</h1>
        <p class="featured-description">
          Explore the digital frontier through the lens of cyberpunk aesthetics.
          Dive into software development, documentation, and innovative projects.
        </p>
        <div class="featured-topics" role="list" aria-label="Temas do blog">
          <div class="topic-tag" role="listitem"># Development</div>
          <div class="topic-tag" role="listitem"># Documentation</div>
          <div class="topic-tag" role="listitem"># Cyberpunk</div>
          <div class="topic-tag" role="listitem"># Innovation</div>
        </div>
      </div>
      <div class="featured-decoration" aria-hidden="true">
        <CyberSkull/>
        <div class="cyber-lines"></div>
      </div>
    </section>

    <Separator3D />

    <!-- Nova seção de categorias -->
    <FeaturedCategories/>

    <Separator3D />

    <!-- Seção de Posts Recentes -->
    <RecentPosts v-if="recentPosts.length" :posts="recentPosts" />

    <Separator3D />

    <!-- Tech Grid no final -->
    <TechGrid/>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const recentPosts = await $content('blog')
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()

    return { recentPosts }
  },
  components: {
    CyberSkull: () => import('~/components/cyber-skull/cyber-skull.vue'),
    TechGrid: () => import('~/components/tech-grid/tech-grid.vue'),
    FeaturedCategories: () => import('~/components/featured-categories/featured-categories.vue'),
    Separator3D: () => import('~/components/separator-3d/separator-3d.vue'),
    RecentPosts: () => import('~/components/recent-posts/recent-posts.vue')
  },
  head() {
    return {
      title: 'PunkDomus | Blog Técnico de Desenvolvimento & Cyberpunk',
      meta: [
        { hid: 'description', name: 'description', content: 'Explore artigos sobre desenvolvimento de software, documentações e projetos com uma perspectiva cyberpunk.' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: 'PunkDomus | Blog Técnico de Desenvolvimento & Cyberpunk' },
        { hid: 'og:description', property: 'og:description', content: 'Explore artigos sobre desenvolvimento de software, documentações e projetos com uma perspectiva cyberpunk.' },
        { hid: 'og:image', property: 'og:image', content: 'https://punk-domus.vercel.app/punk_domus_og.png' },
        { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
        { hid: 'og:image:height', property: 'og:image:height', content: '630' },
        { hid: 'og:url', property: 'og:url', content: 'https://punk-domus.vercel.app' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'PunkDomus' },
        { hid: 'og:locale', property: 'og:locale', content: 'pt_BR' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@mrpunksama' },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@mrpunksama' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'PunkDomus | Blog Técnico de Desenvolvimento & Cyberpunk' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Explore artigos sobre desenvolvimento de software, documentações e projetos com uma perspectiva cyberpunk.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://punk-domus.vercel.app/punk_domus_og.png' }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'PunkDomus',
            url: 'https://punk-domus.vercel.app',
            description: 'Blog técnico sobre desenvolvimento de software, documentações e projetos com uma perspectiva cyberpunk.',
            author: {
              '@type': 'Person',
              name: 'Mr Punk da Silva'
            },
            inLanguage: 'pt-BR'
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.home-page {
  padding: 80px 30px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  z-index: 1;
}

.featured-section,
.article-card {
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.featured-section {
  margin-bottom: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  border: 1px solid rgba(252, 93, 127, 0.3);
  overflow: hidden;
}

.featured-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

.featured-title {
  font-size: 4em;
  color: #21DEEA;
  margin-bottom: 20px;
  font-family: 'Protest Guerrilla', sans-serif;
  text-transform: uppercase;
  line-height: 1.1;
  text-shadow:
    0 0 10px rgba(33, 222, 234, 0.5),
    0 0 20px rgba(33, 222, 234, 0.3);
}

.featured-description {
  font-size: 1.2em;
  color: #afafaf;
  margin-bottom: 30px;
  line-height: 1.6;
  font-family: "Inria Sans", sans-serif;
}

.featured-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.topic-tag {
  padding: 8px 16px;
  background: rgba(252, 93, 127, 0.1);
  border: 1px solid #FC5D7F;
  border-radius: 20px;
  color: #FC5D7F;
  font-size: 0.9em;
  transition: all 0.3s ease;
}

.topic-tag:hover {
  background: rgba(252, 93, 127, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(252, 93, 127, 0.2);
}

.featured-decoration {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.cyber-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .topic-tag {
    transition: none;
  }
  .topic-tag:hover {
    transform: none;
    box-shadow: none;
  }
}

@media (max-width: 900px) {
  .home-page {
    padding: 60px 15px;
  }

  .featured-section {
    flex-direction: column;
    padding: 40px 15px;
    gap: 40px;
    text-align: center;
  }

  .featured-content {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .featured-topics {
    justify-content: center;
  }

  .featured-decoration {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
  }
}
</style>
