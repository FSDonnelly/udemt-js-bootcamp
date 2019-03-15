// HTTP (Hyper Text Transfer Protocol)
// Request - What we ant to do
// Response - What was actually done

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