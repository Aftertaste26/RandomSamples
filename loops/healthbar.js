const readline = require('readline-sync')
let length = Number(readline.question('bar width: '))
let currHP = Number(readline.question('current HP: '))
let maxHP = Number(readline.question('Max HP:'))

let print = ''
let ratio = currHP / maxHP
let number_Of_pipes = Math.floor(ratio * length)
let number_of_dashes = length - number_Of_pipes

for (let index = 1; index <= number_Of_pipes; index++) {
    print += '|'
}

for (let index = 1; index <= number_of_dashes; index++) {
    print += '-'
}

console.log(`[${print}] ${currHP}/${maxHP}`)