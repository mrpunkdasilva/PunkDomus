<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-section brand">
        <img src="/punk_domus.svg" alt="PunkDomus Logo" class="footer-logo">
        <p class="footer-description">
          Exploring the digital frontier through cyberpunk aesthetics and technical knowledge.
        </p>
      </div>

      <div class="footer-section links">
        <h3>Quick Links</h3>
        <nav>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>

      <div class="footer-section social">
        <h3>Connect</h3>
        <div class="social-links">
          <a href="https://twitter.com/mrpunksama" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="cyber-line"></div>
      <p class="copyright">
        &copy; {{ currentYear }} PunkDomus. Built with 
        <span class="heart"><i class="fas fa-heart"></i></span> and 
        <span class="code"><i class="fas fa-code"></i></span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterMain',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer-container {
  background: rgba(8, 14, 26, 0.95);
  padding: 60px 30px 20px;
  position: relative;
  overflow: hidden;
}

.footer-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent,
    #FC5D7F,
    #21DEEA,
    transparent
  );
  box-shadow: 0 0 15px rgba(252, 93, 127, 0.5);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section {
  position: relative;
}

.footer-section h3 {
  color: #21DEEA;
  font-size: 1.2em;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.footer-logo {
  width: 150px;
  margin-bottom: 15px;
}

.footer-description {
  color: #afafaf;
  line-height: 1.6;
  font-size: 0.9em;
}

.links nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.links a {
  color: #efefef;
  text-decoration: none;
  transition: all 0.3s ease;
  width: fit-content;
  position: relative;
  font-family: "Inria Sans", sans-serif;
}

.links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #FC5D7F;
  transition: width 0.3s ease;
}

.links a:hover {
  color: #FC5D7F;
}

.links a:hover::after {
  width: 100%;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-links a {
  color: #efefef;
  font-size: 1.5em;
  transition: all 0.3s ease;
}

.social-links a:hover {
  color: #21DEEA;
  transform: translateY(-3px);
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5);
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  padding-top: 20px;
}

.cyber-line {
  height: 1px;
  background: linear-gradient(90deg,
    transparent,
    rgba(252, 93, 127, 0.5),
    transparent
  );
  margin-bottom: 20px;
}

.copyright {
  color: #afafaf;
  font-size: 0.9em;
}

.heart {
  color: #FC5D7F;
  animation: pulse 1.5s ease-in-out infinite;
}

.code {
  color: #21DEEA;
  margin-left: 5px;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-container {
    padding: 40px 20px 20px;
  }

  .social-links {
    justify-content: flex-start;
  }
}
</style>