<template>
  <div>
    <header>
      <div class="title">
        <img src="/punk_domus.svg" alt="">
        <h1>Punk Domus</h1>
      </div>

      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">Sobre</NuxtLink>
      </nav>
    </header>
    <div style="height: 2px; background-image: linear-gradient(to right, rgb(255, 92, 128), #21DEEA);"></div>
  </div>
</template>

<script>
export default {}
</script>


<style>
header {
  padding: 15px 30px;
  background-color: #080e1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

header .title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  align-content: center;
  flex-direction: row;
}

nav {
  display: flex;
  align-items: center;
  margin: 0 -15px;
}

nav a {
  display: block;
  margin: 0 15px;
  font-size: 1.4rem;
}
</style>
