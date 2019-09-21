let readline = require('readline-sync')
let input = Number(readline.question()).toString()
let output = 1

for (let index = 1; index < input.length; index++) {

    if (input[index] === '1') {

        output = (output * 2) + 1

    } else {

        output *= 2

    }

}

console.log(output)