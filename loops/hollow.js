const readline = require('readline-sync')
let input2 = 5
let input1 =  input2
let stored1 = input1
let output = '';
let stopper = input1


while (stopper !== 0) {
    output += '*'
    stopper--
}

console.log(output)
output = ''


while (input1 !== 0) {

    if (stored1 === input1 || input1 === 1) {

        output += '*'

    } else {

        output += ' '

    }

    input1--
}

console.log(output)



while((input2-2)!==1){
    console.log(output)
    input2--
}

output = ''



while (stored1 !== 0) {
    output += '*'
    stored1--
}
console.log(output)
