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
        <div class="featured-topics">
          <div class="topic-tag"># Development</div>
          <div class="topic-tag"># Documentation</div>
          <div class="topic-tag"># Cyberpunk</div>
          <div class="topic-tag"># Innovation</div>
        </div>
      </div>
      <div class="featured-decoration">
        <CyberSkull/>
        <div class="cyber-lines"></div>
      </div>
    </section>

    <Separator3D />

    <!-- Seção de posts -->
    <header class="home-header">
      <h2 class="home-title">Latest Posts</h2>
      <div class="header-line"></div>
    </header>

    <div class="articles-grid">
      <article
        v-for="article of articles"
        :key="article.slug"
        class="article-card"
      >
        <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
          <div class="article-image">
            <img :src="require(`~/public/resources/${article.img}`)" :alt="article.title"/>
            <div
              class="glitch"
              :style="{
                backgroundImage: `url(${require(`~/public/resources/${article.img}`)})`
              }"
            ></div>
            <div class="image-overlay"></div>
          </div>
          <div class="article-content">
            <h3 class="article-title">{{ article.title }}</h3>
            <p class="article-description">{{ article.description }}</p>
            <span class="read-more">Read More <span class="arrow">→</span></span>
          </div>
        </nuxt-link>
      </article>
    </div>

    <Separator3D />

    <!-- Nova seção de categorias -->
    <FeaturedCategories/>

    <Separator3D />

    <!-- Tech Grid no final -->
    <TechGrid/>
  </main>
</template>

<script>
export default {
  components: {
    CyberSkull: () => import('~/components/CyberSkull.vue'),
    ParticleBackground: () => import('~/components/ParticleBackground.vue'),
    TechGrid: () => import('~/components/TechGrid.vue'),
    FeaturedCategories: () => import('~/components/FeaturedCategories.vue'),
    Separator3D: () => import('~/components/Separator3D.vue')
  },
  async asyncData({$content, params}) {
    const articles = await $content('blog', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {articles}
  },
  head() {
    return {
      title: 'PunkDomus |> Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Explore artigos sobre desenvolvimento de software, documentações e projetos com uma perspectiva cyberpunk.'
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
  z-index: 1; /* Garante que o conteúdo fique acima das partículas */
}

/* Melhora a visibilidade do conteúdo sobre as partículas */
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
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5),
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
  top: 0;
  bottom: 0;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.cyber-lines {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: linear-gradient(90deg,
  transparent 0%,
  rgba(33, 222, 234, 0.1) 50%,
  transparent 100%);
  transform: skewX(-20deg);
}

@keyframes rotate {
  from {
    transform: translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}

.home-header {
  margin-bottom: 60px;
  position: relative;
}

.home-title {
  font-size: 3.5em;
  color: #FC5D7F;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(252, 93, 127, 0.5),
  0 0 20px rgba(252, 93, 127, 0.3);
}

.header-line {
  height: 2px;
  background: linear-gradient(90deg, #FC5D7F, transparent);
  width: 100%;
  margin-top: 10px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  position: relative;
  z-index: 2;
}

.article-card {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(252, 93, 127, 0.2);
  transition: all 0.3s ease;
  position: relative;
}

.article-card:hover {
  transform: translateY(-5px);
  border-color: rgba(252, 93, 127, 0.4);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4),
  0 0 20px rgba(252, 93, 127, 0.2);
}

.article-card a {
  text-decoration: none;
}

.article-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.article-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    transparent 50%,
    rgba(32, 222, 234, 0.1) 50%
  );
  background-size: 100% 4px;
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.article-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: rgba(252, 93, 127, 0.5);
  animation: scanline 2s linear infinite;
  opacity: 0;
  z-index: 2;
}

.article-card:hover .article-image::before,
.article-card:hover .article-image::after {
  opacity: 1;
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

.article-image .glitch {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: inherit;
  background-image: inherit;
  pointer-events: none;
}

.article-card:hover .article-image .glitch {
  opacity: 1;
  animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    transparent,
    rgba(0, 0, 0, 0.8)
  );
  z-index: 3;
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

@media (max-width: 768px) {
  .home-page {
    padding: 40px 20px;
  }

  .home-title {
    font-size: 2.5em;
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }

  .featured-section {
    padding: 30px;
    flex-direction: column;
  }

  .featured-title {
    font-size: 2.5em;
  }

  .featured-decoration {
    position: relative;
    width: 100%;
    height: 300px;
    margin-top: 30px;
  }

  .featured-content {
    max-width: 100%;
  }
}

/* Suporte para preferências de redução de movimento */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

@keyframes glitch {
  0% {
    clip-path: inset(40% 0 61% 0);
    transform: translate(-2px, 2px);
  }
  20% {
    clip-path: inset(92% 0 1% 0);
    transform: translate(1px, -3px);
  }
  40% {
    clip-path: inset(43% 0 1% 0);
    transform: translate(-1px, 3px);
  }
  60% {
    clip-path: inset(25% 0 58% 0);
    transform: translate(3px, -1px);
  }
  80% {
    clip-path: inset(54% 0 7% 0);
    transform: translate(-3px, 2px);
  }
  100% {
    clip-path: inset(58% 0 43% 0);
    transform: translate(2px, -2px);
  }
}

@keyframes scanline {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
</style>
