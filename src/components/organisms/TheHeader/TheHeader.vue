<template>
  <section class="TheHeader">
    <header class="TheHeader__topBar">
      <p>Neal.fun</p>
    </header>
  </section>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style lang="scss" scoped>
.TheHeader {
  margin-bottom: 7.5px;
  &__topBar {
    width: 100vw;
    background-color: $color-white;
    font-size: 30px;
    font-weight: bold;
    padding: 30px 15px;
    margin-bottom: 15px;
    p {
      max-width: 980px;
      width: 100vw;
      margin: auto;
    }
  }
}
</style>
