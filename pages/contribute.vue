<template>
  <main class="page-container">
    <header class="page-header">
      <h1 class="page-title" data-text="Contribuir">Contribuir</h1>
    </header>

    <article class="page-content">
      <section class="page-section" aria-labelledby="intro">
        <h2 id="intro" class="section-title">Por que Contribuir?</h2>
        <p class="section-text">
          O PunkDomus é um projeto de código aberto e o seu crescimento depende da comunidade. Suas contribuições, não importa o tamanho, ajudam a manter a qualidade e a relevância do conteúdo. Seja reportando um bug, sugerindo uma melhoria, ou escrevendo código ou documentação, cada ajuda é valiosa.
        </p>
      </section>

      <section class="page-section" aria-labelledby="bug-report">
        <h2 id="bug-report" class="section-title">Reportando Bugs</h2>
        <p class="section-text">
          Encontrou um bug? A melhor forma de reportá-lo é abrindo uma <a href="https://github.com/mrpunkdasilva/PunkDomus/issues" target="_blank" rel="noopener noreferrer">Issue no GitHub</a>.
          Certifique-se de incluir o máximo de detalhes possível, como:
        </p>
        <ul class="feature-list">
          <li class="feature-item">Uma descrição clara do bug.</li>
          <li class="feature-item">Passos para reproduzir o comportamento.</li>
          <li class="feature-item">O comportamento esperado e o que realmente aconteceu.</li>
          <li class="feature-item">Screenshots, se aplicável.</li>
        </ul>
      </section>

      <section class="page-section" aria-labelledby="enhancements">
        <h2 id="enhancements" class="section-title">Sugerindo Melhorias</h2>
        <p class="section-text">
          Tem uma ideia para uma nova funcionalidade ou uma melhoria em algo existente? Adoraríamos ouvir! Você também pode abrir uma <a href="https://github.com/mrpunkdasilva/PunkDomus/issues" target="_blank" rel="noopener noreferrer">Issue no GitHub</a> para descrever sua sugestão.
        </p>
      </section>

      <section class="page-section" aria-labelledby="code-contribution">
        <h2 id="code-contribution" class="section-title">Contribuição com Código</h2>
        <p class="section-text">
          Se você deseja contribuir com código, siga estes passos:
        </p>
        <ol class="feature-list">
          <li class="feature-item">Faça um <strong>Fork</strong> do repositório.</li>
          <li class="feature-item">Crie uma nova <strong>branch</strong> para sua feature (<code>git checkout -b feature/AmazingFeature</code>).</li>
          <li class="feature-item">Faça o <strong>commit</strong> de suas mudanças (<code>git commit -m 'Add some AmazingFeature'</code>).</li>
          <li class="feature-item">Envie para a sua branch (<code>git push origin feature/AmazingFeature</code>).</li>
          <li class="feature-item">Abra um <strong>Pull Request</strong>.</li>
        </ol>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: 'ContributePage',
  head() {
    return {
      title: 'Contribuir - PunkDomus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Saiba como contribuir com o projeto PunkDomus, seja reportando bugs, sugerindo melhorias ou contribuindo com código e documentação.'
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
  gap: 60px;
}

.page-section {
  padding: 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  border: 1px solid rgba(252, 93, 127, 0.2);
  backdrop-filter: blur(10px);
}

.section-title {
  font-size: 2.2em;
  margin-bottom: 30px;
  color: #FC5D7F;
  text-shadow: 0 0 10px rgba(252, 93, 127, 0.5);
}

.section-text {
  line-height: 1.9;
  font-size: 1.15em;
}

.section-text a {
  color: #21DEEA;
  text-decoration: none;
  border-bottom: 1px dashed #21DEEA;
  transition: all 0.3s ease;
}

.section-text a:hover {
  color: #FC5D7F;
  border-bottom-color: #FC5D7F;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  display: grid;
  gap: 15px;
}

.feature-item {
  padding: 15px;
  font-size: 1.1em;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  border: 1px solid rgba(33, 222, 234, 0.2);
}

@media (max-width: 768px) {
  .page-container { padding: 40px 20px; }
  .page-header { padding: 40px 20px; margin-bottom: 60px; }
  .page-title { font-size: 2.5em; }
  .section-title { font-size: 1.8em; }
}
</style>
