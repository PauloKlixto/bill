<template>
  <section class="BaseBudget">
    <p>{{ value }} left</p>
  </section>
</template>

<script>
export default {
  name: 'BaseBudget',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.BaseBudget {
  background-color: $color-green;
  max-width: 950px;
  width: 100vw;
  margin: auto;
  color: $color-white;
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  padding: 30px 0;
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
