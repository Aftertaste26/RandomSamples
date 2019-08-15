let readline = require('readline-sync')

let string = readline.question('')
let length = Number(readline.question(''))
let padding = readline.question('')
let print = ''

for (let index = string.length; index < length; index++) {
    print += padding
}

console.log(`${print}${string}`)