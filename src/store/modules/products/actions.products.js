export default {
  fetchProducts({ commit }, payload) {
    commit('SET_PRODUCTS', payload)
  },
  fetchBudget({ commit }, payload) {
    commit('SET_BUDGET', payload)
    commit('SET_VALUE', payload)
  },
  onPutValue({ commit }, payload) {
    commit('SET_VALUE', payload)
  }
}
