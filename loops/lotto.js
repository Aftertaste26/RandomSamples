let readline = require('readline-sync')
let possible_Numbers = Number(readline.question('Possible Numbers: '))
let num_Of_num = Number(readline.question('Qty of Chosen Numbers: '))

//print computed value
console.log(`1 in ${combination(possible_Numbers, num_Of_num)}`)

function combination(n, r) {
    return Math.round(factorial(n) / (factorial(r) * factorial(n - r)))
}

function factorial(number) {
    // this loop multiplies all the preceeding number of the assigned value in the parameter 
    for (let multiplier = number - 1; multiplier > 0; multiplier--) {
        number *= multiplier
    }
    //Value is "returned" back to the "caller"
    return number
}
