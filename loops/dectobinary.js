let readline = require('readline-sync')
let input = Number(readline.question())
let output = ''

for (let index = input; index > 0; index = Math.floor(index / 2)) {
    output = input % 2 + output
    input = Math.floor(input / 2)
    console.log(input)
}

console.log(output)