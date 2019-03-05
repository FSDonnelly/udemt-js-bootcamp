const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes.pop())// removes last item if none specified
notes.push('My new note') // adds to end of array

console.log(notes.shift())// removes first item
console.log(notes.unshift('My first note'))// adds new item to first on the list

console.log(notes.length)
console.log(notes)