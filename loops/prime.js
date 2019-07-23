let readline = require("readline-sync")
let Input = Number(readline.question("Prime check: "))
let check = Input
let divisible_number = 0

// this counts the number of divisible numbers by the input value..
while (check !== 0) {

    if ((Input % check) === 0) {
        divisible_number++
    }
    check--
}
  
/*
if there are more than or less than two divisible number 
then the input value is not a prime number..
*/

if (divisible_number > 2 || divisible_number === 1) {
    console.log('Not prime')
} else {
    console.log('Prime')
}
