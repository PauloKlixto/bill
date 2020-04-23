<template>
  <main class="Payment">
    <h1>Teste</h1>
    <div v-for="item in products" :key="item.id">
      <img src="@/assets/images/bigMac.jpg" />
      <h2>Big Mac</h2>
      <span>2</span>
      <button>Sell</button>
      <input />
      <button>Buy</button>
    </div>
  </main>
</template>

<script>
import products from './assets/products'
export default {
  name: 'Bill',
  data() {
    return {
      form: {},
      products
    }
  },
  computed: {

  }
  // methods: {}
}
</script>

<style lang="scss" scoped>
.Payment {
}
</style>
