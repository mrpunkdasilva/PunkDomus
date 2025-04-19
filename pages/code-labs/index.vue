<template>
  <main class="code-labs-page">
    <header class="page-header">
      <h1>Code Labs</h1>
      <p class="section-description">
        Laboratórios práticos de código com exemplos e implementações hands-on
      </p>
    </header>
  </main>
</template>

<script>
export default {
  name: 'CodeLabs',
  head() {
    return {
      title: 'Code Labs - PunkDomus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Laboratórios práticos de código com exemplos e implementações hands-on'
        }
      ]
    }
  }
}
</script>