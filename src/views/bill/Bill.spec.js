/* eslint-disable no-undef */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import mockProducts from '@/views/bill/assets/products'
import Bill from './Bill'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    products: {
      namespaced: true,
      actions: {
        fetchProducts: jest.fn(),
        fetchBudget: jest.fn(),
        onPutValue: jest.fn()
      },
      state: {
        products: mockProducts,
        billBudget: 100,
        value: 100
      },
      getters: {}
    }
  }
})

describe('Bill', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Bill, { store, localVue })
  })

  test('Componente existe', () => {
    expect(wrapper.exists()).toBe(true)
  })

  describe('Methods', () => {
    const selectedVideoGame = {
      id: '3',
      model: 'videoGame',
      image: 'videoGame',
      name: 'Video Game',
      value: 60,
      hasQuantityLimit: false,
      maxQuantity: 0
    }

    test('Method - appendValue', () => {
      wrapper.setData({
        form: {
          yacht: 9
        }
      })

      wrapper.vm.appendValue('yacht')
    })

    test('Method - prependValue', () => {
      wrapper.setData({
        form: {
          yacht: 9
        }
      })

      wrapper.vm.prependValue('yacht')
    })

    test('Method - deleteOperation', () => {
      wrapper.setData({
        form: {
          barOfGold: 398404505
        }
      })

      let event = {
        inputType: 'deleteContentBackward'
      }

      wrapper.vm.deleteOperation('barOfGold', event)
      expect(wrapper.vm.form['barOfGold']).toBe(39840450)
    })

    test('Method - operatorWhenIsBiggerThanValue', () => {
      wrapper.setData({
        form: {
          videoGame: 2
        }
      })

      wrapper.vm.operatorWhenIsBiggerThanValue(selectedVideoGame, 'videoGame')
      expect(wrapper.vm.form['videoGame']).toBe(1)
    })

    describe('Method - changeValue', () => {
      let mockOperatorWhenIsBiggerThanValue = jest.fn(),
        mockIsItemWithLimit = jest.fn()

      test('When model is empty', () => {
        wrapper.setData({
          form: {
            videoGame: ''
          }
        })

        wrapper.vm.changeValue('videoGame')
        expect(wrapper.vm.form['videoGame']).toBe(0)
      })

      test('When operator is bigger than value', () => {
        wrapper.setMethods({
          operatorWhenIsBiggerThanValue: mockOperatorWhenIsBiggerThanValue
        })

        wrapper.setData({
          form: {
            videoGame: 2
          }
        })

        wrapper.vm.changeValue('videoGame')
        expect(mockOperatorWhenIsBiggerThanValue).toHaveBeenCalledWith(
          selectedVideoGame,
          'videoGame'
        )
      })

      test('When operator is NOT bigger than value', () => {
        wrapper.setMethods({
          isItemWithLimit: mockIsItemWithLimit
        })

        wrapper.setData({
          form: {
            videoGame: 1
          }
        })

        wrapper.vm.changeValue('videoGame')
        expect(mockIsItemWithLimit).toHaveBeenCalledWith(
          selectedVideoGame,
          'videoGame'
        )
      })
    })

    test('Method - putValue', () => {
      wrapper.vm.putValue()
    })
  })

  test('Componente não alterado', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
