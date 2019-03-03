
// Global Scope (convertFarenheitToCelsius)
    // Local Scope (farenheit, celsius)
        // Local Scope (isFreezing)

let convertFarenheitToCelsius = function (farenheit) {
    let celsius = (farenheit - 32) * (5/9);

    if (celsius <= 0) {
        let isFreezing = true
    }

    return console.log(celsius) // Print the converted values
}
// Call a couple of times (32 -> 0) (68 -> 20)
convertFarenheitToCelsius(32)
convertFarenheitToCelsius(68)