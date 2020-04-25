import maskFilters from './maskFilters.js'

describe('Mask Filters', () => {
  test('No Special Characters Filter', () => {
    expect(maskFilters.noSpecialCharacters('asd@@@@@@qwe')).toEqual('asdqwe')
    expect(maskFilters.noSpecialCharacters('')).toEqual('')
  })

  test('Set Vue Filters', () => {
    maskFilters.setFilters()
  })
})
