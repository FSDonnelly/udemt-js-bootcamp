const todos = ['feed the dog', 'read a book', 'code an app', 'eat food', 'go to sleep']

todos.splice(2, 1)
todos.push('Buy coffee')
todos.shift()

console.log(`You have ${todos.length} todos`)
console.log(todos)
