export const displayDecimal = (price: number) => {
  return Number.parseFloat(price.toString()).toFixed(2)
}
