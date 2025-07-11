<template>
  <main class="blog-page">
    <header class="blog-header">
      <h1 class="blog-title">Blog Posts</h1>
      <p class="blog-subtitle">All articles from the digital frontier.</p>
      <div class="header-line"></div>
    </header>

    <!-- Featured Post -->
    <section class="featured-post-section" v-if="featuredArticle">
      <h2 class="section-title">Featured Post</h2>
      <nuxt-link :to="{ name: 'slug', params: { slug: featuredArticle.slug } }" class="featured-article-card">
        <img :src="require(`~/public/resources/${featuredArticle.img}`)" :alt="featuredArticle.title" class="featured-article-image"/>
        <div class="featured-article-content">
          <h3 class="featured-article-title">{{ featuredArticle.title }}</h3>
          <p class="featured-article-description">{{ featuredArticle.description }}</p>
          <span class="read-more">Read More <span class="arrow">→</span></span>
        </div>
      </nuxt-link>
    </section>

    <!-- Search and Filter -->
    <section class="filter-section">
      <div class="search-container">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search articles..."
          class="search-input"
        />
      </div>
      <div class="tags-container">
        <button @click="selectedTag = null" :class="{ active: !selectedTag }">All</button>
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="selectedTag = tag"
          :class="{ active: selectedTag === tag }"
        >
          {{ tag }}
        </button>
      </div>
    </section>

    <!-- Articles Grid -->
    <div class="articles-grid">
      <article
        v-for="article of filteredArticles"
        :key="article.slug"
        class="article-card"
      >
        <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
          <div class="article-image">
            <img :src="require(`~/public/resources/${article.img}`)" :alt="article.title"/>
          </div>
          <div class="article-content">
            <h3 class="article-title">{{ article.title }}</h3>
            <p class="article-description">{{ article.description }}</p>
            <span class="read-more">Read More <span class="arrow">→</span></span>
          </div>
        </nuxt-link>
      </article>
    </div>

    <!-- Tag Cloud -->
    <section class="tag-cloud-section">
        <h2 class="section-title">Tag Cloud</h2>
        <div class="tag-cloud">
            <span
                v-for="(count, tag) in tagCounts"
                :key="tag"
                @click="selectedTag = tag"
                :style="{ fontSize: (1 + count * 0.2) + 'em' }"
                class="tag-cloud-item"
            >
                {{ tag }}
            </span>
        </div>
    </section>

  </main>
</template>

<script>
export default {
  async asyncData({$content, params}) {
    const articles = await $content('blog')
      .only(['title', 'description', 'img', 'slug', 'createdAt', 'tags', 'featured'])
      .sortBy('createdAt', 'desc')
      .fetch()

    const featuredArticle = articles.find(a => a.featured);
    const regularArticles = articles.filter(a => !a.featured);

    const allTags = [...new Set(articles.flatMap(a => a.tags || []))];

    const tagCounts = articles.flatMap(a => a.tags || []).reduce((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
    }, {});

    return { articles: regularArticles, featuredArticle, allTags, tagCounts };
  },
  data() {
    return {
      searchQuery: '',
      selectedTag: null,
    }
  },
  computed: {
    filteredArticles() {
      let articles = this.articles;

      if (this.selectedTag) {
        articles = articles.filter(article => article.tags && article.tags.includes(this.selectedTag));
      }

      if (this.searchQuery) {
        const lowerCaseQuery = this.searchQuery.toLowerCase();
        articles = articles.filter(article => article.title.toLowerCase().includes(lowerCaseQuery));
      }

      return articles;
    }
  },
  head() {
    return {
      title: 'Blog | PunkDomus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'All articles and posts from the PunkDomus blog.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.blog-page {
  padding: 80px 30px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  z-index: 1;
  background: linear-gradient(180deg, rgba(8, 14, 26, 0.9) 0%, rgba(8, 14, 26, 0.95) 50%, rgba(8, 14, 26, 0.9) 100%);
  overflow-x: hidden;
}

.blog-header {
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blog-title {
  font-size: clamp(2.5em, 5vw, 4em);
  color: #21DEEA;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5), 0 0 20px rgba(33, 222, 234, 0.3);
}

.blog-subtitle {
    font-size: clamp(1em, 2vw, 1.2em);
    color: #afafaf;
    margin-bottom: 30px;
    line-height: 1.6;
    font-family: "Inria Sans", sans-serif;
}

.header-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #FC5D7F, transparent);
  width: 50%;
  margin: 20px auto 0;
}

.section-title {
    font-size: 2em;
    color: #FC5D7F;
    text-align: center;
    margin-bottom: 30px;
}

.featured-post-section {
    margin-bottom: 60px;
}

.featured-article-card {
    display: block;
    background: rgba(0,0,0,0.7);
    border-radius: 15px;
    border: 1px solid rgba(252, 93, 127, 0.2);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 30px;
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
    color: #21DEEA;
    margin-bottom: 15px;
}

.featured-article-description {
    color: #afafaf;
    font-size: 1.1em;
    margin-bottom: 20px;
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

.search-input {
  width: 100%;
  max-width: 600px;
  padding: 15px 25px;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(33, 222, 234, 0.3);
  border-radius: 30px;
  color: #efefef;
  font-size: 1.1em;
  transition: all 0.3s ease;
  outline: none;
}

.search-input:focus {
  border-color: #21DEEA;
  box-shadow: 0 0 15px rgba(33, 222, 234, 0.3);
}

.tags-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.tags-container button {
    background: transparent;
    border: 1px solid #FC5D7F;
    color: #FC5D7F;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.tags-container button.active, .tags-container button:hover {
    background: #FC5D7F;
    color: #1E1E1E;
}

.articles-grid {
  margin-bottom: 120px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(20px, 3vw, 40px);
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.article-card {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(252, 93, 127, 0.2);
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.article-card:hover {
  transform: translateY(-5px);
  border-color: rgba(252, 93, 127, 0.4);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(252, 93, 127, 0.2);
}

.article-card a {
  text-decoration: none;
}

.article-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .article-image img {
  transform: scale(1.05);
}

.article-content {
  padding: 25px;
}

.article-title {
  font-size: 1.5em;
  color: #efefef;
  margin-bottom: 15px;
  line-height: 1.4;
}

.article-description {
  color: #afafaf;
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 20px;
}

.read-more {
  color: #FC5D7F;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.arrow {
  transition: transform 0.3s ease;
}

.article-card:hover .arrow {
  transform: translateX(5px);
}

.tag-cloud-section {
    margin-bottom: 60px;
}

.tag-cloud {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    background: rgba(0,0,0,0.5);
    border-radius: 15px;
}

.tag-cloud-item {
    color: #21DEEA;
    cursor: pointer;
    transition: all 0.3s ease;
}

.tag-cloud-item:hover {
    color: #FC5D7F;
    transform: scale(1.1);
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