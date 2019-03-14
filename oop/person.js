// Prototypal Inheritance
// meyPerson --> Person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft() {
        return `${this.firstName} has ${65 - this.age} years to retirement.`
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    // updateGrade(change) {
    //     this.grade += change
    // }
    getBio() {
        const status = this.grade >= 70 ? `passing` : `failing`
        return `${this.firstName} is ${status} the class.`
    }
}

const me = new Employee('Frank', 'Donnelly', 38, `Jedi`, ['Eating', 'Camping'])
me.fullName = `Luke Skywalker`
console.log(me.getBio())
// me.updateGrade(-20)
console.log(me.getBio())
// me.setName('Luke Skywalker')
// console.log(me.getBio(), me.getYearsLeft())


const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2.getBio())