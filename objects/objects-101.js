let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge Area

let me = {
    name: 'Frank',
    age:38,
    location: 'San Diego'
}

console.log(`${me.name} is ${me.age} years old and lives in ${me.location}`)

me.age = me.age + 1

console.log(`${me.name} is ${me.age} years old and lives in ${me.location}`)