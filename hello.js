let readline = require('readline-sync');
let input = readline.question('nth term: ');
let first_term = 0;
let next_term = 0;
let proceeding_term = 1;
let cycle = 0;
let sum = 0;

console.log(first_term);

while (cycle != input) {

    next_term = first_term + proceeding_term;
    first_term = proceeding_term;
    proceeding_term = next_term;

    console.log(first_term);
    sum += first_term;
    cycle++;
}

console.log(`The sum is ${sum}`);