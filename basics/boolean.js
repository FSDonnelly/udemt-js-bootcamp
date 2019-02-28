
// === is the equality operator
// !== is the not equal operator
// < is the less than operator
// > is the greater than operator
// >= is greater than or equal to 
// <= is less than or equal to

let temp = 80;
// let isFreezing = temp <= 32;

if (temp <= 32) {
    console.log(`It is freezing outside!`)
};

if ( temp >= 110) {
    console.log(`It is way to hot outside!`)
} else {
    console.log(`It is not that hot outside.`)
}

// Challenge area

// create age set to your age
// calculate is child - if age is under 7
// calculate is senior - if age is over 65 
// print is child value
// print is senior value

let age = 6;
let isChild = age <= 7;
let isSenior = age >= 65;

console.log(isChild);
console.log(isSenior);

if (isChild) {
    console.log(`You get a child discount`)
}

if (isSenior) {
    console.log(`You get a senior discount`)
}

let isAccountLocked = false;
let userRole = 'admin';

if (isAccountLocked) {
    console.log(`Is account locked`)
} else if (userRole === 'admin') {
    console.log(`Welcome Admin`)
} else {
    console.log(`Welcome`)
}

// Challenge area for else if statement

let tempOutside = 45;

if (temp <= 32) {
    console.log(`It is freezing outside!`)
} else if (temp >= 110) {
    console.log(`It is way to hot outside!`)
} else {
    console.log(`It is pretty nice outside`)
}
