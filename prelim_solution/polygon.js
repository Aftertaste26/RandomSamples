let readline = require('readline-sync');
let number_of_sides = Number(readline.question(''));
let sides = Number(readline.question(''));
let area = (number_of_sides*Math.pow(sides,2))/(4*(Math.tan(Math.PI/number_of_sides)))
console.log(area.toFixed(2));