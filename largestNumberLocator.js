let readline = require('readline-sync')

let array = []
let largestNum
let largestNumIndex = 0
let output

do {

    input = readline.question('hi: ')

    if (input !== 'end') {

        if (Number(input) > largestNum || largestNum === undefined) {
            largestNum = input
            output = largestNumIndex
        }

        array.push(Number(input))
    }

    largestNumIndex++
} while (input !== 'end')

console.log(output)