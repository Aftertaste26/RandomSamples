const readline = require('readline-sync')
let total = 0
let Number_Of_Input = 0
let value = Number(readline.question('Enter Value: '))


while (value !== 0) {

    total += value

    value = Number(readline.question('Enter Value: '))

    Number_Of_Input++

}
if (total === 0) {

    console.log('\nERROR: NO VALUES TO COMPUTE!')
    console.log('...........ENDED............\n')

} else {

    console.log(`\nAverage: ${total / Number_Of_Input}\n`)

}