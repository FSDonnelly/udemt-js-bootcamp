// function - input, code, output

let greetUser = function () {
    console.log(`Welcome user!`)
}

greetUser()

let square = function (num) {
    let result = num * num
    return console.log(result)
}
 
square(3) // logs 9 
square(10) // logs 100

// Challenge area

// convertFarenheitToCelsius
let convertFarenheitToCelsius = function (farenheit) {
    let celsius = (farenheit - 32) * (5/9);
    return console.log(celsius) // Print the converted values
}
// Call a couple of times (32 -> 0) (68 -> 20)
convertFarenheitToCelsius(32)
convertFarenheitToCelsius(68)

