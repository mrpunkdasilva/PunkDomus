<template>
  <div class="particle-container">
    <div 
      v-for="(particle, index) in particles" 
      :key="index"
      class="particle"
      :style="getParticleStyle(particle)"
    >
      {{ particle.emoji }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParticleBackground',
  data() {
    return {
      particles: [],
      emojis: ['💀', '🤘', '☠️', '🎸', '🔥'],
      animationFrameId: null
    }
  },
  mounted() {
    this.initParticles();
    this.animate();
  },
  beforeDestroy() {
    cancelAnimationFrame(this.animationFrameId);
  },
  methods: {
    initParticles() {
      const numberOfParticles = 20;
      
      for (let i = 0; i < numberOfParticles; i++) {
        this.particles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          emoji: this.emojis[Math.floor(Math.random() * this.emojis.length)],
          speed: 0.1 + Math.random() * 0.2,
          size: 20 + Math.random() * 20,
          opacity: 0.1 + Math.random() * 0.3,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2
        });
      }
    },
    animate() {
      this.particles.forEach(particle => {
        particle.y -= particle.speed;
        particle.rotation += particle.rotationSpeed;
        
        if (particle.y < -10) {
          particle.y = 110;
          particle.x = Math.random() * 100;
        }
      });
      
      this.animationFrameId = requestAnimationFrame(this.animate);
    },
    getParticleStyle(particle) {
      return {
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        fontSize: `${particle.size}px`,
        opacity: particle.opacity,
        transform: `rotate(${particle.rotation}deg)`
      };
    }
  }
};
</script>

<style scoped>
.particle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 0 5px rgba(252, 93, 127, 0.3));
}

@media (prefers-reduced-motion: reduce) {
  .particle {
    animation: none !important;
    transition: none !important;
  }
}
</style>