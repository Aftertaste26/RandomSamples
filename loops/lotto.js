let readline = require('readline-sync')

let possible_Numbers = Number(readline.question('Possible Numbers: '))
let num_Of_num = Number(readline.question('Qty: '))
let n_factorial = possible_Numbers
let r_factorial = num_Of_num
let difference_factorial = possible_Numbers - num_Of_num

for (let index = n_factorial - 1; index > 0; index--) {
    n_factorial *= index
}

for (let index = r_factorial - 1; index > 0; index--) {
    r_factorial *= index
}

for (let index = difference_factorial - 1; index > 0; index--) {
    difference_factorial *= index
}

let combination = Math.round(n_factorial / (r_factorial * difference_factorial))

console.log(`1 in ${combination}`)