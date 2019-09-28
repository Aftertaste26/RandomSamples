let readline = require('readline-sync')
let array = readline.question('input: ').split(',').map(a => a.trim()).sort()
let array2 = readline.question('input: ').split(',').map(a => a.trim()).sort()
let num = Math.floor((array.length - array2.length) / 2)

for (let index = 0; index < num; index++) {
    array2.push(array.splice(array2.length + 1, 1).toString())
}

for (let index = 0; index < array.length; index++) {
    if (array[index] && array2[index]) {
        console.log(`${array[index]} and ${array2[index]}`)
    } else {
        console.log(`${array[index]} is alone!`)
    }
}







