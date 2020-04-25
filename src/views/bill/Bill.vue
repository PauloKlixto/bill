<template>
  <section class="Bill">
    <section class="Bill__billGatesArea">
      <img class="Bill__billPhoto" src="@/assets/images/billGates.png" />
      <h1>Spend Bill Gates' Money</h1>
    </section>
    <BaseBudget :value="value" />
    <section class="Bill__cardsWrapper">
      <div class="Bill__cards" v-for="item in products" :key="item.id">
        <img :src="productImage(item.image)" class="Bill__cardsImage" />
        <h2 class="Bill__cardsTitle">{{ item.name }}</h2>
        <span class="Bill__cardsValue">{{ item.value }}</span>
        <BaseButton
          class="Bill__cardsSell"
          label="Sell"
          @click="prependValue(item.model)"
          color="rgb(245, 59, 87)"
          :disabled="disabledSell(item.model)"
        />
        <input
          class="Bill__cardsInput"
          v-model="form[item.model]"
          @input="changeValue(item.model, $event)"
        />
        <BaseButton
          class="Bill__cardsBuy"
          label="Buy"
          @click="appendValue(item.model)"
          :disabled="disabledBuy(item.model)"
          color="rgb(5, 196, 107"
        />
      </div>
    </section>
  </section>
</template>

<script>
import products from './assets/products'
import { BaseButton, BaseBudget } from '@/components/atoms'

export default {
  name: 'Bill',
  components: { BaseButton, BaseBudget },
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

    disabledBuy(i) {
      let form = this.formNumber(i),
        item = this.selectedItem(i)
      return (
        item.value * form >= this.value ||
        (item.hasQuantityLimit && form >= item.maxQuantity)
      )
    },

    //Sell Opeation
    prependValue(item) {
      if (this.form[item] > 0) {
        this.form[item]--
        this.changeValue(item)
      }
    },
    disabledSell(item) {
      return this.form[item] <= 0
    },

    //Input Operation
    formNumber(i) {
      return Number(this.form[i])
    },

    isItemWithLimit(item, i) {
      if (item.hasQuantityLimit && this.formNumber(i) > item.maxQuantity)
        this.form[i] = item.maxQuantity
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
  width: 950px;
  margin: auto;
  &__billGatesArea {
    height: 260px;
    width: 100%;
    background: $color-white;
    display: grid;
    justify-items: center;
    gap: 20px;
    margin-bottom: 10px;
    h1 {
      font-size: 32px;
      text-align: center;
    }
  }
  &__billPhoto {
    border-radius: 50%;
    align-self: flex-end;
  }
  &__cardsWrapper {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  &__cards {
    background-color: $color-white;
    display: grid;
    grid-template-columns: 5px 65px 1fr 65px 5px;
    grid-template-rows: 10px 1fr 20px 30px 40px 10px;
    align-items: center;
    justify-items: center;
    gap: 10px;
    grid-template-areas:
      '. . . . .'
      '. image image image .'
      '. title title title .'
      '. value value value .'
      '. sell input buy .';
  }
  &__cardsImage {
    grid-area: image;
  }
  &__cardsTitle {
    grid-area: title;
  }
  &__cardsValue {
    grid-area: value;
  }
  &__cardsSell {
    grid-area: sell;
  }
  &__cardsInput {
    grid-area: input;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 3px;
    width: 100%;
  }
  &__cardsBuy {
    grid-area: buy;
  }
}
</style>
