let readline = require('readline-sync')

let length = 10

for (let index = 0; index < Math.ceil(length/2)-1; index++) {

    //upside down right tri
    for (let index2 = 1 + index; index2 < Math.ceil(length / 2)-1; index2++) {
        process.stdout.write("-")
    }

    //right tri
    for (let index2 = 0; index2-1 <= index; index2++) {
        process.stdout.write("*")
    }

    for (let index2 = 0; index2 <= index; index2++) {
        process.stdout.write("*")
    }
    process.stdout.write("\n")

}