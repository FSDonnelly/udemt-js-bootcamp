const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, Eating better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes, 'eating'))
const note = findNote(notes, 'some other office modification')
console.log(note)
// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function (note, index) { 
//     return note.title === 'Habbits to work on'
// })
// console.log(index)
// console.log(notes.pop())// removes last item if none specified
// notes.push('My new note') // adds to end of array

// console.log(notes.shift())// removes first item
// console.log(notes.unshift('My first note'))// adds new item to first on the list

// notes[2] = 'This is now the new note 3'

// notes.forEach(function (item, index) {
//     console.log(item)
//     console.log(index)
// })




// let someObject = {}
// let otherObject = someObject
// console.log(someObject === otherObject)

// indeOf uses === to find match (not great for objects)
// findIndex allows more specific search
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