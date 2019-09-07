console.clear()
let readline = require('readline-sync')

let argument4 = "hello"
let argument5 = " World"
let array = ["column1", "column2", "column3", argument4, argument5]

console.log("\nprinting the elements of array\n")

console.log(array)
console.log(array)

console.log("\nAccessing the elements by index\n")

console.log(`${array[0]} ${array[1]} ${array[2]} ${array[3]} ${array[4]}`)


//std out
for (let index = 0; index < array.length; index++) {

    process.stdout.write(`${array[index]} `);

}

process.stdout.write('\n')

//console dot log
for (let index = 0; index < array.length; index++) {

    console.log(`${array[index]} `);

}

console.log("\n")
readline.question()
console.clear()



