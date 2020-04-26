/* eslint-disable no-undef */
import Mask from './Mask.js'

describe('Mask', () => {
  test('Validates Money mask', () => {
    Mask.money('123')
    Mask.money('1234567')
    Mask.money('')
  })
})
