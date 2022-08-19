export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
})
