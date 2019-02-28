// Global
    // Local
        // Local
    // Local

let name = 'Frank'

if (true) {
    let name = 'Mike'
    if (true) {
        name = 'Jen'
        console.log(name) // logs Jen
    }
}

if (true) {
    console.log(name) // logs Frank // if no variable declared it logs Jen - (leaked global)
}