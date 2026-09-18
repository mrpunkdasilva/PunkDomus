<template>
  <main class="page-container">
    <header class="page-header">
      <h1 class="page-title" data-text="FAQ">FAQ</h1>
    </header>

    <article class="page-content">
      <section class="page-section">
        <div class="faq-item">
          <h2 class="faq-question">O que é o PunkDomus?</h2>
          <p class="faq-answer">
            PunkDomus é um blog e um repositório de conhecimento pessoal focado em desenvolvimento de software, arquitetura, e tecnologia em geral, tudo apresentado com uma estética cyberpunk. É o meu "domus" (casa) digital para compartilhar o que aprendo.
          </p>
        </div>

        <div class="faq-item">
          <h2 class="faq-question">Qual o objetivo deste projeto?</h2>
          <p class="faq-answer">
            O objetivo principal é documentar minha jornada de aprendizado e compartilhar conhecimento com a comunidade de desenvolvedores. Funciona como um diário técnico e um ponto de referência para mim e para outros que possam se interessar pelos mesmos tópicos.
          </p>
        </div>

        <div class="faq-item">
          <h2 class="faq-question">Como posso utilizar o conteúdo?</h2>
          <p class="faq-answer">
            Todo o conteúdo e código são abertos. Você pode usar os guias para aprender, os snippets de código em seus projetos e as documentações como referência. Se o conteúdo for útil, ficarei feliz se você compartilhar o link!
          </p>
        </div>

        <div class="faq-item">
          <h2 class="faq-question">Como posso contribuir?</h2>
          <p class="faq-answer">
            Existem várias formas de contribuir! Você pode reportar um erro, sugerir uma melhoria, corrigir um typo ou até mesmo escrever um artigo ou documentação. Dê uma olhada no nosso <nuxt-link to="/contribute">Guia de Contribuição</nuxt-link> para mais detalhes.
          </p>
        </div>

        <div class="faq-item">
          <h2 class="faq-question">Quem mantém o projeto?</h2>
          <p class="faq-answer">
            O projeto é mantido por mim, <a href="https://github.com/mrpunkdasilva" target="_blank" rel="noopener noreferrer">mr punk da silva</a>. Sou um entusiasta de tecnologia e desenvolvimento de software que adora compartilhar conhecimento.
          </p>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: 'FaqPage',
  head() {
    return {
      title: 'FAQ - PunkDomus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Perguntas frequentes sobre o projeto PunkDomus.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.page-container {
  padding: 80px 30px;
  margin: 0 auto;
  position: relative;
  background: linear-gradient(180deg, rgba(8, 14, 26, 0.9) 0%, rgba(8, 14, 26, 0.95) 50%, rgba(8, 14, 26, 0.9) 100%);
  color: #efefef;
}

.page-header {
  margin-bottom: 100px;
  text-align: center;
  padding: 60px 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  border: 2px solid rgba(252, 93, 127, 0.3);
}

.page-title {
  font-size: 4em;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #21DEEA; /* Solid color */
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5); /* Single color shadow */
}

.page-content {
  margin-top: 80px;
  display: grid;
  gap: 40px;
}

.page-section {
  padding: 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  border: 1px solid rgba(252, 93, 127, 0.2);
  backdrop-filter: blur(10px);
}

.faq-item {
  margin-bottom: 40px;
}

.faq-question {
  font-size: 1.8em;
  margin-bottom: 15px;
  color: #FC5D7F;
  /* Removed text-shadow */
}

.faq-answer {
  line-height: 1.8;
  font-size: 1.1em;
}

.faq-answer a {
  color: #21DEEA;
  text-decoration: none;
  border-bottom: 1px dashed #21DEEA;
  transition: all 0.3s ease;
}

.faq-answer a:hover {
  color: #FC5D7F;
  border-bottom-color: #FC5D7F;
}

@media (max-width: 768px) {
  .page-container { padding: 40px 20px; }
  .page-header { padding: 40px 20px; margin-bottom: 60px; }
  .page-title { font-size: 2.5em; }
  .faq-question { font-size: 1.5em; }
}
</style>
