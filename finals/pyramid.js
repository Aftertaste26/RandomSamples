let readline = require('readline-sync')
let x = Number(readline.question(' >: '))

for (let row = 1; row <= x; row++) {

    for (let col = 0; col < x - row; col++) {

        process.stdout.write('.')
    }
    for (let col = 0; col < row; col++) {

        let key = String.fromCharCode(65 + col)
        process.stdout.write(key)
    }
    for (let col = 1; col < row; col++) {

        let key = String.fromCharCode(64 + row - col)
        process.stdout.write(key)
    }

    console.log()

}



