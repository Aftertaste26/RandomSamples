/*
 Y O U R   G O A L   I S   T O   P R I N T   S T R I N G   I N L I N E
 to make a column
 newline for rows
*/

let array = ['text1', 'text2', 'text3', 'text4', 'text5']
let array2 = ['t', 'te', 'tex', 'text', 'text1']

// printing without using loops
process.stdout.write(array[0])
process.stdout.write(array[1])
process.stdout.write(array[2])
process.stdout.write(array[3])
process.stdout.write(array[4])


// n e w l i n e
process.stdout.write('\n')


// printing using loops
for (let index = 0; index < array.length; index++) {

    process.stdout.write(array[index])

}

// n e w l i n e
process.stdout.write('\n')


// printing using loops
for (let index = 0; index < array.length; index++) {

    // adding fixed number of spaces but not applicable for printing different length text..
    process.stdout.write(` ${array[index]} `)

}


// n e w l i n e
process.stdout.write('\n')


for (let index = 0; index < array2.length; index++) {

    // adding fixed number of spaces but not applicable for printing different length text..
    process.stdout.write(` ${array2[index]} `)

}