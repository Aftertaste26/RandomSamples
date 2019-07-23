const readline = require('readline-sync');
let input = Number(readline.question('Employees Rating: '));
let salary = 2400;
let raise;
let performance;

if (input === 0) {

    performance = 'Unacceptable performance';
    raise = 'Not applicable!'

} else if (input === 0.4) {

    performance = 'Acceptable performance';
    raise = (salary * input)+'$';
    input = (input * 100) + '%';

} else if (input >= 0.6) {

    performance = 'Meritorious performance';
    raise = (salary * input)+'$';
    input = (input * 100) + '%';

} else {

    performance = 'Invalid rating is entered!';
    input = 'Invalid'
    raise = 'Not applicable!'

}

console.log(`\nPerformance: ${performance}`);
console.log(`Rating: ${input}`);
console.log(`Raise value: ${raise}\n`);