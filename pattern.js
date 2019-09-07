let readline = require('readline-sync')
let input = readline.question('Input number: ')
let pattern = []
let given = []

while (input !== '*') {
    pattern[pattern.length] = Number(input)
    given[given.length] = input
    console.clear()
    console.log(pattern)
    input = readline.question('Input number: ')
}

if (given.length > 3) {

    for (let index = 0; index < 5; index++) {

        console.clear()
        console.log('PREDICTs THE NEXT NUMBER\n')
        console.log('Given:')
        console.log(given)
        console.log('Squence:')
        let last = []
        let stored = []
        let stored2 = []
        let here = [stored, stored2]
        let match = true
        let total = 0
        let count = 0
        let x = 0
        last[last.length] = pattern[pattern.length - 1]
        here[0] = pattern
        here[1] = []

        console.log(pattern)

        do {
            x = count % 2

            for (let index = 0; index < here[x].length - 1; index++) {
                here[(x + 1) % 2][here[(x + 1) % 2].length] = here[x][index + 1] - here[x][index]
            }

            console.log(here[(x + 1) % 2])
            last[last.length] = here[(x + 1) % 2][here[(x + 1) % 2].length - 1]

            //checks if set of elements is the same
            for (let index = 0; index < here[(x + 1) % 2].length - 1; index++) {

                if (here[(x + 1) % 2][index] !== here[(x + 1) % 2][index + 1]) {
                    match = false
                    here[x] = []
                }
                else if (here[(x + 1) % 2][index] !== -1 * (here[(x + 1) % 2][index + 1])) {
                    match = false
                    here[x] = []
                }
                else {
                    match = true
                }
            }

            if (here[(x + 1) % 2].length < 2) {
                readline.question('break')
                break
            }

            count++
        } while (!match)

        if (here[(x + 1) % 2].length > 2) {

            for (let index = 0; index < last.length; index++) {
                total += last[index]
            }
            pattern[pattern.length] = total
        } else {
            console.log('Number is not enough to idetify the sequence')
            break
        }
    }
} else {
    console.log(' can\'t identify the next number')
}
console.log('\n')
