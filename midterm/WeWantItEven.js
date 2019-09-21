let readline = require('readline-sync')
let input = readline.question('input number: ')
let inverse = ''

for (let index = 1; index <= input; index++) {

    for (let index2 = 1; index2 <= index; index2++) {

        process.stdout.write(`${2 * index2}`)

    }

    let product = (2 * (index - 1))

    if (product == 0) {

        inverse = ''

    } else {

        inverse = product + inverse
        process.stdout.write(inverse)

    }

    process.stdout.write('\n')

} 