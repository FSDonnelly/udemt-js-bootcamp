import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const removeEl = document.querySelector('#remove-note')
const dateEl = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

titleEl.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    dateEl.textContent = generateLastEdited(note.updatedAt)
})

bodyEl.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    dateEl.textContent = generateLastEdited(note.updatedAt)
})

removeEl.addEventListener('click', (e) => {
    const note = notes.find((note) => note.id === id)
    removeNote(note.id)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializeEditPage(noteId)
    }
})

// import { initializeEditPage, generateLastEdited } from './views'
// import { updateNote, removeNote } from './notes'

// const titleEl = document.querySelector('#note-title')
// const bodyEl = document.querySelector('#note-body')
// const removeEl = document.querySelector('#remove-note')
// const dateEl = document.querySelector('#last-edited')
// const noteId = location.hash.substring(1)
// let notes = getSavedNotes()
// let note = notes.find((note) => note.id === noteId)

// if (!note) {
//     location.assign('/index.html')
// }

// titleEl.value = note.title
// bodyEl.value = note.body
// dateEl.textContent = generateLastEdited(note.updatedAt) 

// titleEl.addEventListener('input', (e) => {
//     note.title = e.target.value
//     note.updatedAt = moment().valueOf()
//     dateEl.textContent = generateLastEdited(note.updatedAt) 
//     savedNotes(notes)
// })

// bodyEl.addEventListener('input', (e) => {
//     note.body = e.target.value
//     note.updatedAt = moment().valueOf()
//     dateEl.textContent = generateLastEdited(note.updatedAt) 
//     savedNotes(notes)
// })

// removeEl.addEventListener('click', (e) => {
//    removeNote(note.id)
//    savedNotes(notes)
//    location.assign('/index.html')
// })

// window.addEventListener('storage', (e) => {
//     if (e.key === 'notes') {
//         notes = JSON.parse(e.newValue)
//         note = notes.find((note) => note.id === noteId)
        
//         if (!note) {
//             location.assign('/index.html')
//         }
        
//         titleEl.value = note.title
//         bodyEl.value = note.body
//         dateEl.textContent = generateLastEdited(note.updatedAt) 
//     }
// })