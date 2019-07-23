
//SENIOR CITEZEN / PWD ... DISCOUNT //

const readline = require('readline-sync');
let input = '';         // Input
let discount = 0.05;    // 5% discount
let sc_pwd = 0;         // off price
let commodities = 0;    // Total price of commodities
let total = 0;          // Grand total
let payment = 0;        // Payment
let change = 0;         // Change


while (input !== 'end') {

    input = readline.question("Item: ");

    if (input.includes('**')) {

        input = readline.question("Price: ");
        commodities += Number(input);

    } else if (input !== 'end') {

        input = readline.question("Price: ");
        total += Number(input);

    }

}


input = readline.question("REGULAR, SENIOR, PWD :  ");
payment = Number(readline.question("Payment:  "));

switch (input) {

    case 'regular':

        total += commodities;
        break;

    case 'senior': //fallthru
    case 'pwd':

        sc_pwd += commodities * discount;

        if (sc_pwd > 65) {

            sc_pwd = 65;

        }

        total += commodities - sc_pwd;
        console.log(`SC/PWD Disc: ${sc_pwd.toFixed(2)}`);

}

change = payment - total

console.log(`Total: ${total.toFixed(2)}`);
console.log(`Change: ${change.toFixed(2)}`);