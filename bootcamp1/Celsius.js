let readline = require('readline-sync');            // the missing piece of my code ..LOL..
let input = Number(readline.question("Input: "));   // fahrenheit input
let output = (input * 9 / 5) + 32;                  // output

// output of sample test = celsius
console.log(output);