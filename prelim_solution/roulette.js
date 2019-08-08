let readline = require('readline-sync');
//let input = Number(readline.question());
let color;
let odd_even;
let input = Math.trunc(Math.random() * 100)%38
let output;

if (input%2 == 0) {
    odd_even = 'Even'
} else {
    odd_even = 'Odd'
}

if (input <= 18) {
    output = '1 to 18'
} else if (input === 0) {
    output = '0'
} else if (input === 37) {
    output = '00'
} else {
    output = '19 to 36'
}

switch (input) {
    case '0':
    case '37':
        color = 'Green'
        break;

    case '3':
    case '5':
    case '7':
    case '9':
    case '12':
    case '14':
    case '16':
    case '18':
    case '19':
    case '21':
    case '23':
    case '25':
    case '27':
    case '30':
    case '32':
    case '34':
    case '36':
        color = 'Red';
        break;
        


    default:

        if (input < 36) {

            color = 'Black';

        }
}

console.log(`Pay ${input}`);
console.log(`Pay ${color}`);
console.log(`Pay ${odd_even}`);
console.log(`Pay ${output}`);