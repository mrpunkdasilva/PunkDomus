<template>
  <main class="cheat-sheets-page">
    <header class="page-header">
      <h1>Cheat Sheets</h1>
      <p class="section-description">
        Guias rápidos e referências técnicas para consulta
      </p>
    </header>
  </main>
</template>

<script>
export default {
  name: 'CheatSheets',
  head() {
    return {
      title: 'Cheat Sheets - PunkDomus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Guias rápidos e referências técnicas para consulta'
        }
      ]
    }
  }
}
</script>