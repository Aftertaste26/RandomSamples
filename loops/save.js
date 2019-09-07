let readline = require('readline-sync')

// input value is rounded down
let input = Math.floor(Number(readline.question('input: ')))

// set of string
let descriptor = ['Micro', 'Very minor', 'Minor', 'Light', 'Moderate', 'Strong', 'Major', 'Great', 'Great', 'Meteoric']

//getting the element
let output = descriptor[input - 1]

if (input >= 10) {
    output = descriptor[descriptor.length - 1]
}
if (input < 1) {
    output = descriptor[0]
}

console.log(output)