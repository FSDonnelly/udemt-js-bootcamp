const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

// puzzleEl.textContent = game1.puzzle
// guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 6)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle(`2`).then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// }) 

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

// Promise Challenge
// getLocation().then((location) => {
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

// getCountry('US').then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })



