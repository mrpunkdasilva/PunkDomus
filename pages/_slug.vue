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

      <nuxt-content :document="article" class="nuxt-content"/>

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
  async asyncData({$content, params}) {
    const article = await $content('blog', params.slug).fetch();

    const [prev, next] = await Promise.all([
      $content('blog')
        .where({slug: {$ne: params.slug}})
        .sortBy('createdAt', 'desc')
        .limit(1)
        .fetch(),
      $content('blog')
        .where({slug: {$ne: params.slug}})
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
  head() {
    const baseUrl = 'https://blog-punkdomus.netlify.app/'; // Substitua pelo seu domínio
    const postUrl = `${baseUrl}/blog/${this.article.slug}`;
    const imageUrl = `${baseUrl}/resources/${this.article.img}`;

    return {
      title: this.article.title,
      meta: [
        {hid: 'description', name: 'description', content: this.article.description},
        // Open Graph
        {hid: 'og:title', property: 'og:title', content: this.article.title},
        {hid: 'og:description', property: 'og:description', content: this.article.description},
        {hid: 'og:image', property: 'og:image', content: imageUrl},
        {hid: 'og:url', property: 'og:url', content: postUrl},
        {hid: 'og:type', property: 'og:type', content: 'article'},
        // Twitter Card
        {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
        {hid: 'twitter:title', name: 'twitter:title', content: this.article.title},
        {hid: 'twitter:description', name: 'twitter:description', content: this.article.description},
        {hid: 'twitter:image', name: 'twitter:image', content: imageUrl}
      ]
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
  width: auto;
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
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5),
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

  .tag {
    color: #FC5D7F;
    background-color: rgba(252, 93, 127, 0.1);
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.8em;
    border: 1px solid rgba(252, 93, 127, 0.3);
  }
}


.header-line {
  height: 3px;
  background: linear-gradient(90deg, #FC5D7F, #21DEEA);
  width: 100%;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 15px rgba(252, 93, 127, 0.5), 0 0 15px rgba(33, 222, 234, 0.5);
}


.post-image {
  min-width: 100%;
  max-width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 30px;
  border: 1px solid rgba(33, 222, 234, 0.3);
}

/* Nuxt Content Styles */
.nuxt-content {
  color: #efefef;
  line-height: 1.8;
}

.nuxt-content hr {
  border: none;
  border-top: 3px dashed #FC5D7F;
  margin: 40px 0;
  opacity: 0.7;
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

/* Selection Styles for Code */
.nuxt-content pre code::selection,
.nuxt-content code::selection {
  background: #080E1A; /* Dark background for selection */
  color: #21DEEA; /* Primary color for selected text */
}

/* Ajuste para tokens de sintaxe */
.token {
  font-family: "Fira Code", monospace !important;
  background: transparent;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #979797;
  font-style: italic;
  background: transparent;
}

.token.function {
  color: #21DEEA;
  background: transparent;
}

.token.keyword {
  color: #FC5D7F;
  background: transparent;
}

.token.string {
  color: #98FB98;
  background: transparent;
}

.token.number {
  color: #FF8C00;
  background: transparent;
}

.token.boolean {
  color: #FC5D7F;
  background: transparent;
}

.token.property {
  color: #21DEEA;
  background: transparent;
}

.token.operator {
  color: #FC5D7F;
  background: transparent;
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

/* Estilos para cabeçalhos */
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
}

.nuxt-content pre {
  background: rgba(8, 14, 26, 0.9);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(33, 222, 234, 0.2);
  margin: 20px 0;
  overflow-x: auto;
  font-family: "Fira Code", monospace !important;
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

/* Table Styles */
.nuxt-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  overflow-x: auto; /* Enable horizontal scrolling for responsiveness */
  display: block; /* Make table a block element for overflow to work */
}

.nuxt-content th,
.nuxt-content td {
  border: 1px solid rgba(33, 222, 234, 0.2);
  padding: 12px 15px;
  text-align: left;
  color: #efefef;
}

.nuxt-content th {
  background-color: rgba(33, 222, 234, 0.1);
  font-weight: bold;
  color: #21DEEA;
}

.nuxt-content tr:nth-child(even) {
  background-color: rgba(8, 14, 26, 0.5);
}

.nuxt-content tr:hover {
  background-color: rgba(8, 14, 26, 0.7);
}

/* Post Footer */
.post-footer {
  margin-top: 60px;
}

.footer-line {
  height: 3px;
  background: linear-gradient(90deg, transparent, #21DEEA, #FC5D7F, transparent);
  margin-bottom: 30px;
  border: none;
  box-shadow: 0 0 15px rgba(33, 222, 234, 0.5), 0 0 15px rgba(252, 93, 127, 0.5);
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

/* Estilos específicos para XML */
.language-xml .token.tag {
  color: #98FB98; /* Verde para tags */
}

.language-xml .token.attr-name {
  color: #FC5D7F; /* Rosa para nomes de atributos */
}

.language-xml .token.attr-value {
  color: #FFD700; /* Amarelo para valores de atributos */
}

.language-xml .token.punctuation {
  color: #21DEEA; /* Ciano para pontuação como <, >, / */
}

.language-xml .token.prolog .token.punctuation,
.language-xml .token.prolog {
  color: #979797; /* Cinza para o prólogo, como <?xml ... ?> */
  font-style: italic;
}

/* Estilos específicos para Java */
.language-java .token.annotation {
  color: #FFD700; /* Amarelo Dourado para anotações */
  font-weight: bold;
}

.language-java .token.class-name {
  color: #42e2b8; /* Verde-água para nomes de classes */
}

.language-java .token.method.function {
  color: #82aaff; /* Azul claro para métodos */
}

.language-java .token.keyword {
  color: #FC5D7F; /* Garante o rosa para palavras-chave */
}

/* Estilos específicos para HTTP */
.language-http .token.property,
.language-http .token.request-line .token.method {
  color: #FC5D7F; /* Rosa para métodos GET, POST, etc. */
  font-weight: bold;
}

.language-http .token.url {
  color: #21DEEA; /* Ciano para a URL */
}

.language-http .token.number {
  color: #FF8C00; /* Laranja para o código de status */
}

.language-http .token.keyword {
  color: #98FB98; /* Verde para nomes de cabeçalho */
}

.language-http .token.http-version {
    color: #979797; /* Cinza para a versão do HTTP */
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
