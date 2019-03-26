// Spread Operator Syntax

const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

const team = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

printTeam(team.name, team.coach, ...team.players)

let cities = ['Barcelona', 'Cape Town', 'Nevis']
cities = ['Atlanta', ...cities, 'Seattle']
console.log(cities)

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