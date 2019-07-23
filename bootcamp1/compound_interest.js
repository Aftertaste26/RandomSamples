let readline = require('readline-sync');                        // important
let principal = Number(readline.question("Principal: "));       // input value of principal 
let rate = Number(readline.question("Rate: "));                 // input value of rate
let year = Number(readline.question("No. of Years: "));         // input value of years
let compoundInterest = principal*Math.pow(1+ (rate/100),year);  //compound interest formula

// output = compound interest and rounded to the nearest 100th place
console.log(compoundInterest.toFixed(2));                   
