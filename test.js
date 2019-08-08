let readline = require('readline-sync');
let input = readline.question('nth term: ');
let total = 1;
let output = total;
let number = 0;
let cycle = 0;
let sum = 0;

console.log(0);

while (cycle != input) {

    if (cycle % 2 === 0) {

        total = total + number;
        output = total;

    } else {

        number = number + total;
        output = number;

    }



    console.log(output);
    sum += output;
    cycle++;
}

console.log(`Sum ${sum}`);