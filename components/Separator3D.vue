<template>
  <div class="separator-container">
    <div class="separator-content">
      <div class="line line-top"></div>
      <div class="line line-middle"></div>
      <div class="line line-bottom"></div>
      <div class="hexagon-container">
        <div class="hexagon">
          <div class="hexagon-inner"></div>
        </div>
      </div>
      <div class="circuit-lines">
        <div class="circuit-line"></div>
        <div class="circuit-line"></div>
        <div class="circuit-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Separator3D'
}
</script>

<style scoped>
.separator-container {
  position: relative;
  height: 120px;
  width: 100%;
  margin: 40px 0;
  perspective: 1000px;
}

.separator-content {
  position: relative;
  height: 100%;
  transform-style: preserve-3d;
  animation: separatorFloat 6s ease-in-out infinite;
}

.line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(252, 93, 127, 0.2),
    #FC5D7F,
    #21DEEA,
    rgba(33, 222, 234, 0.2),
    transparent
  );
  box-shadow: 0 0 20px rgba(252, 93, 127, 0.5);
}

.line-top {
  top: 0;
  transform: translateZ(20px);
}

.line-middle {
  top: 50%;
  transform: translateY(-50%);
}

.line-bottom {
  bottom: 0;
  transform: translateZ(-20px);
}

.hexagon-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  perspective: 1000px;
  animation: hexagonRotate 4s linear infinite;
}

.hexagon {
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.7);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  position: relative;
  transform-style: preserve-3d;
  border: 2px solid #FC5D7F;
  box-shadow: 0 0 20px rgba(252, 93, 127, 0.5);
}

.hexagon-inner {
  position: absolute;
  inset: 5px;
  background: rgba(33, 222, 234, 0.1);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  border: 1px solid #21DEEA;
  box-shadow: 0 0 15px rgba(33, 222, 234, 0.5);
}

.circuit-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.circuit-line {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, #21DEEA, transparent);
  opacity: 0.3;
  animation: circuitPulse 2s ease-in-out infinite;
}

.circuit-line:nth-child(1) {
  width: 30%;
  top: 30%;
  left: 0;
  animation-delay: 0s;
}

.circuit-line:nth-child(2) {
  width: 40%;
  top: 50%;
  right: 0;
  animation-delay: 0.5s;
}

.circuit-line:nth-child(3) {
  width: 25%;
  bottom: 30%;
  left: 0;
  animation-delay: 1s;
}

@keyframes separatorFloat {
  0%, 100% {
    transform: translateY(-5px) rotateX(5deg);
  }
  50% {
    transform: translateY(5px) rotateX(-5deg);
  }
}

@keyframes hexagonRotate {
  from {
    transform: translate(-50%, -50%) rotateY(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotateY(360deg);
  }
}

@keyframes circuitPulse {
  0%, 100% {
    opacity: 0.3;
    transform: scaleX(1);
  }
  50% {
    opacity: 0.6;
    transform: scaleX(1.1);
  }
}

@media (max-width: 768px) {
  .separator-container {
    height: 80px;
    margin: 30px 0;
  }

  .hexagon {
    width: 40px;
    height: 40px;
  }
}
</style>