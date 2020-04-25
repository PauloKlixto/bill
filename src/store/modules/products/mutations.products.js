export default {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
  SET_BUDGET(state, payload) {
    state.billBudget = payload
  },
  SET_VALUE(state, payload) {
    state.value = payload
  }
}
