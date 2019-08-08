let readline = require('readline-sync');
let type;
let length = 0;
let width = 0;
let price = 0;
let output = 0;

type = readline.question('Enter no.: ')

switch (type) {

    case '1':

        length = Number(readline.question('Enter Length: '));
        width = Number(readline.question('Enter Width: '));

        if (length % 5 === 0 && width % 5 === 0) {

            price = length * width * 0.05
            output = (Math.ceil(price / 10) * 10) - 1
            console.log(output);

        } else {

            output = 'Invalid dimensions'
            console.log(output);

        }

        break;

    case '2':

        length = Number(readline.question('Enter Length: '));
        width = Number(readline.question('Enter Width: '));

        if (length % 5 === 0 && width % 5 === 0) {

            price = length * width * 0.07
            output = (Math.ceil(price / 10) * 10) - 1
            console.log(output);
        } else {

            output = 'Invalid dimensions'
            console.log(output);
        }

}

