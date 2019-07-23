let readline = require("readline-sync");                 // important
let input = Number(readline.question("Sales Amount: ")); // input Value of sales in a week
let salary = 2000;                                       // additional salary
let commision = 0.09;                                    // 9% commission
/* 
the salary is added to the product of commission and the value of sales in a week
and rounded to the nearest thousands 
*/
let output = Math.trunc(((commision * input) + salary)/1000)*1000;

//Output = Esimated Salary
console.log(Math.floor(output) + " Php");// don't forget the Unit
