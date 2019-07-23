let readline = require('readline-sync');                      // important 
let qtyEggs = Number(readline.question("Number of Eggs: "));  // input number of eggs
let priceOf_12 = 70;                                          // the price of a dozen eggs
let priceOf_1 = 7;                                            // the price of a single egg
let dozen = 12;                                               // value of dozen

/*
Quantity of dozen as a whole number multiplied to price of dozen eggs is added to
the product of its remainder and the price of a single egg
*/

//output = price of eggs
console.log((Math.trunc(qtyEggs / dozen) * priceOf_12) + qtyEggs % dozen * priceOf_1);

