let name = '   Frank Donnelly   '

// Length property
console.log(name.length)

// Convert to Upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method 
let password = 'abc123d098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge area

let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
        return true
    } else {
        return false
    }
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%'))
console.log(isValidPassword('asdfpasdfgfdpassword'))