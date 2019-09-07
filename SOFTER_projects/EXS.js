let length = 9

for (let index = 0; index < length; index++) {

    for (let index2 = 0; index2 < length; index2++) {
        if (index2 === index || index2 === length - index - 1) {
            process.stdout.write("*")
        } else {
            process.stdout.write(" ")
        }
    }

    process.stdout.write("\n")

}