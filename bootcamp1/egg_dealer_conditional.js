let readline = require('readline-sync');                      // important 
let qtyEggs = Number(readline.question("Number of Eggs: "));  // input number of eggs
let discounted = (70 / 12);                                   // the discounted price.. if qty egg is greater than 11
let regular = (77 / 11);                                      // the regular price.. if qty egg is less than 12
let dozen = 12;                                               // value of dozen

/*
Since we have two choices or conditions..
conditional statement may apply to this problem() 
one of which is the discounted price, applied if quantity of eggs is greater than or equal to dozen
else or if quantity of eggs is less than dozen, the price is set to regular
*/

if (qtyEggs >= dozen) {

    /*
    the remainder of number of eggs and a dozen is added to the rounded upward product of
    number of eggs and the discocunted price
    */

    console.log((Math.ceil(qtyEggs * discounted) + qtyEggs % dozen));

} else {

    /*
    the quantity of eggs is multiplied by the regular price of egg
    */

    console.log(Math.ceil(qtyEggs * regular));

}
