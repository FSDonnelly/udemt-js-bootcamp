// Making http request
const getPuzzle = (wordCount, cb) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            cb(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            cb(`An error has taken place`)
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

const getCountry = (countryCode, cb) => {
    const requestCountry = new XMLHttpRequest()

    requestCountry.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            cb(undefined, country)
        } else if (e.target.readyState === 4) {
            cb(`Unable to fetch data`)
        }
    })

    requestCountry.open('GET', 'http://restcountries.eu/rest/v2/all')
    requestCountry.send()
} 