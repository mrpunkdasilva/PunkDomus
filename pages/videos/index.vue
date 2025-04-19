<template>
  <main class="videos-page">
    <header class="page-header">
      <h1>Videos</h1>
      <p class="section-description">
        Conteúdo em vídeo sobre programação e tecnologia
      </p>
    </header>
  </main>
</template>

<script>
export default {
  name: 'Videos',
  head() {
    return {
      title: 'Videos - PunkDomus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Conteúdo em vídeo sobre programação e tecnologia'
        }
      ]
    }
  }
}
</script>