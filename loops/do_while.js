const readline = require('readline-sync')
const number = Math.floor(Math.random() * 100 + 1)
let guess;

do {
    guess = Number(readline.question('guess: '))

    //process.stdout.write('\033[2J')
    console.clear()

    if (guess < 1 || guess > 100) {
        console.log('your guess is out of range')
    } else if (guess > number) {
        console.log('LOWER!!!')
    } else if (guess < number) {
        console.log('HIGHER')
    }else{
        console.log('Congratulations! you have guessed the number')
    }
} while (number !== guess);