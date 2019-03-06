const todos = [{
    text: 'Order cat food',
    completed: false
},{
    text: 'Clean kitchen',
    completed: true
},{
    text: 'Buy food',
    completed: true
},{
    text: 'Do work',
    completed: false
},{
    text: 'Exercise',
    completed: true
}]

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsTodo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsTodo(todos))

// deleteTodo(todos, '!!buy food')
// console.log(todos)
// const todos = ['feed the dog', 'read a book', 'code an app', 'eat food', 'go to sleep']

// todos.splice(2, 1)
// todos.push('Buy coffee')
// todos.shift()

// console.log(`You have ${todos.length} todos`)
// todos.forEach(function (todo, index) {
//     const num = index + 1
//     console.log(`${num}. ${todo}`)
// })


// for (let i = 0; i < todos.length; i++) {
//      const num = i + 1
//      const todo = todos[i]
//     console.log(`${num}. ${todo}`)
// }


// for (let i = todos.length - 1; i >= 0; i--) {
//     const num = i + 1
//     const todo = todos[i]
//    console.log(`${num}. ${todo}`)
// }