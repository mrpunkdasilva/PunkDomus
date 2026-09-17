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

<style>
.home-page {
  min-height: 100vh;
  padding: 80px 20px 0;
  position: relative;
  background: var(--color-bg-dark);
}

.featured-section {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  padding: 60px 20px;
}

.featured-content {
  flex: 1;
  max-width: 650px;
}

.featured-title {
  font-size: clamp(2.5em, 5vw, 4em);
  margin-bottom: 25px;
  color: var(--color-primary);
  line-height: 1.1;
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5), 0 0 20px rgba(33, 222, 234, 0.3);
}

.featured-description {
  font-size: clamp(1.1em, 2vw, 1.3em);
  color: var(--color-text-muted);
  margin-bottom: 30px;
  line-height: 1.7;
}

.featured-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.topic-tag {
  background: rgba(252, 93, 127, 0.1);
  color: var(--color-secondary);
  padding: 10px 18px;
  border-radius: var(--radius-full);
  font-size: 0.9em;
  border: 1px solid rgba(252, 93, 127, 0.3);
  transition: all var(--transition-normal);
}

.topic-tag:hover {
  background: rgba(252, 93, 127, 0.2);
  border-color: var(--color-secondary);
  transform: translateY(-2px);
}

.featured-decoration {
  flex: 0 0 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

@media (prefers-reduced-motion: reduce) {
  .topic-tag {
    transition: none;
  }
  .topic-tag:hover {
    transform: none;
  }
}

@media (max-width: 900px) {
  .featured-section {
    flex-direction: column;
    padding: 40px 15px;
    gap: 40px;
    text-align: center;
    align-items: center;
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
    flex: 0 0 auto;
    height: auto;
  }
}
</style>
