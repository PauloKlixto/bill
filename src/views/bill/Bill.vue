<template>
  <section class="Bill">
    <section class="Bill__billGatesArea">
      <img class="Bill__billPhoto" src="@/assets/images/billGates.png" />
      <h1>Spend Bill Gates' Money</h1>
    </section>
    <BaseBudget :value="maskedValue(value)" />
    <section class="Bill__cardsWrapper">
      <div class="Bill__cards" v-for="item in products" :key="item.id">
        <img :src="productImage(item.image)" class="Bill__cardsImage" />
        <h2 class="Bill__cardsTitle">{{ item.name }}</h2>
        <span class="Bill__cardsValue">{{ maskedValue(item.value) }}</span>
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
    <section class="Bill__resume" v-show="filteredProducts.length">
      <h2>Your Shopping Spree</h2>
      <ul class="Bill__resumeList">
        <li v-for="item in filteredProducts" :key="`resume${item.id}`">
          <img :src="productImage(item.image)" />
          <span>{{ item.name }} x {{ form[item.model] }}</span>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import Mask from '@/plugins/mask/Mask'
import products from './assets/products'
import { BaseButton, BaseBudget } from '@/components/atoms'
import { mapState, mapActions } from 'vuex'

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
      }
    }
  },
  computed: {
    ...mapState({
      products: state => state.products.products,
      billBudget: state => state.products.billBudget,
      value: state => state.products.value
    }),

    filteredProducts() {
      return this.products.filter(item => this.form[item.model] !== 0)
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
      fetchBudget: 'products/fetchBudget',
      onPutValue: 'products/onPutValue'
    }),

    //load
    async loadData() {
      this.fetchProducts(products)
      this.fetchBudget(90000000000)
    },

    //Masked values
    maskedValue(value) {
      return Mask.money(value)
    },
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
      this.form[item]--
      this.changeValue(item)
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
      this.onPutValue(this.inputsSum())
    }
  }
}
</script>

<style lang="scss" scoped>
.Bill {
  max-width: 950px;
  width: 100vw;
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
    @media (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 620px) {
      grid-template-columns: 1fr;
    }
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
    font-size: 20px;
    color: rgb(46, 204, 113);
    font-weight: bold;
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

  &__resume {
    background-color: $color-white;
    margin: 10px 0;

    h2 {
      text-align: center;
      font-size: 28px;
      color: $color-green;
      font-weight: bold;
      padding: 15px;
    }
  }

  &__resumeList {
    list-style: none;
    margin: 0;
    padding: 30px;
    font-size: 16px;
    font-weight: bold;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    @media (max-width: 520px) {
      grid-template-columns: 1fr;
    }
    li {
      display: flex;
      align-items: center;
    }
    img {
      max-height: 50px;
      max-width: 50px;
      margin-right: 7px;
    }
  }
}
</style>
