// 1. Can't define a variable more than once

// let petName = `Pepper`;
// let petName = `Hal`;

// console.log(petName);  // shows error because js doesn't allow 

// instead you would reassign value like this...

let petName = `Pepper`;
petName = `Spot`;

console.log(petName); // log will show Spot

// 2. There are rules related to variables names
// - variable names must start with a letter or $ or _
// - variable names CANNOT use symbols with exception to $ and _

let test = 2;
let result = 3 + 4

// 3. Variable names CANNOT be reseved keywords (ex. let, const, var ...)