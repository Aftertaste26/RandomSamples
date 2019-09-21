let readline = require('readline-sync')

let array
let input
let name = []
let score = []
let draw = false


while (input !== 'end') {

    input = readline.question('hi: ')

    if (input !== 'end') {

        array = input.split('.')

        if (!name.includes(array[0])) {
            name.push(array[0])
            score.push(array[1])
        } else {
            score[name.indexOf(array[0])] = (Number(score[name.indexOf(array[0])]) + Number(array[1])).toString()
        }

    }

}

let top = score.indexOf(`${Math.max(...score)}`)

for (let index = 0; index < score.length; index++) {

    for (let index2 = index + 1; index2 < score.length; index2++) {

        if (score[index] === score[index2]) {

            if (score[index] >= Math.max(...score)) {
                draw = true
            }

        }

    }

}

if (name.length !== 0) {

    if (!draw) {
        console.log(`${name[top]} is the G.O.A.T with ${Math.max(...score)} points!`)
    } else {
        console.log('Draw')
    }

}