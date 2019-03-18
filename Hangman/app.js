const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Cat Whiskers', 5)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

getPuzzle(`2`).then((puzzle) => {
    console.log(puzzle)
}).catch((error) => {
    console.log(`Error: ${error}`)
}) 

// getCountry('US').then((country) => {
//     console.log(country.name)
// }, (error) => {
//     console.log(`Error: ${error}`)
// })

// fetch(`http://puzzle.mead.io/puzzle`, {}).then((response) => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error(`Unable to fetch the puzzle data`)
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })


