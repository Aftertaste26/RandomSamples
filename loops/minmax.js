let readline = require("readline-sync")
//let input = Number(readline.question("Input: "))//does not work with this method
let count = 1
let Hi_score = -Infinity//input
let Lo_score = Infinity//input
let divisible_by_3 = 0

while (count <= 10) {

    input = Number(readline.question("Input: "))

    if (input > Hi_score) {
        Hi_score = input
    }
    if (input < Lo_score) {
        Lo_score = input
    }
    if (input % 3 === 0) {
        divisible_by_3++
    }
    count++
}

console.log(`Highest: ${Hi_score}`)
console.log(`Lowest: ${Lo_score}`)
console.log(`${divisible_by_3} numbers divisible by 3`)