<template>
  <div class="skull-container" ref="container"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'CyberSkull',
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      skull: null,
      frameId: null
    }
  },
  mounted() {
    this.initScene();
    this.animate();

    window.addEventListener('resize', this.onWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
    cancelAnimationFrame(this.frameId);
    this.renderer.dispose();
  },
  methods: {
    initScene() {
      // Scene setup
      this.scene = new THREE.Scene();
      
      // Camera setup
      this.camera = new THREE.PerspectiveCamera(
        75,
        this.$refs.container.clientWidth / this.$refs.container.clientHeight,
        0.1,
        1000
      );
      this.camera.position.z = 5;

      // Renderer setup
      this.renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true 
      });
      this.renderer.setSize(
        this.$refs.container.clientWidth,
        this.$refs.container.clientHeight
      );
      this.$refs.container.appendChild(this.renderer.domElement);

      // Lights
      const ambientLight = new THREE.AmbientLight(0x21DEEA, 0.5);
      this.scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xFC5D7F, 1);
      pointLight.position.set(5, 5, 5);
      this.scene.add(pointLight);

      // Create skull geometry
      const geometry = new THREE.IcosahedronGeometry(2, 1);
      const material = new THREE.MeshPhongMaterial({
        color: 0x000000,
        wireframe: true,
        wireframeLinewidth: 2,
        emissive: 0x21DEEA,
        emissiveIntensity: 0.2,
      });

      this.skull = new THREE.Mesh(geometry, material);
      this.scene.add(this.skull);

      // Add wireframe effect
      const wireframeGeometry = new THREE.IcosahedronGeometry(2.1, 1);
      const wireframeMaterial = new THREE.MeshPhongMaterial({
        color: 0xFC5D7F,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });

      const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
      this.scene.add(wireframe);

      // Group both meshes
      this.skullGroup = new THREE.Group();
      this.skullGroup.add(this.skull);
      this.skullGroup.add(wireframe);
      this.scene.add(this.skullGroup);
    },
    animate() {
      this.frameId = requestAnimationFrame(this.animate);

      if (this.skullGroup) {
        this.skullGroup.rotation.x += 0.005;
        this.skullGroup.rotation.y += 0.005;
      }

      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {
      this.camera.aspect = this.$refs.container.clientWidth / this.$refs.container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(
        this.$refs.container.clientWidth,
        this.$refs.container.clientHeight
      );
    }
  }
}
</script>

<style scoped>
.skull-container {
  width: 300px;
  height: 300px;
  position: relative;
}
</style>