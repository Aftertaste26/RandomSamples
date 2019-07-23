let readline = require('readline-sync');                    // important
let input = Number(readline.question("Input Seconds: "));   // input in seconds
let minutes = Math.trunc(input/60);                         // convert seconds to minute just getting the whole number
let seconds = input%60;                                     // getting the remainder as seconds

// output = minutes, seconds...
console.log(minutes+ "m " + seconds + "s " ); 
