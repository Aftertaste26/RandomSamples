let readline = require('readline-sync');

// Inputs
let side_1 = (readline.question("input side 1: "));
let side_2 = (readline.question("input side 2: "));
let side_3 = (readline.question("input side 3: "));

// all side are equal
if (side_1 == side_2 && side_1 == side_3 && side_3 == side_2) {

    console.log("Equilateral");

}
// two sides are equal
else if (side_1 == side_2 || side_1 == side_3 || side_3 == side_2) {

    console.log("Isosceles");

}
//none of the sides are equal
else {

    console.log("Scalene");

}