let readline = require('readline-sync');
let product = (readline.question('1 or 2'));

if (product == '1') {
    console.log('beddings')
}
if (product == '2') {
    console.log('blankets')
}

let length = Number(readline.question(''))
let width = Number(readline.question(''))

if (length == !length / 5 && width == !width / 5) {
    console.log('invalid dimentions')
}

// variable is not defined
costOFbed = Math.ceil(length * width) * 0.05 - 1
costOFblanket = Math.ceil(length * width) * 0.07 - 1

price =  costOFbed || costOFblanket
console.log('price: '+ price)