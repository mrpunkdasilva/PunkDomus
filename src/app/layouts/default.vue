<template>
  <Container tag="div">
    <SkipLink />
    <HeaderMain/>
    <Container tag="main" id="main-content" tabindex="-1">
      <Nuxt/>
    </Container>
    <FooterMain/>
  </Container>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style>
@import '~/shared/styles/global.css';
</style>
