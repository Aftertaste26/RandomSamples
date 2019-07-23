let readline = require("readline-sync")
let Mode;
let Input_1;
let Input_2;
let Input_3;

console.log("Modes:\n 1-Addition \n 2-Subtraction \n 3-Division \n 4-Multiplication \n 5-Quadratic Formula")

Mode = readline.question("Mode: ")

switch (Mode) {
    case "1":
        Input_1 = Number(readline.question("Addend: "));
        Input_2 = Number(readline.question("Addend: "));
        console.log("Sum: " + (Input_1 + Input_2));
        break;
    case "2":
        Input_1 = Number(readline.question("Minuend: "));
        Input_2 = Number(readline.question("Subtrahend: "));
        console.log("Difference: " + (Input_1 - Input_2));
        break;
    case "3":
        Input_1 = Number(readline.question("Divedend: "));
        Input_2 = Number(readline.question("Divisor: "));
        console.log("Quotient: " + (Input_1 / Input_2));
        break;
    case "4":
        Input_1 = Number(readline.question("Input: "));
        Input_2 = Number(readline.question("Input: "));
        console.log("Product: " + (Input_1 * Input_2));
        break;
    case "5":
        Input_1 = Number(readline.question("a: "));
        Input_2 = Number(readline.question("b: "));
        Input_3 = Number(readline.question("c: "));
        console.log(((-Input_2 + Math.sqrt(Math.pow(Input_2, 2) - (4 * Input_1 * Input_3))) / (2 * Input_1)).toFixed(2));
        console.log(((-Input_2 - Math.sqrt(Math.pow(Input_2, 2) - (4 * Input_1 * Input_3))) / (2 * Input_1)).toFixed(2));
        break;

    default:
        console.log("Can't solve with that Mode");
        break;
}