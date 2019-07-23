//important
let readline = require("readline-sync");

//Year Input
let input = Number(readline.question("Enter year: "));
let Remainder = input%4;

//if divisible by 4
if (Remainder == 0){
    console.log("leap Year");
}else {
    console.log("Is not a leap year");
}