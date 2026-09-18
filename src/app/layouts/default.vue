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
  name: 'DefaultLayout'
}
</script>

<style>
@import '~/shared/styles/global.css';
</style>
