let RL = require('readline-sync')
let Type = ['paper', 'writing', 'others'];
let Variation = ['something', 'others', 'somthing2', 'others'];
let Brand = ['brand1', 'others'];
let Specs = ['specs1', 'others'];
let Cat_string = ['Type', 'Variation', 'Brand', 'Specs'];
let Code = [Type, Variation, Brand, Specs];


add(Code)

function add(array) {

    console.clear()
    for (let index = 0; index < array.length; index++) {
        console.log(Cat_string[index])
        for (let index2 = 0; index2 < array[index].length; index2++) {
            console.log(`[${index2 + 1}] - ${array[index][index2]}`)
        }
        let input_type = RL.question('> ')

        if (array[index][input_type - 1] === "others") {
            Others()
        }
    }

}


function Others() {

    let input = RL.question('input any thing: ')

    for (let index = 0; index < Type.length; index++) {
        console.log(Type[index])
    }

    Type.splice(Type.length - 1, 0, input)

    add(Code)
}
