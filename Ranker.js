let readline = require('readline-sync')

let array = []
let input


do {

    input = readline.question('Hi.: ')
    let numb = Number(input)

    if (input !== 'end') {

        for (let index = 0; index < array.length; index++) {

            if (numb > array[index] && numb < array[index + 1]) {
                array.splice(index, 0, numb)
            }
            
        }
        
    }
    console.log(array)

} while (input !== 'end')



for (let index = array.length - 1; index >= array.length - 3; index--) {

    if (array[index] !== undefined) {
        console.log(array[index])
    }

}

if (array.length >= 6) {

    for (let index = 2; index >= 0; index--) {
        console.log(array[index])
    }

}