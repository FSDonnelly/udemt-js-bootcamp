// Destructuring Object

const todo = {
    id: 'oifasdfgfnshli',
    text:'Pay the bills',
    completed: false
}

// const text = todo.text
// const completed = todo.completed

const { text:todoText, completed, details = 'No details provided', ...others } = todo

console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)

// Destructuring Array

const age = [65, 0, 13, 21, 69, 85, 26]

const [ firstAge, secondAge, , lastAge = 123, ...otherAges ] = age

console.log(firstAge)
console.log(secondAge)
console.log(lastAge)
console.log(otherAges)