let readline = require('readline-sync')
let recent_;

//--HEADING--//
let heading_String = ["ITEM","BRAND", "ITEM DESCRIPTION", "QTY", "UNIT", "UNIT PRICE", "TOTAL", "Item Code"];
let Category_list = ["OFFICE & SCHOOL SUPPLIES", "COMPUTER PERIPHERALS", "LAPTOP & ACCESSORIES", "COMPUTER COMPONENTS", "DRIVES & STORAGE", "NETWORKING"]
let SubCat_OS = ["PRINTER & SUPPLIES", "STATIONARY SUPPILIES", "OFFICE SUPPLIES"]
let SubCat_CP = ["KEYBOARD & MOUSE", "USB HUBS", "MICROPHONES & HEADPHONES", "COMPUTER SPEAKERS", "WEB CAM", "PC"]
let SubCat_LA = ["LAPTOP & NETBOOKS", "CHARGER & ADAPTERS", "BAG, CASE AND SLEEVES", "COOLING PAD"]
let SubCat_CC = ["MEMORY", "POWER AND CASE", "CPU COOLING FANS", "PCI CARDS", "GRAPHICS CARD", "OPTICAL DRIVERS", "MOTHER BOARDS"]
let SubCat_DS = ["USB FLASH DRIVE", "HDD SSD ENCLOSURES", "HARD DRIVE AND ACCESSORIES", "SOLID STATE DRIVES", "CARD READERS", "SECURE DIGITAL MEMORY CARD"]
let SubCat_NET = ["ROUTER", "REPEATER", "NETWORKING ADAPTERS ANTENNAS", "BLUETOOTH ADAPTERS & DANGLES", "NETWORKING CABLES & TOOLS"]
let Subcategory = [SubCat_OS, SubCat_CP, SubCat_LA, SubCat_CC, SubCat_DS, SubCat_NET]

//--SET COLUMN WIDTH--//
let column_1 = 10        // ITEM
let column_2 = 11        // ITEM DESCRIPTION
let column_3 = 24        // QTY
let column_4 = 11        // UNIT
let column_5 = 14        // UNIT PRICE
let column_6 = 16        // TOTAL
let column_7 = 11        // CODE
let column_8 = 11        // CODE

//--SAVED DATA--//
let OS_no = ["0", "1", "3", "4", "5", "6"]
let OS_brand = [
    ""
]
let OS_Description = [
    "Bond Paper Short",
    "Bond Paper Long",
    "Brown Envelope Long",
    "Brown Envelope Short",
    "Ballpen Panda",
    "Ballpen Faber"
]
let OS_Quantity = [
    "20",
    "20",
    "50",
    "50",
    "100",
    "75"
]
let OS_Unit = [
    "Realm",
    "Realm",
    "pcs",
    "pcs",
    "pcs",
    "pcs"
]
let OS_Price = ["200", "450"]
let OS_Total = ["hello", "hi"]
let OS_code = ["01001001", "01001002"]

let CA_no = ["0", "1", "3", "4", "5", "6"]
let CA_brand = [
    ""
]
let CA_Description = [
    "Bond Paper Short",
    "Bond Paper Long",
    "Brown Envelope Long",
    "Brown Envelope Short",
    "Ballpen Panda",
    "Ballpen Faber"
]
let CA_Quantity = [
    "20",
    "20",
    "50",
    "50",
    "100",
    "75"
]
let CA_Unit = [
    "Realm",
    "Realm",
    "pcs",
    "pcs",
    "pcs",
    "pcs"
]
let CA_Price = ["200", "450"]
let CA_Total = ["hello", "hi"]
let CA_code = ["01001001", "01001002"]

//--NESTED ARRAY--//
let OS_Details = [OS_no, OS_brand, OS_Description, OS_Quantity, OS_Unit, OS_Price, OS_Total, OS_code]
let CA_Details = [CA_no, CA_brand, CA_Description, CA_Quantity, CA_Unit, CA_Price, CA_Total, CA_code]

//--COULUMN WIDTH ARRAY--//
let Column_width = [column_1, column_2, column_3, column_4, column_5, column_6, column_7, column_8]


em() //call the function to run the statements inside it.

//----------------------------< F U N C T I O N S >-------------------------------//

function em() { //em function
    console.clear()
    console.log('   M O D E\n\n [1] - Input\n [2] - Category\n [3] - Table')

    let input = readline.question(' >: ')

    switch (input) {
        case '1':
            Data_input(OS_Details, heading_String)                    //ENTER NEW DATA TO THE NESTED ARRAY
            break
        case '2':
            console.clear()
            Category()
            em()
            break
        case '3':
            console.clear()
            table_Print(heading_String, OS_Details, Column_width)
            readline.question("< E N T E R >")
            em()
            break
        default:
            readline.question(' I N V A L I D ')        // PAUSE: ENTER TO GO BACK
            em()                                                   // GO BACK!
    }
}

function Category() {

    let index = choices(Category_list)
    choices(Subcategory[index])

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
                Category()
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

function Data_input(array, question) {

    let input
    let total

    do {

        let length = array[0].length

        console.clear();
        console.log("----------ITEM DETAILS-----------\n")

        for (let index = 0; index < array.length - 1; index++) {

            if (index == 0) {

                array[index][length] = (length + 1).toString()         // Item numbering

            } else if (index === array.length - 2) {

                array[index][length] = total.toString()               // Total Store to array 

            } else {

                input = readline.question(`${question[index]}: `)

                if (index === 2) {                                   // getting the quantity

                    total = Number(input)

                } else if (index == 4) {                            // multiplying the qty and the unit price

                    total *= Number(input)

                }
                if (input !== "Stop") {                             // abort

                    array[index][length] = input

                }

            }
        }

        input = readline.question("\n[Enter] to Continue\n[Stop] to exit\n-->: ")

    } while (input !== "Stop")

    em() // go back
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


