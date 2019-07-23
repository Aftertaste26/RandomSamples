let readline = require('readline-sync');            // important 
let x1 = Number(readline.question("Input x1: "));   // Input x sub 1
let y1 = Number(readline.question("Input y1: "));   // Input y sub 1
let x2 = Number(readline.question("Input x2: "));   // Input x sub 2
let y2 = Number(readline.question("Input y2: "));   // Input y sub 2
let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)); //getting the distance using distance formula

// ouput = distance of the archer to the penguin
console.log(distance);
