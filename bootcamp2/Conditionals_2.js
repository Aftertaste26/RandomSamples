/*
Update
Version 2
# lines of code is reduced
# months with the same output is combine 
in one "if statement" with multiple conditions 
all connected with logical disjuction("or").
*/


// important
let readline = require("readline-sync")

// month input
let months = Number(readline.question("What Month you wanna know the number of days? : "))


//---conditions---//

// January, March, May, July, August, October, December
if (months == 1 || months == 3 || months == 5 || months == 7 || months == 8 || months == 10 || months == 12) { 

    console.log("31 days")

// February
} else if (months == 2) {           

    console.log("28 or 29 days")

// April, June, September, November
} else if (months == 4 || months == 6 || months == 9 || months == 11) {   

    console.log("30 days")

// none of the Above
} else {                            

    console.log("There is no " + months + "th month")

}