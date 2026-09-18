<template>
  <Container tag="main" size="lg" class="about-page">
    <Header tag="header" class="about-header">
      <Heading :level="1" class="about-title">Sobre o PunkDomus</Heading>
    </Header>

    <Stack direction="vertical" gap="xl" class="about-content">
      <Card class="about-section">
        <Section title="O que é o PunkDomus?" id="what-is">
          <Text variant="lead">
            PunkDomus é meu espaço pessoal na web onde compartilho conhecimento,
            experiências e reflexões sobre desenvolvimento de software, com um toque
            de estética cyberpunk.
          </Text>
        </Section>
      </Card>

      <Card class="about-section">
        <Section title="O que você encontrará aqui" id="content">
          <List variant="none" class="feature-list">
            <li class="feature-item">📚 Documentações detalhadas de projetos</li>
            <li class="feature-item">💡 Ideias e conceitos em desenvolvimento</li>
            <li class="feature-item">🛠️ Projetos em andamento e finalizados</li>
            <li class="feature-item">🤔 Reflexões sobre tecnologia e desenvolvimento</li>
            <li class="feature-item">📝 Tutoriais e guias práticos</li>
          </List>
        </Section>
      </Card>

      <Card class="about-section">
        <Section title="Objetivo" id="objective">
          <Text variant="lead">
            Este blog serve como um diário digital do meu percurso no desenvolvimento
            de software, documentando minha jornada e compartilhando conhecimento com
            a comunidade. Aqui, você encontrará desde documentações técnicas até
            reflexões sobre projetos futuros.
          </Text>
        </Section>
      </Card>

      <Card class="about-section">
        <Section title='Por que "PunkDomus"?' id="why-name">
          <Text variant="lead">
            O nome combina "Punk", representando a atitude rebelde e inovadora do
            movimento cyberpunk, com "Domus" (casa em latim), simbolizando um espaço
            pessoal de criação e compartilhamento. É um lugar onde tecnologia e
            criatividade se encontram.
          </Text>
        </Section>
      </Card>
    </Stack>
  </Container>
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
.about-page {
  padding: 80px 30px;
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

.about-content {
  margin-top: 80px;
  position: relative;
  z-index: 3;
}

.about-section {
  padding: 40px;
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

@media (max-width: 768px) {
  .about-page {
    padding: 40px 20px;
  }

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

  .feature-item {
    font-size: 1.1em;
    padding: 15px;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
</style>
