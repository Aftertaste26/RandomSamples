const readline = require('readline-sync')
let phrase = readline.question('Phrase: ')
let start = Number(readline.question('Start: '))
let end = Number(readline.question('End: '))
let count = start
let print = ''

for (const letters of phrase) {

    if (letters >= 'A' && letters <= 'Z' || letters >= 'a' && letters <= 'z') {

        for (let index = 1; index <= count; index++) {

            print += letters

        }

        if (count === end) {

            count = start

        } else {

            count++

        }

    } else {

        print += letters

    }

}

console.log(print.toUpperCase())
