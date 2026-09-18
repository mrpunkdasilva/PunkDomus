<template>
  <main class="blog-page">
    <UiPageHeader title="Blog Posts" subtitle="All articles from the digital frontier." />

    <!-- Loading State -->
    <template v-if="loading">
      <div class="articles-grid">
        <BlogCardSkeleton v-for="n in 6" :key="n" />
      </div>
    </template>

    <template v-else>
      <!-- Featured Post -->
      <section class="featured-post-section" v-if="featuredArticle" aria-label="Post destaque">
        <UiSection title="Featured Post" id="featured" />
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: featuredArticle.slug } }" class="featured-article-card" :aria-label="`Ler artigo destaque: ${featuredArticle.title}`">
          <img :src="require(`~/public/resources/${featuredArticle.img}`)" :alt="featuredArticle.title" class="featured-article-image" loading="lazy"/>
          <div class="featured-article-content">
            <h3 class="featured-article-title">{{ featuredArticle.title }}</h3>
            <p class="featured-article-description">{{ featuredArticle.description }}</p>
            <span class="read-more">Read More <span class="arrow" aria-hidden="true">→</span></span>
          </div>
        </nuxt-link>
      </section>

      <!-- Search and Filter -->
      <section class="filter-section" aria-label="Filtrar artigos">
        <div class="search-container">
          <UiSearch v-model="searchQuery" placeholder="Search articles..." />
        </div>
        <UiTagFilter v-model="selectedTag" :tags="allTags" />
      </section>

      <!-- Articles Grid -->
      <div class="articles-grid">
        <BlogCard
          v-for="article of filteredArticles"
          :key="article.slug"
          :post="article"
        />
      </div>
    </template>
  </main>
</template>

<script>
import BlogCard from '~/components/blog-card/blog-card.vue'

export default {
  components: {
    BlogCard,
    UiPageHeader: () => import('~/components/ui/page-header/page-header.vue'),
    UiSearch: () => import('~/components/ui/search/search.vue'),
    UiTagFilter: () => import('~/components/ui/tag-filter/tag-filter.vue'),
    UiSection: () => import('~/components/ui/section/section.vue'),
    BlogCardSkeleton: () => import('~/components/blog-card-skeleton/blog-card-skeleton.vue')
  },
  data() {
    return {
      loading: true,
      searchQuery: '',
      selectedTag: null
    }
  },
  async asyncData({ $content }) {
    const articles = await $content('blog')
      .only(['title', 'description', 'img', 'slug', 'createdAt', 'tags', 'featured'])
      .sortBy('createdAt', 'desc')
      .fetch()

    const featuredArticle = articles.find(a => a.featured)
    const regularArticles = articles.filter(a => !a.featured)
    const allTags = [...new Set(articles.flatMap(a => a.tags || []))]

    return { articles: regularArticles, featuredArticle, allTags }
  },
  mounted() {
    setTimeout(() => { this.loading = false }, 1500)
  },
  computed: {
    filteredArticles() {
      let articles = this.articles

      if (this.selectedTag) {
        articles = articles.filter(article => article.tags && article.tags.includes(this.selectedTag))
      }

      if (this.searchQuery) {
        const lowerCaseQuery = this.searchQuery.toLowerCase()
        articles = articles.filter(article => article.title.toLowerCase().includes(lowerCaseQuery))
      }

      return articles
    }
  },
  head() {
    return {
      title: 'Blog | PunkDomus',
      meta: [
        { hid: 'description', name: 'description', content: 'All articles and posts from the PunkDomus blog.' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: 'Blog | PunkDomus' },
        { hid: 'og:description', property: 'og:description', content: 'All articles and posts from the PunkDomus blog.' },
        { hid: 'og:image', property: 'og:image', content: 'https://punk-domus.vercel.app/punk_domus_og.png' },
        { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
        { hid: 'og:image:height', property: 'og:image:height', content: '630' },
        { hid: 'og:url', property: 'og:url', content: 'https://punk-domus.vercel.app/blog' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'PunkDomus' },
        { hid: 'og:locale', property: 'og:locale', content: 'pt_BR' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@mrpunksama' },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@mrpunksama' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Blog | PunkDomus' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'All articles and posts from the PunkDomus blog.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://punk-domus.vercel.app/punk_domus_og.png' }
      ]
    }
  }
}
</script>

<style scoped>
.blog-page {
  padding: 80px clamp(20px, 5vw, 60px);
  width: 100%;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  z-index: 1;
  background: linear-gradient(180deg, rgba(8, 14, 26, 0.9) 0%, rgba(8, 14, 26, 0.95) 50%, rgba(8, 14, 26, 0.9) 100%);
  overflow-x: hidden;
}

.featured-post-section {
  margin-bottom: 60px;
}

.featured-article-card {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 30px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: var(--radius-md);
  border: 1px solid rgba(252, 93, 127, 0.2);
  text-decoration: none;
  transition: all var(--transition-normal);
}

.featured-article-card:hover {
  border-color: rgba(252, 93, 127, 0.5);
  box-shadow: 0 10px 30px rgba(252, 93, 127, 0.15);
}

.featured-article-card:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

.featured-article-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.featured-article-content {
  flex: 1;
}

.featured-article-title {
  font-size: 2em;
  color: var(--color-primary);
  margin-bottom: 15px;
}

.featured-article-description {
  color: var(--color-text-muted);
  font-size: 1.1em;
  margin-bottom: 20px;
}

.read-more {
  color: var(--color-secondary);
  font-family: var(--font-heading);
  font-size: 0.9em;
}

.filter-section {
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.search-container {
  display: flex;
  justify-content: center;
}

.articles-grid {
  margin-bottom: 120px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));
  gap: clamp(20px, 3vw, 40px);
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

@media (prefers-reduced-motion: reduce) {
  .featured-article-card {
    transition: none;
  }
  .featured-article-card:hover {
    transform: none;
    box-shadow: none;
  }
}

@media (max-width: 768px) {
  .blog-page {
    padding: 60px 15px;
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }

  .featured-article-card {
    flex-direction: column;
    align-items: stretch;
  }

  .featured-article-image {
    width: 100%;
    height: 200px;
  }
}
</style>
