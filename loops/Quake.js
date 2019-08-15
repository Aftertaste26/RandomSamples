let readline = require('readline-sync')
let input = Math.floor(Number(readline.question('input: ')))
let descriptor = ['Micro', 'Very minor', 'Minor', 'Light', 'Moderate', 'Strong', 'Major', 'Great', 'Great', 'Meteoric']
let output = descriptor[input - 1]

if (input >= 10) {
    output = descriptor[descriptor.length - 1]
}
if (input < 1) {
    output = descriptor[0]
}

console.log(output)

/* switch (input) {
    case '1':
        output = 'Micro'
        break
    case '2':
        output = 'Very minor'
        break
    case '3':
        output = 'Minor'
        break
    case '4':
        output = 'Light'
        break
    case '5':
        output = 'Moderate'
        break
    case '6':
        output = 'Strong'
        break
    case '7':
        output = 'Major'
        break
    case '8':
    case '9':
        output = 'Great'
        break
    default:
        if (input >= 10) {
            output = 'Meteoric'
        } else {
            output = 'Micro'
        }
} */


