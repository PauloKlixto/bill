/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import BaseBudget from './BaseBudget'

describe('BaseBudget', () => {
  const wrapper = shallowMount(BaseBudget)

  test('Componente existe', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('Componente não alterado', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
