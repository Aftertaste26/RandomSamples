 //original code---------------------------------START// 

let readline = require('readline-sync');
let product = (readline.question('1 or 2'));


if (product == '1') {
    console.log('beddings')
}
if (product == '2') {
    console.log('blankets')
}


let length = Number(readline.question(''))
let width = Number(readline.question(''))

// bug.. condition is not satisfied and does not make sense..
if (length == !length / 5 || width == !width / 5) {
    console.log('invalid dimentions')
} 

// variable is not defined
costOFbed = Math.ceil(length * width) * 0.05 - 1
costOFblanket = Math.ceil(length * width) * 0.07 - 1


// condition is not valid since both variables are number. it is not
// neccesary to put a logical operator if you are assigning a value. 
// only if youre using it as a boolean. 

price = costOFbed || costOFblanket

// This should not be printed if the inputs are invalid     
console.log('price: ' + price)

//original code-----------------------------END// 




//reviced code......................................START// 
let readline = require('readline-sync');
let product = readline.question('if bedings aenter 1 if blankets enter 2: ');

// I define length and width here to be assigned later
let length
let width

// I reorganize the code in each conditions 
// I group the needed code for the specific item ( beddings and blankets)
// I also change the formula for the in each in each item I base it on the problem 
//-----------------------------------------------------------------//
if (product == '1') {
    console.log('beddings')
    length = Number(readline.question(''))
    width = Number(readline.question(''))
    let costOFbed = Math.ceil(length * width * 0.05/10)*10 - 1
    price = costOFbed
}

if (product == '2') {
    console.log('blankets')
    length = Number(readline.question(''))
    width = Number(readline.question(''))
    let costOFblanket = (Math.ceil(length * width* 0.07/10)*10 - 1)
    price = costOFblanket
}
//-------------------------------------------------------------------//

// I change the condion to have more sense,
// In the problem it is stated that it should be invalid if the input
//  values are not divisible by 5.. 
// and I added else so that if the condition is false it will print the price

//-------------------------------------------------------------------//

if (length % 5 !== 0 || width % 5 !== 0) {
    console.log('invalid dimentions')
} else {

    // In this line I fixed the output value to 2 decimal places as stated in the problem
    console.log('price: ' + price.toFixed(2))

}

//-------------------------------------------------------------------//
//reviced code......................................END// 







