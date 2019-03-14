// Primitive value string, number, boolean, null, undefined

// Object myObject --> Object.prototype --> null
const myObject = new Object({
    name: `The War of Art`
})

Object.prototype.someNewMethod = () => `This is the new function`

// hasOwnProperty
console.log(myObject.someNewMethod(`hasOwnProperty`))
console.log(myObject)

// Array myArray --> Array.prototype --> Object.prototype --> null

const team = [`Luke`, `Han`]
console.log(team.hasOwnProperty(`filter`))


// Function --> Function.prototype --> Object.prototype --> null

const getScore = () => 1
console.log(getScore)

// Object wrapper on strings, number, boolean
const product = `Computer`
console.log(product.split())

const otherProduct = new String(`Phone`)
console.log(otherProduct)