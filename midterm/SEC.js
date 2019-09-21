let readline = require('readline-sync')
let input = Number(readline.question(''))
let number = 0



for (let index = 1; index <= input; index++) {

    for (let index2 = 0; index2 < index; index2++) {

        if (index2 == index - 1) {
            number = input - index2
        }
        process.stdout.write(`${input - index2}`)

    }


    for (let index2 = 0; index2 < input - index; index2++) {

        process.stdout.write(`${number}`)

    }

    for (let index2 = 0; index2 < input - index; index2++) {


        process.stdout.write(`${number}`)

    }

    for (let index2 = index-1; index2 > 0; index2--) {

        process.stdout.write(`${input - index2 + 1}`)

    }

    process.stdout.write('\n')

}


for (let index = input - 1; index > 0; index--) {

    for (let index2 = 0; index2 < index; index2++) {

        if (index2 == index - 1) {
            number = input - index2
        }
        process.stdout.write(`${input - index2}`)

    }

    for (let index2 = 0; index2 < input - index; index2++) {

        process.stdout.write(`${number}`)

    }

    for (let index2 = 1; index2 < input - index; index2++) {

        process.stdout.write(`${number}`)

    }
    
    for (let index2 = index; index2 > 0; index2--) {

        process.stdout.write(`${input - index2 + 1}`)

    }

    process.stdout.write('\n')

}




