let readline = require("readline-sync");

//rating Input
let rating = Number(readline.question("Rating: "));

//value of base allowance
let baseAllowance = 500;

//added
let allowanceAdded = baseAllowance * rating / 100;

//conditional statement
if (rating < 50) { 
    
    // rounded to negative infinity
    console.log("Next week's Allowance: " + Math.floor(baseAllowance + allowanceAdded));
    console.log("Verdict : Bad");

} else {          
    
    // rounded to positive infinity
    console.log("Next week's Allowance: " + Math.ceil(baseAllowance + allowanceAdded));
    console.log("Verdict : Good");

}