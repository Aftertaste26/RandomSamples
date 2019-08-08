const readline = require('readline-sync')
let healthBar_width = Number(readline.question('bar width: '))
let current_HP = Number(readline.question('current HP: '))
let max_HP = Number(readline.question('Max HP:'))
let print = ''
let ratio = current_HP / max_HP
let number_Of_pipes = Math.floor(ratio * healthBar_width)
let number_of_dashes = healthBar_width - number_Of_pipes

for (let index = 1; index <= number_Of_pipes; index++) {
    print += '|'
}

for (let index = 1; index <= number_of_dashes; index++) {
    print += '-'
}

console.log(`[${print}] ${current_HP}/${max_HP}`)