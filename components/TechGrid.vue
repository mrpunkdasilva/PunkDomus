<template>
  <section class="tech-section">
    <div class="tech-header">
      <h2 class="tech-title">Tech Arsenal</h2>
      <div class="tech-line"></div>
    </div>

    <div class="tech-grid">
      <div
        v-for="(tech, index) in technologies"
        :key="index"
        class="tech-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="tech-icon">
          <i :class="tech.icon"></i>
        </div>
        <h3 class="tech-name">{{ tech.name }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechGrid',
  data() {
    return {
      technologies: [
        { name: 'Vue.js', icon: 'fab fa-vuejs' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'Python', icon: 'fab fa-python' }
      ]
    }
  }
}
</script>

<style scoped>
.tech-section {
  margin: 100px 0 0;
  padding: 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  border: 1px solid rgba(252, 93, 127, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.tech-header {
  margin-bottom: 50px;
  position: relative;
}

.tech-title {
  font-size: 3em;
  color: #21DEEA;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: 'Protest Guerrilla', sans-serif;
  text-shadow:
    0 0 10px rgba(33, 222, 234, 0.5),
    0 0 20px rgba(33, 222, 234, 0.3);
}

.tech-line {
  height: 2px;
  background: linear-gradient(90deg, #21DEEA, transparent);
  width: 100%;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.tech-card {
  padding: 25px;
  background: rgba(8, 14, 26, 0.8);
  border-radius: 15px;
  border: 1px solid rgba(33, 222, 234, 0.2);
  transition: all 0.3s ease;
  text-align: center;
}

.tech-card:hover {
  transform: translateY(-5px);
  border-color: #21DEEA;
  box-shadow: 0 0 20px rgba(33, 222, 234, 0.2);
}

.tech-icon {
  font-size: 2.5em;
  color: #FC5D7F;
  margin-bottom: 15px;
  text-shadow: 0 0 10px rgba(252, 93, 127, 0.5);
}

.tech-name {
  color: #efefef;
  font-size: 1.2em;
}

@media (max-width: 768px) {
  .tech-section {
    padding: 20px;
    margin: 60px 0 0;
  }

  .tech-title {
    font-size: 2.5em;
  }

  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>
