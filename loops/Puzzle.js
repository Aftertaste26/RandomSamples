let readline = require('readline-sync')

let number = '1'
let input;
let Game_ON = true
let level =1

while (Game_ON) {

    let count = 0
    let print = ''
    let recent;
    let stored = ''
    let cycle = 0

    for (let index = 0; index <= number.length; index++) {
        console.clear()
        const element = number[index];


        if (element == recent) {

            count++
            cycle = 0
            stored = count + element
            //console.log('\n!EQUAL!\n')
            //console.log(`stored use later ${stored}`)

        } else {

            //console.log('\n! NOT EQUAL!\n')

            if (cycle == 0) {

                count++
                stored += count + element
                //console.log(`stored use later ${stored}`)

            } else {

                print += stored
                cycle = 0
                stored = ''
                count = 1
                stored += count + element
                //console.log(`added to print ${print}`)

            }


        }

        cycle++
        recent = element
        //console.log(`\nstored: ${stored}`)
        //console.log(`print: ${print}`)
        //readline.question(`count:element ${count}${element}... length: ${number.length} = index: ${index}...`)

    }
    console.log(`.!Count the number!.\n`)
    console.log(`........${number}.......`)
    console.log(`level no. ${level}\n`)
    input = readline.question(`\nNumber: `)

    if (input !== print) {
        console.clear()
        Game_ON = false
        console.log('!\n< GAME OVER >!\n')
        console.log(`level no. ${level}\n`)
    } else {
        number = print
        level++
    }

}


