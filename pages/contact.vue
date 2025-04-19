<template>
  <main class="contact-page">
    <div class="contact-container">
      <section class="contact-header">
        <h1 class="glitch-text" data-text="Contato">Contato</h1>
        <p class="subtitle">Vamos conversar sobre tecnologia?</p>
      </section>

      <div class="contact-grid">
        <section class="contact-section">
          <h2 class="neon-text">Redes Sociais</h2>
          <div class="social-links">
            <a href="https://github.com/yourusername" target="_blank" class="social-link">
              <i class="fab fa-github"></i>
              GitHub
              <div class="link-hover-effect"></div>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" class="social-link">
              <i class="fab fa-twitter"></i>
              Twitter
              <div class="link-hover-effect"></div>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" class="social-link">
              <i class="fab fa-linkedin"></i>
              LinkedIn
              <div class="link-hover-effect"></div>
            </a>
          </div>
        </section>

        <section class="contact-section">
          <h2 class="neon-text">ASCII Art</h2>
          <div class="ascii-container">
            <pre class="ascii-art frame-1">
     ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    ██░░░░░░░░░░░░░██
   ██░░░░░▀▀▀░░░░░░░██
  ██░░░░░░▀▀▀░░░░░░░░██
 ██░░░░░░▀█▀░░░░░░░░░██
██▀▀▀▀▀▀▀▀█▀▀▀▀▀▀▀▀▀▀██
██░░░░░░░░█░░░░░░░░░░██
██░░░▄▄▄▄▄█▄▄▄▄░░░░░██
██░░░▀▀▀▀▀█▀▀▀▀░░░░░██
 ██░░░░░░░█░░░░░░░░██
  ██░░░░░░█░░░░░░░██
   ██░░░░░█░░░░░░██
    ██░░░░█░░░░░██
     ▀▀▀▀▀▀▀▀▀▀▀
            </pre>
            <pre class="ascii-art frame-2">
     ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    ██░░░░░░░░░░░░░██
   ██░░░░░▄▄▄░░░░░░░██    ▀▄
  ██░░░░░░▄▄▄░░░░░░░░██    █
 ██░░░░░░▄█▄░░░░░░░░░██  ▄▀
██▄▄▄▄▄▄▄▄█▄▄▄▄▄▄▄▄▄▄██ █
██░░░░░░░░█░░░░░░░░░░██▄▀
██░░░▄▄▄▄▄█▄▄▄▄░░░░░██
██░░░▀▀▀▀▀█▀▀▀▀░░░░░██
 ██░░░░░░░█░░░░░░░░██
  ██░░░░░░█░░░░░░░██
   ██░░░░░█░░░░░░██
    ██░░░░█░░░░░██
     ▀▀▀▀▀▀▀▀▀▀▀
            </pre>
            <pre class="ascii-art frame-3">
     ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      █
    ██░░░░░░░░░░░░░██     ▐▌
   ██░░░░░███░░░░░░░██    ▐▌
  ██░░░░░░███░░░░░░░░██   ▐▌
 ██░░░░░░███░░░░░░░░░██  ▐▌
█████████████████████████▐▌
██░░░░░░░░█░░░░░░░░░░██ ▐▌
██░░░▄▄▄▄▄█▄▄▄▄░░░░░██▐▌
██░░░▀▀▀▀▀█▀▀▀▀░░░░░██
 ██░░░░░░░█░░░░░░░░██
  ██░░░░░░█░░░░░░░██
   ██░░░░░█░░░░░░██
    ██░░░░█░░░░░██
     ▀▀▀▀▀▀▀▀▀▀▀
            </pre>
          </div>
          <div class="ascii-decoration">
            <span class="cyber-line"></span>
            <span class="cyber-dot"></span>
            <span class="cyber-line"></span>
          </div>
        </section>
      </div>
    </div>

    <div class="cyber-grid">
      <div v-for="n in 20" :key="n" class="grid-line"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ContactPage',
  head() {
    return {
      title: 'Contato - PunkDomus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Entre em contato através das redes sociais para discutir projetos e tecnologia.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  padding: 80px 20px;
  background: #1E1E1E;
  position: relative;
  overflow: hidden;
}

.contact-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
}

