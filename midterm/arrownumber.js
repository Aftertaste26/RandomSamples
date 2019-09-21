let readline = require('readline-sync')
let input = Number(readline.question('input: '))
let inverse = ''

for (let index = 0; index <= input; index++) {



    for (let index2 = 0; index2 <= index; index2++) {
        if (index2 == 0) {
            process.stdout.write(`*`)
        } else {
            process.stdout.write(`${index2}`)
        }
    }

    let num = index - 1

    if (num == -1) {
        process.stdout.write('')
    } else if (num == 0) {

        inverse = ''

    } else {

        inverse = num + inverse
        process.stdout.write(inverse)

    }
    if (index > 0) {
        process.stdout.write('*')
    }
    process.stdout.write('\n')

}

for (let index = input-1; index >= 0; index--) {

    for (let index2 = 0; index2 <= index; index2++) {
        if (index2 == 0) {
            process.stdout.write(`*`)
        } else {
            process.stdout.write(`${index2}`)
        }
    }

    for (let index2 = index - 1; index2 > 0; index2--) {

        process.stdout.write(`${index2}`)

    }
    if (index > 0) {
        process.stdout.write('*')
    }



    process.stdout.write('\n')

} 