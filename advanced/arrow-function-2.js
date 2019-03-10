// Arrow functions DON'T bind (this) or (arguments)
// Arrow functions do come with advanced shorthand syntax


const add = (a, b) => {
    return arguments[0] + arguments[1] // arguments not recognized in arrow functions
}
console.log(add(11, 22, 33, 44))

const car = {
    color: 'red',
    getSummary() {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())