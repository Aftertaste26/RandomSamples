const readline = require('readline-sync')
let input = Number(readline.question('Height: '))
let output = 0
let bounces = 0

if (input > 0) {

    do {

        if (bounces < (input / 2)) {
            if ((input * (3 / 4) * 1000) % 10 > 5) {
                input = output = Math.ceil(input * (3 / 4) * 100) / 100
            } else {
                input = output = Math.floor(input * (3 / 4) * 100) / 100
            }
            console.log(`Bouncing: ${output.toFixed(2)} units`)
        } else {

            input = output = (input * (3 / 4)).toFixed(2)
            console.log(`Bouncing: ${output} units`)

        }

        
        bounces++

    } while (output >= 0.1);

}
console.log(`Number of bounces: ${bounces}`)

