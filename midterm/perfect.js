let readline = require('readline-sync')

let input = Number(readline.question('Number'))
let addedDivisor = 0

for (let index = 1; index <= input; index++) {
   // readline.question(index)
    for (let number = 0; number < input; number++) {

        if (index % number == 0) {
            addedDivisor += number
            //console.log(number)
        }
       
    }

    //console.log(addedDivisor)

    if (index == addedDivisor - index) {
        console.log(index)
    }

    addedDivisor = 0

}

