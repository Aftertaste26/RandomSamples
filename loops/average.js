let readline = require('readline-sync')
let no_entries = 0;
let value = 0;
let State = 1;


while (State === 1) {

    let input = Number(readline.question('Input number: '))

    value += input

    if (input === 0) {

        State = 0

    } else {

        no_entries++

    }
}

if (no_entries === 0) {
    console.log("No entries")
}
else{
    console.log(`Average: ${value / no_entries}`)
}
