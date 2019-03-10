const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Frank',
    age: 38
}, {
    name: 'Mike',
    age: 22
}, {
    name: 'Dave',
    age: 30
}]

const under30 = people.filter(function (person) {
    return person.age < 30 
})
console.log(under30)

const overThirty = people.filter((person) => person.age >= 30 )
console.log(overThirty)

const find22 = people.find((person) => person.age === 22)
console.log(find22)