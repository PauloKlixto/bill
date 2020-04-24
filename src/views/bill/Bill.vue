<template>
  <main class="Bill">
    <h1>Teste {{ value }}</h1>
    <div class="Bill__cards" v-for="item in products" :key="item.id">
      <img :src="productImage(item.image)" />
      <h2>{{ item.name }}</h2>
      <span>{{ item.value }}</span>
      <BaseButton label="Sell" @click="prependValue(item.model)" />
      <input
        v-model="form[item.model]"
        @input="changeValue(item.model, $event)"
      />
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

    selectedItem(item) {
      return this.products.filter(product => product.model === item)[0]
    },

    //Buy Operation
    appendValue(item) {
      this.form[item]++
      this.changeValue(item)
    },

    //Sell Opeation
    prependValue(item) {
      if (this.form[item] > 0) {
        this.form[item]--
        this.changeValue(item)
      }
    },

    //Input Operation
    formNumber(i) {
      return Number(this.form[i])
    },

    isItemWithLimit(item, i) {
      if (item.hasQuantityLimit && this.formNumber(i) > item.maxQuantity)
        this.form[item] = item.maxQuantity
      this.putValue()
    },

    deleteOperation(i, event) {
      if (!!event.inputType && event.inputType === 'deleteContentBackward') {
        this.form[i] = Math.floor(this.form[i] / 10)
        return this.putValue()
      }
    },

    operatorWhenIsBiggerThanValue(item, i) {
      this.form[i] = 0
      this.form[i] = Math.trunc(this.inputsSum() / item.value)
      this.isItemWithLimit(item, i)
    },

    //Update Value
    changeValue(i, event = {}) {
      let sItem = this.selectedItem(i)
      if (this.form[i] === '') this.form[i] = 0

      //Delete Operation
      this.deleteOperation(i, event)

      //Operator is bigger than value
      return sItem.value * this.formNumber(i) > this.value
        ? this.operatorWhenIsBiggerThanValue(sItem, i)
        : this.isItemWithLimit(sItem, i)
    },

    inputsSum() {
      let reducedForm = Object.keys(this.form).reduce((arr, key) => {
        return arr + this.formNumber(key) * this.selectedItem(key).value
      }, 0)
      return this.billBudget - reducedForm
    },

    putValue() {
      this.value = this.inputsSum()
    }
  }
}
</script>

<style lang="scss" scoped>
.Bill {
  display: flex;
  flex-flow: wrap;
  &__cards {
  }
}
</style>