.glitch-text {
  font-size: 3rem;
  font-weight: 900;
  color: #FC5D7F;
  text-transform: uppercase;
  position: relative;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  left: 2px;
  text-shadow: -2px 0 #21DEEA;
  clip: rect(24px, 550px, 90px, 0);
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

.glitch-text::after {
  left: -2px;
  text-shadow: -2px 0 #FC5D7F;
  clip: rect(85px, 550px, 140px, 0);
  animation: glitch-anim 2.5s infinite linear alternate-reverse;
}

.subtitle {
  color: #efefef;
  font-size: 1.2rem;
  margin-top: 10px;
  opacity: 0.8;
  text-shadow: 0 0 10px rgba(239, 239, 239, 0.5);
}

.contact-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 20px;
  position: relative;
  z-index: 2;
}

.contact-section {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(252, 93, 127, 0.3);
  border-radius: 10px;
  padding: 30px;
  backdrop-filter: blur(5px);
  position: relative;
  overflow: hidden;
}

.contact-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(252, 93, 127, 0.1),
    transparent
  );
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

.neon-text {
  color: #21DEEA;
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5);
  margin-bottom: 30px;
  font-size: 1.5rem;
}

/* Social Links Styles */
.social-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #efefef;
  text-decoration: none;
  padding: 15px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.link-hover-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(252, 93, 127, 0.2),
    transparent
  );
  transition: 0.5s;
}

.social-link:hover .link-hover-effect {
  left: 100%;
}

.social-link:hover {
  transform: translateX(5px);
  color: #21DEEA;
}

.social-link i {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.social-link:hover i {
  transform: rotate(360deg);
}

/* ASCII Art Styles */
.ascii-container {
  position: relative;
  height: 200px;
}

.ascii-art {
  font-family: monospace;
  color: #21DEEA;
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5);
  font-size: 14px;
  line-height: 1.2;
  white-space: pre;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.frame-1 { animation: frame-1 3s infinite; }
.frame-2 { animation: frame-2 3s infinite; }
.frame-3 { animation: frame-3 3s infinite; }

.cyber-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  pointer-events: none;
  opacity: 0.1;
}

.grid-line {
  border: 1px solid #FC5D7F;
}

/* Animations */
@keyframes frame-1 {
  0%, 33% { opacity: 1; }
  34%, 100% { opacity: 0; }
}

@keyframes frame-2 {
  0%, 33% { opacity: 0; }
  34%, 66% { opacity: 1; }
  67%, 100% { opacity: 0; }
}

@keyframes frame-3 {
  0%, 66% { opacity: 0; }
  67%, 100% { opacity: 1; }
}

@keyframes shine {
  0% { transform: rotate(45deg) translateY(-100%); }
  100% { transform: rotate(45deg) translateY(100%); }
}

@keyframes glitch-anim {
  0% { clip: rect(44px, 550px, 90px, 0); }
  20% { clip: rect(85px, 550px, 140px, 0); }
  40% { clip: rect(66px, 550px, 115px, 0); }
  60% { clip: rect(24px, 550px, 90px, 0); }
  80% { clip: rect(96px, 550px, 140px, 0); }
  100% { clip: rect(58px, 550px, 110px, 0); }
}

@keyframes glitch-anim-2 {
  0% { clip: rect(96px, 550px, 140px, 0); }
  20% { clip: rect(24px, 550px, 90px, 0); }
  40% { clip: rect(85px, 550px, 140px, 0); }
  60% { clip: rect(66px, 550px, 115px, 0); }
  80% { clip: rect(44px, 550px, 90px, 0); }
  100% { clip: rect(58px, 550px, 110px, 0); }
}

/* Responsive Design */
@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .glitch-text {
    font-size: 2.5rem;
  }

  .ascii-art {
    font-size: 0.6rem;
  }
}

@media (max-width: 480px) {
  .contact-page {
    padding: 60px 15px;
  }

  .glitch-text {
    font-size: 2rem;
  }

  .contact-section {
    padding: 20px;
  }

  .ascii-art {
    font-size: 0.5rem;
  }
}
</style>
