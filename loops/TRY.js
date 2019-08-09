//STACKJAM
let readline = require('readline-sync')
const Maximum_height = .1

let Given_Height = Number(readline.question('Enter the height: '))
let Number_of_Bounce = 0


while (Given_Height >= Maximum_height) {
    
    Given_Height = ((Given_Height * .75).toFixed(2))
    console.log(`Bouncing: ${Given_Height} units`)
    Number_of_Bounce++
}


console.log(`Number of bounces: ${Number_of_Bounce}`)
