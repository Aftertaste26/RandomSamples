let readline = require('readline-sync')

//--SET COLUMN WIDTH--//
let column_1 = 15        // ITEM
let column_2 = 11        // ITEM DESCRIPTION
let column_3 = 24        // QTY
let column_4 = 11        // UNIT
let column_5 = 14        // UNIT PRICE
let column_6 = 16        // TOTAL
let column_7 = 11        // CODE
let column_8 = 11        // CODE
let Column_width = [column_1, column_2, column_3, column_4, column_5, column_6, column_7, column_8]



em()


function em() { //em function
    console.clear()
    console.log('   M O D E\n\n [1] - Input\n [2] - Category\n [3] - Table')

    let input = readline.question(' >: ')

    switch (input) {
        case '1':
            //ENTER NEW DATA TO THE NESTED ARRAY
            break
        case '2':
            console.clear()
            em()
            break
        case '3':
            console.clear()
            readline.question("< E N T E R >")
            em()
            break
        default:
            readline.question(' I N V A L I D ')        // PAUSE: ENTER TO GO BACK
            em()                                                   // GO BACK!
    }
}

function addType() {

    let typeName = readline.question("type: ")
    let typeVaration = readline.question("Variation: ")
    let typeBrand = readline.question("brand: ")
    let typeSpecs = readline.question("specs: ")

    type.push(typeName)
    typeArray.push([[typeVaration], [typeBrand], [typeSpecs]])

    console.log(typeArray)

}

function addVariation(index) {

    let typeVaration = readline.question("Variation: ")
    let typeBrand = readline.question("brand: ")
    let typeSpecs = readline.question("specs: ")
    typeArray[index][0].push(typeVaration)
    typeArray[index][1].push(typeBrand)
    typeArray[index][2].push(typeSpecs)
    console.log(typeArray)

}

function choices(Assigned_array) {

    console.clear()

    console.log(" C O M P U T E R  &  N E T W O R K I N G \n")

    let index;

    for (index = 0; index < Assigned_array.length; index++) {
        console.log(`[${index}] - ${Assigned_array[index]}`)
    }

    if (index !== 0) {

        input = readline.question("\n >: ")

        if (input < index) {

            if (input === '') {
                em()
            }

        } else {

            readline.question('\n I N V A L I D  I N P U T')
            choices(Assigned_array)

        }

    } else {
        console.log(" A R R A Y  D O N T  H A V E  E L E M E N T S ")
        readline.question(" >: ")
        em()
    }

    return input

}


function table_Print(heading, Text, length) {                           //array of string and array of width

    table_Print_Advance(heading, length, 0, '-')                        // PRINTING THE ARRAY SINGLE ROW

    for (let i_String = 0; i_String < Text[0].length; i_String++) {     //FISRT LOOP STRING INDEX
        table_Print_Advance(Text, length, 1, " ", i_String)
    }

}

function table_Print_Advance(Text, length, mode, space, index) {

    // !!! FOR NESTED ARRAY !!!!
    // !!! MODE IS 1
    // !!! INDEX INPUT IS NEEDED

    //-------------------------------------< TABULAR TEXT PRINT >--------------------------------------------//

    for (let i_Variable = 0; i_Variable < Text.length; i_Variable++) {      //SECOND LOOP VARIABLE INDEX

        //<-----------< SETUP >-------------->//
        let Text_Input = Text[i_Variable]                       // ARRAY OF STRING

        if (mode === 1) {
            Text_Input = Text[i_Variable][index]               // ARRAY OF STRING (NESTED ARRAY)
        }

        let Char_length = length[i_Variable]                   // ARRAY OF NUMBERS
        let center = 0                                         // DEFAULT VALUE IF ELEMENT OF AN ARRAY IS UNDEFINED
        let spaces = space                                     // SPACE CHARACTER.. VARY ON THE ASSIGNED STRING IN THE ARGUMENT OF THIS FUNC WHEN CALLED.

        if (Text_Input != undefined) {
            center = Math.ceil(Text_Input.length / 2)           // GETTING THE CENTER OF THE TEXT
        }

        //-------------------------------------< MAIN CODE >---------------------------------------//
        let output = ""
        process.stdout.write("|")

        if (Text_Input != undefined) {   // kn may sulod imo array

            for (let spaces_number = 0; spaces_number < (Math.ceil(Char_length / 2) - center); spaces_number++) {

                output += spaces        // add spaces

            }

            output += Text_Input       // insert text
        }

        while (output.length !== Char_length) {
            output += spaces          // add remaining spaces needed
        }

        process.stdout.write(output) // Printed by row

    }

    process.stdout.write("|\n")

}

