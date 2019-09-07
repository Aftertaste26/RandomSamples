let readline = require('readline-sync')
let possible_Numbers = Number(readline.question('Possible Numbers: '))
let num_Of_num = Number(readline.question('Qty of Chosen Numbers: '))
let combination = Math.round(factorial(possible_Numbers) / (factorial(num_Of_num) * factorial(possible_Numbers - num_Of_num)))

//print computed value
console.log(`1 in ${combination}`)

function factorial(number) {

    // this loop multiplies all the preceeding number of the assigned value in the parameter 
    for (let multiplier = number - 1; multiplier > 0; multiplier--) {
        number *= multiplier
    }

    //Value is "returned" back to the "caller"
    return number
}

console.log(number)