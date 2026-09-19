<template>
  <main class="about-page">
    <header class="about-header">
      <h1 class="about-title">Sobre o PunkDomus</h1>
    </header>

    <article class="about-content">
      <section class="about-section" aria-labelledby="what-is">
        <h2 id="what-is" class="section-title">O que é o PunkDomus?</h2>
        <p class="section-text">
          PunkDomus é meu espaço pessoal na web onde compartilho conhecimento,
          experiências e reflexões sobre desenvolvimento de software, com um toque
          de estética cyberpunk.
        </p>
      </section>

      <section class="about-section" aria-labelledby="content">
        <h2 id="content" class="section-title">O que você encontrará aqui</h2>
        <nav class="content-nav">
          <ul class="feature-list" role="list">
            <li class="feature-item" role="listitem">📚 Documentações detalhadas de projetos</li>
            <li class="feature-item" role="listitem">💡 Ideias e conceitos em desenvolvimento</li>
            <li class="feature-item" role="listitem">🛠️ Projetos em andamento e finalizados</li>
            <li class="feature-item" role="listitem">🤔 Reflexões sobre tecnologia e desenvolvimento</li>
            <li class="feature-item" role="listitem">📝 Tutoriais e guias práticos</li>
          </ul>
        </nav>
      </section>

      <section class="about-section" aria-labelledby="objective">
        <h2 id="objective" class="section-title">Objetivo</h2>
        <p class="section-text">
          Este blog serve como um diário digital do meu percurso no desenvolvimento
          de software, documentando minha jornada e compartilhando conhecimento com
          a comunidade. Aqui, você encontrará desde documentações técnicas até
          reflexões sobre projetos futuros.
        </p>
      </section>

      <section class="about-section" aria-labelledby="why-name">
        <h2 id="why-name" class="section-title">Por que "PunkDomus"?</h2>
        <p class="section-text">
          O nome combina "Punk", representando a atitude rebelde e inovadora do
          movimento cyberpunk, com "Domus" (casa em latim), simbolizando um espaço
          pessoal de criação e compartilhamento. É um lugar onde tecnologia e
          criatividade se encontram.
        </p>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: 'About',
  head() {
    return {
      title: 'Sobre - PunkDomus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Conheça o PunkDomus, um blog pessoal sobre desenvolvimento de software, documentações e projetos com estética cyberpunk.'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Mantendo apenas as animações necessárias */
@keyframes neonPulse {
  0% { text-shadow: 0 0 7px #21DEEA, 0 0 10px #21DEEA, 0 0 21px #21DEEA; }
  50% { text-shadow: 0 0 15px #FC5D7F, 0 0 25px #FC5D7F, 0 0 40px #FC5D7F; }
  100% { text-shadow: 0 0 7px #21DEEA, 0 0 10px #21DEEA, 0 0 21px #21DEEA; }
}

@keyframes glitch {
  0% { clip-path: inset(50% 0 30% 0); transform: skew(0.15deg); }
  5% { clip-path: inset(20% 0 60% 0); transform: skew(0.3deg); }
  10% { clip-path: inset(40% 0 40% 0); transform: skew(-0.15deg); }
  15% { clip-path: inset(10% 0 70% 0); transform: skew(0.4deg); }
  20% { clip-path: inset(80% 0 10% 0); transform: skew(-0.2deg); }
  25% { clip-path: inset(30% 0 50% 0); transform: skew(0.1deg); }
  100% { clip-path: inset(50% 0 30% 0); transform: skew(0deg); }
}

/* Estilos base atualizados */
.about-page {
  padding: clamp(2rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem);
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  background: linear-gradient(180deg,
    rgba(8, 14, 26, 0.9) 0%,
    rgba(8, 14, 26, 0.95) 50%,
    rgba(8, 14, 26, 0.9) 100%
  );
}

.about-page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15) 0px,
      rgba(0, 0, 0, 0.15) 1px,
      transparent 1px,
      transparent 2px
    );
  pointer-events: none;
  z-index: 1;
}

.about-header {
  margin-bottom: 100px;
  text-align: center;
  position: relative;
  padding: 60px 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  border: 2px solid rgba(252, 93, 127, 0.3);
  box-shadow:
    0 0 30px rgba(0, 0, 0, 0.5),
    inset 0 0 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.about-title {
  font-size: 4em;
  animation: neonPulse 3s infinite;
  position: relative;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 40px;
}

.about-title::before {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -2px 0 #FC5D7F;
  top: 0;
  color: #21DEEA;
  background: #080E1A;
  overflow: hidden;
  animation: glitch 3s infinite linear alternate-reverse;
  z-index: -1;
}

.about-content {
  margin-top: 80px;
  display: grid;
  gap: 60px;
  position: relative;
  z-index: 3;
}

.about-section {
  padding: 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  border: 1px solid rgba(252, 93, 127, 0.2);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 0 0 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.about-section:hover {
  border-color: rgba(252, 93, 127, 0.4);
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.4),
    inset 0 0 30px rgba(0, 0, 0, 0.4);
}

.section-title {
  font-size: 2.2em;
  margin-bottom: 30px;
  color: #FC5D7F;
  position: relative;
  padding-left: 25px;
  display: inline-block;
  text-shadow: 0 0 10px rgba(252, 93, 127, 0.5);
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 100%;
  background: #FC5D7F;
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(252, 93, 127, 0.7);
}

.section-text {
  line-height: 1.9;
  font-size: 1.15em;
  color: #efefef;
  text-shadow: 0 0 2px rgba(239, 239, 239, 0.3);
  position: relative;
  z-index: 2;
}

.feature-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 25px;
}

.feature-item {
  padding: 20px;
  font-size: 1.2em;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  border: 1px solid rgba(252, 93, 127, 0.2);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  overflow: hidden;
}

.feature-item:hover {
  transform: translateX(10px);
  background: rgba(252, 93, 127, 0.1);
  border-color: rgba(252, 93, 127, 0.3);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* Responsividade atualizada */
@media (max-width: 768px) {
  .about-header {
    padding: 40px 20px;
    margin-bottom: 60px;
  }

  .about-title {
    font-size: 2.5em;
  }

  .section-title {
    font-size: 1.8em;
  }

  .about-content {
    gap: 40px;
  }

  .feature-item {
    font-size: 1.1em;
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .about-header {
    padding: 30px 15px;
    margin-bottom: 40px;
  }

  .about-title {
    font-size: 2em;
  }

  .section-title {
    font-size: 1.5em;
  }

  .about-content {
    gap: 30px;
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
