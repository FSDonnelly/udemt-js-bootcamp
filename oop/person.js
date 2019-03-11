const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Frank', 'Donnelly', 38)
me.firstName = 'Steve'
console.log(me)

const person2 = new Person('Clansy', 'Turner', 22)
console.log(person2)