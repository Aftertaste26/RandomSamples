let readline = require('readline-sync')
let string = readline.question('')
let length = Number(readline.question(''))
let padding = readline.question('')
let print = ''

//add padding every loop
for (let index = string.length; index < length; index++) {
    print += padding
}

//padding will be added to the left side of the string
console.log(`${print}${string}`)