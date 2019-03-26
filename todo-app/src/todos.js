import uuidv4 from 'uuid/v4'

// Setup the empty todos array
let todos = []

// loadTodos
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        todos = []
    }
}

// saveTodos
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// getTodos
const getTodos = () => todos

// createTodo
const createTodo = (text) => {
    const id = uuidv4()
   
    if (text.length > 0) {
        todos.push({
            id,
            text,
            completed: false
        })
        saveTodos()
    }
}

// removeTodo
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

// toggleTodo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
        saveTodos()
    }
}

loadTodos()
// Make sure to call loadTodos and setup the exports
export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo }