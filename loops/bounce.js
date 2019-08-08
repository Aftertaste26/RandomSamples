const readline = require('readline-sync')
let input = Number(readline.question('Height: '))
let output = 0
let bounces = 0

if (input > 0) {

    do {
        
        console.log(input * (3 / 4))
        input = output = ((input * (3 / 4)).toFixed(2))
        console.log(`Bouncing: ${output} units`)
        bounces++

    } while (output > 0.1);
    console.log(`Number of bounces: ${bounces}`)
}


