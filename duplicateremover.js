let readline = require('readline-sync')
let array = []

do {
    input = readline.question('hi, input something: ')

    if (input === '!END') {
        break
    }

    let match = false

    for (let index = 0; index < array.length; index++) {

        if (input.toUpperCase() == array[index].toUpperCase()) {
            match = true
        }

    }

    if (!match) {
        array.push(input)
    }

} while (input !== '!END')

for (let index = 0; index < array.length; index++) {
    console.log(array[index])
}