let temp = 65;

// Logical AND operator - True if both sides are true. false otherwise

if (temp >= 60 && temp <= 90) {

    console.log(`It is pretty nice out!`)
}

// Logical OR operator - only one side has to be true


else if (temp <= 0 || temp >= 120) {

    console.log(`Do not go outside!`)
}

else {
    console.log(`Do what you want`)
}

// Challenge area

let isGuestOneVegan = false;
let isGuestTwoVegan = true;

// are both guest vegan offer vegan dishes
// at least one guest vegan offer at least one vegan dish
// no vegan guest offer anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log(`offer only vegan dishes`)
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log( `offer at least one vegan dish`)
} else {
    console.log(`offer anything on the menu`)
}