<template>
  <div>
    <UiSkipLink />
    <HeaderMain/>
    <main id="main-content" tabindex="-1">
      <Nuxt/>
    </main>
    <FooterMain/>
  </div>
</template>

<script>
export default {
  components: {
    HeaderMain: () => import('~/components/header-main/header-main.vue'),
    FooterMain: () => import('~/components/footer-main/footer-main.vue'),
    UiSkipLink: () => import('~/components/ui/skip-link/skip-link.vue')
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-body);
  color: var(--color-text);
}

body {
  overflow-x: hidden;
  width: 100%;
  position: relative;
}

#__nuxt,
#__layout {
  overflow-x: hidden;
  width: 100%;
  position: relative;
}

::selection {
  background: rgba(33, 222, 234, 0.3);
  color: var(--color-secondary);
  text-shadow: 0 0 8px rgba(252, 93, 127, 0.8);
}

::-moz-selection {
  background: rgba(33, 222, 234, 0.3);
  color: var(--color-secondary);
  text-shadow: 0 0 8px rgba(252, 93, 127, 0.8);
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg-dark);
  border: 1px solid #333;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, var(--color-secondary), var(--color-primary));
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(33, 222, 234, 0.5);
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
}

* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-secondary) var(--color-bg-dark);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--color-primary);
  font-family: var(--font-heading);
}

h3, h4, h5, h6 {
  font-family: var(--font-body);
  font-weight: 600;
}

body {
  background-color: var(--color-bg-dark);
}

a {
  text-decoration: none;
  color: var(--color-secondary);
  font-family: var(--font-heading);
}

p {
  margin-bottom: 15px;
  font-family: var(--font-body);
  font-weight: 400;
  font-style: normal;
}

p:last-of-type {
  margin-bottom: 0px;
}

:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}
</style>
