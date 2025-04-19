<template>
  <main class="post-container">
    <article class="post-content">
      <div class="post-header">
        <h1 class="post-title">{{ article.title }}</h1>
        <div class="post-meta">
          <span class="post-date">{{ formatDate(article.createdAt) }}</span>
          <div class="post-tags" v-if="article.tags">
            <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
        <div class="header-line"></div>
      </div>

      <img
        v-if="article.img"
        :src="require(`~/public/resources/${article.img}`)"
        :alt="article.title"
        class="post-image"
      />

      <nuxt-content :document="article" class="nuxt-content" />

      <div class="post-footer">
        <div class="footer-line"></div>
        <div class="post-nav">
          <nuxt-link
            v-if="prev"
            :to="{ name: 'slug', params: { slug: prev.slug } }"
            class="nav-link prev"
          >
            ← {{ prev.title }}
          </nuxt-link>
          <nuxt-link
            v-if="next"
            :to="{ name: 'slug', params: { slug: next.slug } }"
            class="nav-link next"
          >
            {{ next.title }} →
          </nuxt-link>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch();

    const [prev, next] = await Promise.all([
      $content('blog')
        .where({ slug: { $ne: params.slug } })
        .sortBy('createdAt', 'desc')
        .limit(1)
        .fetch(),
      $content('blog')
        .where({ slug: { $ne: params.slug } })
        .sortBy('createdAt', 'asc')
        .limit(1)
        .fetch()
    ]);

    return {
      article,
      prev: prev[0],
      next: next[0]
    };
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
}
</script>

<style>
.post-container {
  min-height: 100vh;
  padding: 80px 20px;
  background: #1E1E1E;
  position: relative;
}

.post-content {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(8, 14, 26, 0.8);
  padding: 40px;
  border-radius: 15px;
  border: 1px solid rgba(252, 93, 127, 0.2);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

.post-header {
  margin-bottom: 40px;
}

.post-title {
  font-size: 2.5em;
  color: #21DEEA;
  margin-bottom: 20px;
  line-height: 1.2;
  text-shadow:
    0 0 10px rgba(33, 222, 234, 0.5),
    0 0 20px rgba(33, 222, 234, 0.3);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.post-date {
  color: #FC5D7F;
  font-size: 0.9em;
}

.post-tags {
  display: flex;
  gap: 10px;
}

.tag {
  color: #FC5D7F;
}

.header-line {
  height: 2px;
  background: linear-gradient(90deg, #FC5D7F, transparent);
  width: 100%;
}

.post-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 30px;
  border: 1px solid rgba(33, 222, 234, 0.3);
}

/* Nuxt Content Styles */
.nuxt-content {
  color: #efefef;
  line-height: 1.8;
}

/* Estilos específicos para blocos de código */
.nuxt-content-highlight {
  position: relative;
  margin: 30px 0;
}

.nuxt-content pre {
  background: #080E1A !important;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(33, 222, 234, 0.2);
  overflow-x: auto;
  margin: 0;
  font-size: 0.9em;
  line-height: 1.5;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.nuxt-content pre code {
  background: transparent !important;
  color: #efefef;
  padding: 0;
  margin: 0;
  border-radius: 0;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.95em;
  line-height: 1.6;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  tab-size: 2;
  hyphens: none;
}

/* Estilos para código inline */
.nuxt-content p code,
.nuxt-content li code,
.nuxt-content table code {
  background: rgba(33, 222, 234, 0.1);
  color: #21DEEA;
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  font-size: 0.9em;
  border: 1px solid rgba(33, 222, 234, 0.2);
}

/* Barra de linguagem do código */
.nuxt-content-highlight .filename {
  position: absolute;
  top: 0;
  right: 0;
  color: #FC5D7F;
  font-size: 0.8em;
  font-family: 'Fira Code', monospace;
  padding: 0.5em 1em;
  background: rgba(252, 93, 127, 0.1);
  border-radius: 0 8px 0 8px;
  border-left: 1px solid rgba(252, 93, 127, 0.3);
  border-bottom: 1px solid rgba(252, 93, 127, 0.3);
}

/* Ajuste para tokens de sintaxe */
.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #6c7a89;
  font-style: italic;
}

.token.function {
  color: #21DEEA;
}

.token.keyword {
  color: #FC5D7F;
}

.token.string {
  color: #98FB98;
}

.token.number {
  color: #FF8C00;
}

.token.boolean {
  color: #FC5D7F;
}

.token.property {
  color: #21DEEA;
}

.token.operator {
  color: #FC5D7F;
}

/* Scrollbar personalizada para blocos de código */
.nuxt-content pre::-webkit-scrollbar {
  height: 8px;
}

.nuxt-content pre::-webkit-scrollbar-track {
  background: rgba(33, 222, 234, 0.1);
  border-radius: 4px;
}

.nuxt-content pre::-webkit-scrollbar-thumb {
  background: rgba(252, 93, 127, 0.3);
  border-radius: 4px;
}

.nuxt-content pre::-webkit-scrollbar-thumb:hover {
  background: rgba(252, 93, 127, 0.5);
}

.nuxt-content h1,
.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
  color: #21DEEA;
  margin: 30px 0 20px;
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.3);
}

.nuxt-content h2 {
  font-size: 1.8em;
  border-bottom: 2px solid rgba(33, 222, 234, 0.2);
  padding-bottom: 10px;
}

.nuxt-content h3 {
  font-size: 1.5em;
  color: #FC5D7F;
}

.nuxt-content p {
  margin-bottom: 20px;
  font-size: 1.1em;
}

.nuxt-content a {
  color: #21DEEA;
  text-decoration: none;
  border-bottom: 1px dashed #21DEEA;
  transition: all 0.3s ease;
}

.nuxt-content a:hover {
  color: #FC5D7F;
  border-color: #FC5D7F;
  text-shadow: 0 0 10px rgba(252, 93, 127, 0.5);
}

.nuxt-content ul,
.nuxt-content ol {
  margin: 20px 0;
  padding-left: 20px;
}

.nuxt-content li {
  margin-bottom: 10px;
}

.nuxt-content code {
  background: rgba(33, 222, 234, 0.1);
  color: #21DEEA;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  font-size: 0.9em;
}

.nuxt-content pre {
  background: rgba(8, 14, 26, 0.9);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(33, 222, 234, 0.2);
  margin: 20px 0;
  overflow-x: auto;
}

.nuxt-content pre code {
  background: none;
  color: #efefef;
  padding: 0;
}

.nuxt-content blockquote {
  border-left: 4px solid #FC5D7F;
  padding-left: 20px;
  margin: 20px 0;
  font-style: italic;
  color: #afafaf;
}

/* Post Footer */
.post-footer {
  margin-top: 60px;
}

.footer-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #FC5D7F, transparent);
  margin-bottom: 30px;
}

.post-nav {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.nav-link {
  color: #21DEEA;
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid rgba(33, 222, 234, 0.3);
  border-radius: 20px;
  transition: all 0.3s ease;
  font-size: 0.9em;
}

.nav-link:hover {
  background: rgba(33, 222, 234, 0.1);
  border-color: #21DEEA;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(33, 222, 234, 0.2);
}

/* Responsividade */
@media (max-width: 768px) {
  .post-container {
    padding: 60px 15px;
  }

  .post-content {
    padding: 30px 20px;
  }

  .post-title {
    font-size: 2em;
  }

  .post-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .post-nav {
    flex-direction: column;
    align-items: stretch;
  }

  .nav-link {
    text-align: center;
  }
}
</style>
