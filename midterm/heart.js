let readline = require('readline-sync')
/* let inputLength = readline.question('N: ')
let word = readline.question('word: ') */

let inputLength = 10
let word = "Em Chem"


for (let index = inputLength - 3; index < inputLength; index++) {

    for (let index2 = 1 + index; index2 < inputLength; index2++) {
        process.stdout.write("-")
    }

    process.stdout.write("*")

    for (let index2 = 5; index2 < index; index2++) {
        process.stdout.write("*")
    }

    for (let index2 = 5; index2 < index - 1; index2++) {
        process.stdout.write("*")
    }
    if (index !== 0) {
        process.stdout.write("*")
    }

    //=======================================================//

     for (let index2 = 1 + index; index2 < inputLength; index2++) {
        process.stdout.write("-")
    }

    for (let index2 =  index; index2 < inputLength; index2++) {
        process.stdout.write("-")
    }

     process.stdout.write("*")

    for (let index2 = 5; index2 < index; index2++) {
        process.stdout.write("*")
    }

    for (let index2 = 5; index2 < index - 1; index2++) {
        process.stdout.write("*")
    }
    if (index !== 0) {
        process.stdout.write("*")
    }  

    process.stdout.write("\n")
}


//===================================================================//

for (let spaces = 0; spaces < ((inputLength) - Math.ceil(word.length / 2)); spaces++) {
    process.stdout.write("*")
}
process.stdout.write(word)

for (let spaces = 0; spaces < ((inputLength * 2) - 1) - ((inputLength) - (word.length / 2) + word.length); spaces++) {
    process.stdout.write("*")

}

process.stdout.write("\n")



//===================================================================//


inputLength -= 2

for (let index = 0; index < inputLength + 1; index++) {

    //backslash
    for (let index2 = 0; index2 <= index; index2++) {
        process.stdout.write("-")
    }

    process.stdout.write("*")

    for (let index2 = 1 + index; index2 < inputLength + 1; index2++) {
        process.stdout.write("*")
    }
    for (let index2 = 1 + index; index2 < inputLength; index2++) {
        process.stdout.write("*")
    }
    if (index < inputLength) {
        process.stdout.write("*")
    }

    process.stdout.write("\n")
}