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
  width: 100%;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  z-index: 1;
  background: linear-gradient(180deg,
    rgba(8, 14, 26, 0.9) 0%,
    rgba(8, 14, 26, 0.95) 50%,
    rgba(8, 14, 26, 0.9) 100%
  );
  overflow-x: hidden; /* Previne scroll horizontal */
}

/* Melhora a visibilidade do conteúdo sobre as partículas */
.featured-section {
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.featured-section {
  margin-bottom: 120px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  border: 1px solid rgba(252, 93, 127, 0.3);
  overflow: hidden;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.featured-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

.featured-title {
  font-size: clamp(2em, 5vw, 4em); /* Título responsivo */
  color: #21DEEA;
  margin-bottom: 20px;
  font-family: 'Protest Guerrilla', sans-serif;
  text-transform: uppercase;
  line-height: 1.1;
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5),
               0 0 20px rgba(33, 222, 234, 0.3);
}

.featured-description {
  font-size: clamp(1em, 2vw, 1.2em); /* Texto responsivo */
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

/* Breakpoints mais detalhados */
@media (max-width: 1200px) {
  .featured-section {
    padding: 30px;
    margin-left: 20px;
    margin-right: 20px;
    width: calc(100% - 40px);
  }
}

@media (max-width: 968px) {
  .featured-decoration {
    width: 30%;
  }
}

@media (max-width: 768px) {
  .home-page {
    padding: 40px 20px;
  }

  .featured-section {
    flex-direction: column;
    padding: 30px 20px;
    margin-bottom: 80px;
  }

  .featured-decoration {
    position: relative;
    width: 100%;
    height: 200px;
    margin-top: 30px;
  }

  .featured-content {
    max-width: 100%;
  }

  .topic-tag {
    font-size: 0.8em;
    padding: 6px 12px;
  }
}

@media (max-width: 480px) {
  .home-page {
    padding: 30px 15px;
  }

  .featured-section {
    margin-left: 15px;
    margin-right: 15px;
    width: calc(100% - 30px);
  }

  .featured-decoration {
    height: 150px;
  }

  .topic-tag {
    font-size: 0.75em;
    padding: 5px 10px;
  }
}

/* Suporte para preferências de redução de movimento */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
</style>