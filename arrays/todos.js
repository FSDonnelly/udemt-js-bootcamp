const todos = ['feed the dog', 'read a book', 'code an app', 'eat food', 'go to sleep']

todos.splice(2, 1)
todos.push('Buy coffee')
todos.shift()

console.log(`You have ${todos.length} todos`)
todos.forEach(function (todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})


for (let i = 0; i < todos.length; i++) {
     const num = i + 1
     const todo = todos[i]
    console.log(`${num}. ${todo}`)
}


for (let i = todos.length - 1; i >= 0; i--) {
    const num = i + 1
    const todo = todos[i]
   console.log(`${num}. ${todo}`)
}