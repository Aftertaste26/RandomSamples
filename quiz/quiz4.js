let readline = require('readline-sync');

// month and day input
let month = readline.question("input Month: ");
let day = Number(readline.question("input Day: "));

// Spring Statement
if ((month == "March" && day >= 20) ||
    (month == "April" && day <= 31) ||
    (month == "May" && day <= 31) ||
    (month == "June" && day < 21)
) {
    console.log(month + " " + day + " , is in Spring")
}

// Summer Statement
if ((month == "June" && day >= 21) ||
    (month == "July" && day <= 31) ||
    (month == "August" && day <= 31) ||
    (month == "September" && day < 22)
) {
    console.log(month + " " + day + " , is in Summer")
}

// Fall Statement
if ((month == "September" && day >= 22) ||
    (month == "October" && day <= 31) ||
    (month == "November" && day <= 31) ||
    (month == "December" && day < 21)
) {
    console.log(month + " " + day + " , is in Fall")
}

// Winter Statement
if ((month == "December" && day >= 21) ||
    (month == "January" && day <= 31) ||
    (month == "February" && day <= 29) ||
    (month == "March" && day < 20)
) {
    console.log(month + " " + day + " , is in Winter")
} 