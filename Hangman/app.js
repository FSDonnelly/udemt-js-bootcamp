// HTTP (Hyper Text Transfer Protocol)
// Request - What we ant to do
// Response - What was actually done

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

// Making http request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data =JSON.parse(e.target.responseText)
        console.log(data)
    } else if ( e.target.readyState === 4) {
        console.log(`An error has occured`)
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()

// ChallengeMaking http request

const countryCode = 'BR'
const requestCountry = new XMLHttpRequest()

requestCountry.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data =JSON.parse(e.target.responseText)
        console.log(data)
        const country = data.find((country) => country.alpha2Code === countryCode)
        console.log(country.name)
    } else if ( e.target.readyState === 4) {
        console.log(`An error has occured`)
    }
})

requestCountry.open('GET', 'http://restcountries.eu/rest/v2/all')
requestCountry.send()