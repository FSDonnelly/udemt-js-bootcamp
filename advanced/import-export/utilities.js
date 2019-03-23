// Named Export (as many as you want)

const add = (a, b) => a + b

const name = 'Dave'

// Default Export (only one)

const square = (x) => x * x

export { add, name, square as default }