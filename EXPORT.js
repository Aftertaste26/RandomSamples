let name = []
let array2d = []

//new input
name.push('chem')
array2d.push([])

name.push('em')
array2d.push([])

name.push('kyle')
array2d.push([])

console.log(name)
console.log(array2d)


//already exist
for (let count = 0; count < 10; count++) {

    let read = require('readline-sync')
    let input = read.question('\nName: ')
    let add = read.question("what to save? : ")
    let i = name.indexOf(input)

    console.log(i)
    array2d[i].push(add)

    console.log(name)
    console.log(array2d)

}