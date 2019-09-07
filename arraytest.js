console.clear()
let readline = require('readline-sync')
let Price = ["200", "450"]

console.log(Price);

// using dot push
Price.push(readline.question('Add something: '));

console.log(Price);

// using index
Price[Price.length] = readline.question('Add something: ')

console.log(Price);

// changing data
// price dot length is the number of elements in the array.
Price[Price.length - 1] = readline.question('change the last data, input something: ')

console.log(Price);
console.log(Price.pop())
console.log(Price);
console.log(Price.indexOf('450'))
console.log(Price.includes("450"))

