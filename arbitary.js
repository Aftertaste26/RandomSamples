let readline = require('readline-sync')

let input = readline.question('')

if (input.length < 3) {
    console.log(input)
} else {

    let array = input.split('')
    array.shift()
    
    let last = array.pop()
    array.pop()
    array.push(last)

    //array.splice(array.length-2,1)
    
    console.log(array)
}
