let array = ['kyle', 'osunero', 'edelynn', 'mallare']

array ='kyle'

Heading_Center(array, 50, '+')

function Heading_Center(Heading, Length, spaceChar, lowerSpacing, upperSpacing) {

    let row = 1
    let output = ""
    text = Heading

    if (upperSpacing === undefined) {
        upperSpacing = 0
    }
    if (spaceChar === undefined) {
        spaceChar = " "
    }

    // C H A N G I N G   N U M B E R  O F  R O W S
    if (Heading[0].length > 1) {
        row = Heading.length
    }

    // U P P E R   S P A C I N G
    for (let newLine = 0; newLine < upperSpacing; newLine++) {
        console.log('')
    }

    for (rowCount = 0; rowCount < row; rowCount++) {

        // S T R I N G   T O   A R R A Y
        if (Heading[0].length > 1) {
            text = Heading[rowCount]
        }

        for (let spacesCount = 0; spacesCount < 50; spacesCount++) {

            let leftSpacing = (Length / 2) - Math.floor(text.length / 2)

            if (spacesCount < leftSpacing || spacesCount > leftSpacing + text.length) {
                process.stdout.write(spaceChar)
            }

            if (spacesCount == leftSpacing) {
                process.stdout.write(text)
            }

        }

        console.log(output)

    }

    if (lowerSpacing === undefined) {
        lowerSpacing = 1
    }

    // L O W E R  S P A C I N G
    for (let newLine = 0; newLine < lowerSpacing; newLine++) {
        console.log('')
    }

}

function List_filter(array_bin, array_string, array_var) {

    //DELETES CHOICES THAT ARE EMPTY #NO BINARY ASSIGNED

    let included = 0; //number of included element

    for (let index = 0; index < array_bin.length; index++) {

        if (DEBUG) {
            console.clear()
            console.log(array_bin)
            console.log(`Index: ${index} length ${array_bin.length} Included ${included}`)
            readline.question(`${array_bin[index]}`)
        }

        if (array_bin[index] === undefined) { // undefined mean no food available
            array_bin.splice(index, 1)
            array_string.splice(index, 1)
            array_var.splice(index, 1)
            index = -1 + included
        } else {
            included++
        }
    }

    //DELETES THE NOT INCLUDED RESTO IN AN ARRAY #notAvailableInTheArea
    for (let index = 0; index < array_bin.length; index++) {

        let cycle = 0
        let limit = array_var[index].length
        included = 0                    //number of included element

        for (let index2 = 0; cycle < limit; index2++) {

            if (DEBUG) { // DEBUGING OUTPUT
                console.clear()
                console.log(array_var[index])
                console.log(`Number of cycles: ${cycle} < limit ${limit} Index 2: ${index2} length ${array_var[index].length} `)
                readline.question(`${(array_var[index])[index2]} - ${array_bin[index][index2]}`)
            }

            if (array_bin[index][cycle] !== '1') {
                array_var[index].splice(index2, 1)
                index2 = -1 + included
            } else {
                included++
            }

            cycle++
        }

    }

    if (array_string.length > 0) {
        array_string.push("Bisan Di'in")
    }

}