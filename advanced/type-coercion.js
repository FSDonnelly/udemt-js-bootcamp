// Type coercion - a string, number, boolean

console.log(`5` + 5) // concats string results 55
console.log(`5` - 5) // converts string to number result is 0
console.log(`5` == 5) // == does not compare type result here is true (never used)
console.log(`5` === 5) // === strict equality checks value and type result here is false

const value = true + 12
const type = typeof value
console.log(type)
console.log(value)