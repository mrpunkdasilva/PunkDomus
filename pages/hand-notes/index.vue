<template>
  <main class="hand-notes-page">
    <header class="page-header">
      <h1>Hand Notes</h1>
      <p class="section-description">
        Anotações e insights sobre desenvolvimento e tecnologia
      </p>
    </header>
  </main>
</template>

<script>
export default {
  name: 'HandNotes',
  head() {
    return {
      title: 'Hand Notes - PunkDomus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Anotações e insights sobre desenvolvimento e tecnologia'
        }
      ]
    }
  }
}
</script>