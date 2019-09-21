let inputLength = 11
let length = inputLength / 2

for (let index = 0; index < length; index++) {

    for (let index2 = 1 + index; index2 < length; index2++) {
        process.stdout.write(" ")
    }

    process.stdout.write("*")

    for (let index2 = 0; index2 < index; index2++) {
        process.stdout.write(" ")
    }
    for (let index2 = 0; index2 < index - 1; index2++) {
        process.stdout.write(" ")
    }
    if (index !== 0) {
        process.stdout.write("*")
    }

    process.stdout.write("\n")
}

length -= 2

for (let index = 0; index < length + 1; index++) {

    for (let index2 = 0; index2 <= index; index2++) {
        process.stdout.write(" ")
    }

    process.stdout.write("*")

    for (let index2 = 1 + index; index2 < length + 1; index2++) {
        process.stdout.write(" ")
    }
    for (let index2 = 1 + index; index2 < length; index2++) {
        process.stdout.write(" ")
    }
    if (index < length) {
        process.stdout.write("*")
    }

    process.stdout.write("\n")
}