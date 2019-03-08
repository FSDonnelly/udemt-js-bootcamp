const notes = getSavedNotes()

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