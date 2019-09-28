let readline = require('readline-sync')
let array = []
let first_input = readline.question().split(' ')
let Y = Number(first_input[1])
let X = Number(first_input[0])
let error = false

for (let index = 0; index < Y; index++) {

    let input = readline.question().split(' ')

    if (input.length !== X) {
        error = true
    }
    array.push(input)

}

if (!error) {
    for (let row = 0; row < X; row++) {

        for (let column = Y - 1; column >= 0; column--) {

            process.stdout.write(`${array[column][row]} `)

        }
        process.stdout.write('\n')
    }
}else{

console.log('Malformed array!')

}

