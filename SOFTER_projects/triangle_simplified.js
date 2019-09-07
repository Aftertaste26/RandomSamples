let length = 10

for (let index = 0; index < length; index++) {

    for (let index2 = 1 + index; index2 < length; index2++) {
        process.stdout.write(" ")
    }
    for (let index2 = 0; index2 <= index; index2++) {
        process.stdout.write("*")
    }
    process.stdout.write("\n")

}