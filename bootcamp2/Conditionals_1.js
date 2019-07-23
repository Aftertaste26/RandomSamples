let readline = require("readline-sync")                // important
let Years = Number(readline.question("Human Years: ")) // input human years
let dogAge                                             // dog age

if (Years == 1) {                                      //  Input is equal to 1
    dogAge = 10.5
} else {                                               //  Input is greater than 1 
    dogAge = 10.5 * 2
}

if (Years > 2) {                                       //  Input is greater than 2

    /*
    the Input is subtracted by 2 and multiplied to 4 to get the additional age of dog
    and added to the current assigned dog age of 21
    */

    dogAge = dogAge + ((Years - 2) * 4)

}

console.log(dogAge)