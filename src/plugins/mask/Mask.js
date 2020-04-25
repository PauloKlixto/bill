export default {
  money(value) {
    let result
    value = String(value)
    value = value.replace(/\D/g, '')
    if (value.length > 3) {
      if (value.length % 3 === 2) {
        value = value.replace(/^(\d{2})(\d)/, '$1,$2')
        value = value.replace(/^(\d{2}),(\d{3})(\d)/, '$1,$2,$3')
        value = value.replace(/^(\d{2}),(\d{3}),(\d{3})(\d)/, '$1,$2,$3,$4')
      } else if (value.length % 3 === 1) {
        value = value.replace(/^(\d{1})(\d)/, '$1,$2')
        value = value.replace(/^(\d{1}),(\d{3})(\d)/, '$1,$2,$3')
        value = value.replace(/^(\d{1}),(\d{3}),(\d{3})(\d)/, '$1,$2,$3,$4')
      } else {
        value = value.replace(/^(\d{3})(\d)/, '$1,$2')
        value = value.replace(/^(\d{3}),(\d{3})(\d)/, '$1,$2,$3')
        value = value.replace(/^(\d{3}),(\d{3}),(\d{3})(\d)/, '$1,$2,$3,$4')
      }
    }
    result = value.length === 0 ? value : '$ ' + value
    return result
  }
}
