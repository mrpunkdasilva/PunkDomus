<template>
  <div class="header-wrapper">
    <header>
      <div class="title">
        <NuxtLink to="/" class="logo-link">
          <img src="/punk_domus.svg" alt="Punk Domus Logo">
          <h1>Punk Domus</h1>
        </NuxtLink>
      </div>

      <!-- Menu Toggle Button -->
      <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen">
        <span class="hamburger" :class="{ 'is-active': isMenuOpen }">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </span>
      </button>

      <!-- Navigation Menu -->
      <nav :class="{ 'is-open': isMenuOpen }">
        <NuxtLink to="/" @click="closeMenu">Home</NuxtLink>
        <NuxtLink to="/blog" @click="closeMenu">Blog</NuxtLink>
        <NuxtLink to="/tech-docs" @click="closeMenu">Tech Docs</NuxtLink>
        <NuxtLink to="/code-labs" @click="closeMenu">Code Labs</NuxtLink>
        <NuxtLink to="/cheat-sheets" @click="closeMenu">Cheat Sheets</NuxtLink>
        <NuxtLink to="/hand-notes" @click="closeMenu">Hand Notes</NuxtLink>
        <NuxtLink to="/videos" @click="closeMenu">Videos</NuxtLink>
        <NuxtLink to="/about" @click="closeMenu">Sobre</NuxtLink>
        <NuxtLink to="/contact" @click="closeMenu">Contato</NuxtLink>
      </nav>
    </header>
    <div class="header-line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : ''
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.style.overflow = ''
    }
  },
  mounted() {
    // Fecha o menu ao redimensionar para desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && this.isMenuOpen) {
        this.closeMenu()
      }
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.closeMenu)
  }
}
</script>

<style>
.header-wrapper {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(8, 14, 26, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

header {
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

.title {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 15px;
}

.logo-link img {
  height: 40px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo-link:hover img {
  transform: rotate(-5deg);
}

.logo-link h1 {
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  background: linear-gradient(45deg, #FC5D7F, #21DEEA);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: none;
}

nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

nav a {
  font-size: 1.1rem;
  text-decoration: none;
  color: #efefef;
  position: relative;
  padding: 5px 0;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #21DEEA;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #FC5D7F, #21DEEA);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

nav a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.header-line {
  height: 2px;
  background-image: linear-gradient(to right, #FC5D7F, #21DEEA);
}

/* Menu Toggle Button */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 100;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.line {
  width: 25px;
  height: 2px;
  background: #efefef;
  transition: all 0.3s ease;
}

.hamburger.is-active .line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.is-active .line:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active .line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Styles */
@media (max-width: 768px) {
  header {
    padding: 15px 20px;
  }

  .menu-toggle {
    display: block;
  }

  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: rgba(8, 14, 26, 0.98);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    transition: right 0.3s ease;
  }

  nav.is-open {
    right: 0;
  }

  nav a {
    font-size: 1.5rem;
    opacity: 0;
    transform: translateY(20px);
  }

  nav.is-open a {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.3s ease;
  }

  nav.is-open a:nth-child(1) { transition-delay: 0.1s; }
  nav.is-open a:nth-child(2) { transition-delay: 0.2s; }
  nav.is-open a:nth-child(3) { transition-delay: 0.3s; }
  nav.is-open a:nth-child(4) { transition-delay: 0.4s; }
}

/* Ajustes para telas muito pequenas */
@media (max-width: 480px) {
  .logo-link h1 {
    font-size: 20px;
  }

  .logo-link img {
    height: 30px;
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
