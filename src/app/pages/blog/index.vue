<template>
  <Container tag="main" size="xl" class="blog-page">
    <PageHeader title="Blog Posts" subtitle="All articles from the digital frontier." />

    <!-- Loading State -->
    <template v-if="loading">
      <Grid columns="auto" gap="lg" class="articles-grid">
        <BlogCardSkeleton v-for="n in 6" :key="n" />
      </Grid>
    </template>

    <template v-else>
      <!-- Featured Post -->
      <Section v-if="featuredArticle" title="Featured Post" id="featured" class="featured-post-section">
        <Link :to="{ name: 'blog-slug', params: { slug: featuredArticle.slug } }" class="featured-article-card">
          <Image
            :src="require(`~/public/resources/${featuredArticle.img}`)"
            :alt="featuredArticle.title"
            class="featured-article-image"
            radius="sm"
          />
          <Stack direction="vertical" gap="sm" class="featured-article-content">
            <Heading :level="3" class="featured-article-title">{{ featuredArticle.title }}</Heading>
            <Text variant="muted" class="featured-article-description">{{ featuredArticle.description }}</Text>
            <Text variant="muted" class="read-more">Read More <span class="arrow" aria-hidden="true">→</span></Text>
          </Stack>
        </Link>
      </Section>

      <!-- Search and Filter -->
      <Stack direction="vertical" gap="lg" class="filter-section">
        <Stack direction="horizontal" justify="center">
          <Search v-model="searchQuery" placeholder="Search articles..." />
        </Stack>
        <TagFilter v-model="selectedTag" :tags="allTags" />
      </Stack>

      <!-- Articles Grid -->
      <Grid columns="auto" gap="lg" class="articles-grid">
        <BlogCard
          v-for="article of filteredArticles"
          :key="article.slug"
          :post="article"
        />
      </Grid>
    </template>
  </Container>
</template>

<script>
export default {
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
}

.articles-grid {
  margin-bottom: 120px;
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
