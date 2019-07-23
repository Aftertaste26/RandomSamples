let readline = require("readline-sync")
let salary = Number(readline.question("salary: "))
let time = Number(readline.question("Time: "))
let output;

// if to=ime is greater than 40
if (time > 40) {
    output = salary*40
    output = output + ((salary / 2)+salary) * (time % 40)
}else{
    output = salary * (time / 40) * 40;
}

console.log(output.toFixed(2))