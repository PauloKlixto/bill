/* eslint-disable no-undef */
import mutations from './mutations.products'
// import getters from './getters.products'
import actions from './actions.products'
import mockProducts from '@/views/bill/assets/products'

let state

const commit = jest.fn()

beforeEach(() => {
  state = {
    products: [],
    billBudget: 0,
    value: 0
  }
})

describe('Mutations', () => {
  test('SET_PRODUCTS', () => {
    mutations.SET_PRODUCTS(state, mockProducts)
    expect(state.products).toEqual(mockProducts)
  })
  test('SET_BUDGET', () => {
    mutations.SET_BUDGET(state, 98749)
    expect(state.billBudget).toEqual(98749)
  })
  test('SET_VALUE', () => {
    mutations.SET_VALUE(state, 34758875)
    expect(state.value).toEqual(34758875)
  })
})

describe('Getters', () => {})

describe('Actions', () => {
  test('fetchProducts', async () => {
    await actions.fetchProducts({ commit }, mockProducts)
    expect(commit).toHaveBeenCalledWith('SET_PRODUCTS', mockProducts)
  })

  test('fetchBudget', async () => {
    await actions.fetchBudget({ commit }, 45785394)
    expect(commit).toHaveBeenCalledWith('SET_BUDGET', 45785394)
    expect(commit).toHaveBeenCalledWith('SET_VALUE', 45785394)
  })

  test('onPutValue', async () => {
    await actions.onPutValue({ commit }, 539857)
    expect(commit).toHaveBeenCalledWith('SET_VALUE', 539857)
  })
})
