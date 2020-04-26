/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import TheHeader from './TheHeader'

describe('TheHeader', () => {
  const wrapper = shallowMount(TheHeader)

  test('Componente existe', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('Componente não alterado', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
