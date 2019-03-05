const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())// removes last item if none specified
// notes.push('My new note') // adds to end of array

// console.log(notes.shift())// removes first item
// console.log(notes.unshift('My first note'))// adds new item to first on the list

notes[2] = 'This is now the new note 3'

notes.forEach(function (item, index) {
    console.log(item)
    console.log(index)
})

console.log(notes.length)
console.log(notes)

// Counting.... 
for (let i = 0; i <= 2; i++) {
    console.log(i)
}

for (let i = 0; i < notes.length; i++) {
    console.log(notes[i])
}


for (let i = notes.length - 1; i >= 0; i--) {
    console.log(notes[i])
}