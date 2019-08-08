let readline = require('readline-sync');
let Name = readline.question('');
let Question = readline.question('');
let Lucky_number = Number(readline.question(''));
let Color;
let Answer;

if (Name.length % 2 === 0 && Name.length % 3 === 0) {
    Color = 'Red';
} else if (Name.length % 5 === 0) {
    Color = 'Green';
} else {
    Color = 'Yellow';
}


if (Lucky_number % 2 === 0 && Lucky_number % 4 === 0) {
    Answer = 'Answer : As I see it, yes.';
} else if (Lucky_number % 3 === 0 && Lucky_number % 5 === 0) {
    Answer = 'Answer : Most likely.';
} else if (Lucky_number % 9 === 0 && Lucky_number % 2 === 0) {
    Answer = 'Answer : Outlook good.';
} else if (Lucky_number % 8 === 0 && Lucky_number % 4 === 0) {
    Answer = 'Answer : Reply hazy, try again.';
} else if (Lucky_number % 11 === 0) {
    Answer = 'Answer : Ask again later.';
} else if (Lucky_number % 7 === 0) {
    Answer = 'Answer : Better not to tell you now.';
} else if (Lucky_number % 5 === 0) {
    Answer = 'Answer : My reply is no.';
} else if (Lucky_number % 6 === 0) {
    Answer = 'Answer : My source says no.';
} else {
    Answer = 'Please try again'
}

console.log(`Hi ${Name}`);
console.log(`The ball will now analyze your question : ${Question}`);
console.log(Color);
console.log(Answer);

