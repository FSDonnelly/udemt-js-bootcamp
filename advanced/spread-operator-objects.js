// Spread Operator for Objects
let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 1995
}
let newHouse = {
    basement: true,
    ...house, 
    bedrooms: 3
}

newHouse.yearBuilt = 2015

console.log(house)
console.log(newHouse)

let person = {
    name: 'Frank',
    age: 38
}

let location = {
    city: 'San Diego',
    country: 'USA'
}

let overview = {
    ...person,
    ...location
}

console.log(overview)