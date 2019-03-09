let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()

    notes.push({
        id: id,
        title: '',
        body: ''
    })
    savedNotes(notes)
    location.assign(`/edit.html#${id}`)
})


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
       renderNotes(notes, filters)
    }
})
// Unix epoch - January 1st 1970 00:00:00

const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of the month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

const dateOne = new Date('March 1 2020 12:00:00')
const dateTwo = new Date()
const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()

if (dateOneTimestamp < dateTwoTimestamp) {
    console.log(dateOne.toString())
} else if (dateOneTimestamp > dateTwoTimestamp) {
    console.log(dateTwo.toString())
}

// const user = {
//     name: 'Frank',
//     age: 38
// }

// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`)
// localStorage.setItem('location', 'San Diego')
// console.log(localStorage.getItem('location'))
// localStorage.removeItem('location')
// localStorage.clear()