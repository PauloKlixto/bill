<template>
  <section class="TheHeader">
    <header class="TheHeader__topBar">
      <p>Neal.fun</p>
    </header>
    <section class="TheHeader__billGatesArea">
      <img class="TheHeader__billPhoto" src="@/assets/images/billGates.png" />
      <h1>Spend Bill Gates' Money</h1>
    </section>
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
  &__billGatesArea {
    max-width: 950px;
    height: 260px;
    width: 100vw;
    margin: auto;
    background: $color-white;
    display: grid;
    justify-items: center;
    gap: 20px;
    h1 {
      font-size: 32px;
      text-align: center;
    }
  }
  &__billPhoto {
    border-radius: 50%;
    align-self: flex-end;
  }
}
</style>
