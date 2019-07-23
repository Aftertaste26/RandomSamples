let readline = require('readline-sync');           // don't forget readline-sync
let input = Number(readline.question("Input: "));  // celsius input
let output = (input * 9 / 5) + 32;                 // output

// output of sample test = fahrenhiet
console.log(output);
