const readline = require('readline-sync')
let input = Number(readline.question('Height: '))
let bounces = 0

while (input >= 0.1) {

    input = (input * (3 / 4)).toFixed(2)

    console.log(`Bouncing: ${input} units`)
    bounces++

}

console.log(`Number of bounces: ${bounces}`)

