const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, Eating better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// console.log(notes.pop())// removes last item if none specified
// notes.push('My new note') // adds to end of array

// console.log(notes.shift())// removes first item
// console.log(notes.unshift('My first note'))// adds new item to first on the list

// notes[2] = 'This is now the new note 3'

// notes.forEach(function (item, index) {
//     console.log(item)
//     console.log(index)
// })

console.log(notes.length)
console.log(notes)


let someObject = {}
let otherObject = someObject
console.log(someObject === otherObject)
const index = notes.findIndex(function (note, index){
    console.log(note)
    return note.title === 'Habbits to work on'
})
console.log(index)

// Counting.... 
// for (let i = 0; i <= 2; i++) {
//     console.log(i)
// }

// for (let i = 0; i < notes.length; i++) {
//     console.log(notes[i])
// }


// for (let i = notes.length - 1; i >= 0; i--) {
//     console.log(notes[i])
// }