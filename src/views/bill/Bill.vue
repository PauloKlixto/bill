<template>
  <main class="Payment">
    <h1>Teste {{ value }}</h1>
    <div v-for="item in products" :key="item.id">
      <img :src="productImage(item.image)" />
      <h2>{{ item.name }}</h2>
      <span>{{ item.value }}</span>
      <BaseButton label="Sell" @click="prependValue(item.model)" />
      <input v-model="form[item.model]" />
      <BaseButton label="Buy" @click="appendValue(item.model)" />
    </div>
  </main>
</template>

<script>
import products from './assets/products'
import { BaseButton } from '@/components/atoms'

export default {
  name: 'Bill',
  components: { BaseButton },
  data() {
    return {
      form: {
        bigMac: 0,
        cupOfCoffee: 0,
        book: 0,
        videoGame: 0,
        charity: 0,
        headphones: 0,
        airJordans: 0,
        skateboard: 0,
        smartphone: 0,
        gamingConsole: 0,
        bike: 0,
        drone: 0,
        designerHandbag: 0,
        jetski: 0,
        tv: 0,
        diamondRing: 0,
        rolex: 0,
        speedBoat: 0,
        foodTruck: 0,
        tesla: 0,
        monsterTruck: 0,
        helicopter: 0,
        ferrari: 0,
        lamborghini: 0,
        firetruck: 0,
        townhouse: 0,
        bar: 0,
        pizzaShop: 0,
        barOfGold: 0,
        superbowlAd: 0,
        beachHouse: 0,
        yacht: 0,
        f16: 0,
        skyscraper: 0,
        mansion: 0,
        rocket: 0,
        passengerJet: 0,
        monalisa: 0,
        cruiseShip: 0,
        nbaTeam: 0,
        mblTeam: 0,
        nflTeam: 0
      },
      products,
      billBudget: 90000000000,
      value: 90000000000
    }
  },
  methods: {
    //Image
    productImage(image) {
      return require(`@/assets/images/${image}.jpg`)
    },

    //Buy Operation
    verfifyItemLength(item, quantity) {
      return this.form[item] < quantity
    },
    selectedItem(item) {
      return this.products.filter(product => product.model === item)[0]
    },
    maxLengthForItem(item) {
      let selectedItem = this.selectedItem(item)
      return selectedItem.hasQuantityLimit
        ? this.verfifyItemLength(item, selectedItem.maxQuantity)
        : true
    },

    buyOperation(item) {
      return this.value - this.selectedItem(item).value
    },
    isValueIsLessThanZero(item) {
      return this.buyOperation(item) <= 0
    },
    appendValue(item) {
      if (this.maxLengthForItem(item) && !this.isValueIsLessThanZero(item)) {
        this.form[item]++
        this.value = this.buyOperation(item)
      }
    },

    //Sell Operation
    sellOperation(item) {
      return this.value + this.selectedItem(item).value
    },

    prependValue(item) {
      if (this.form[item] > 0) {
        this.form[item]--
        this.value = this.sellOperation(item)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Payment {
}
</style>
