let readline = require('readline-sync')
let input = readline.question('input: ')
let inverse = ""

for (let letters of input) {
    inverse = letters + inverse
}

if (input === inverse) {

    console.log('Palindrome? YES')

} else {

    console.log('Palindrome? NO')

}