/*
Goal:
#randomly pick fast food, cafe, restaurant, CPU nearby foods, Milktea......
#help you, your friends and family decide where to eat base on your budget & cravings

Ask:
*location
*CATEGORY

*/

const readline = require("readline-sync");
let DEBUG = false
let heading_String = ["  F O O D  S H U F F L E  ", "  W . . T . . F  ", "  W H E R E ' S  T H E  F O O D  "]
let heading_length = 60

main()

function main() {

    let CPU_uyBuilding = [
        "Lugawoogaw",
        "Paohaus",
        "Swedin's Meal",
        "Mr.Fruity",
        "Laylam",
        "Valmont Food Kiosk",
        "Kutsara't Yahong",
        "Chicken den",
        "Yan-yan Food House",
        "Kimicon Foods",
        "Double John's BBQ and Restaurant"
    ]
    let CPU_nearby = [
        "Green Island",
        "Walk the talk"
    ]
    let milktea = [
        "Serenity",
        "Ho Cha",
        "Toni’s Bubble Tea Shop",
        "Gong Cha",
        "Macao Imperial Tea",
        "Chatime",
        "Sharetea",
        "Infinitea"
    ]
    let fastfoods = [
        "Jollibee",
        "McDonalds",
        "Chowking",
        "Greenwich",
        "Burgerking",
        "KFC",
        "Mang Inasal"
    ]
    let cafe = [
        "Nicolette Bakery & Cafe",
        "J.Co Coffee and Donuts",
        "Masu Cafe",
        "Dova Brunch Cafe",
        "Starbucks Coffee",
        "Krispy Cream",
        "Tom N Toms",
        "Bo's Coffee",
        "Coffeebreak Cafe",
        "Cafe Panay by PTSI",
        "The Coffee Bean an Tea Leaf",
        "La lola",
        "Book Latte",
        "Adeas Cafe",
        "13th Street Expresso Coffee Shop"
    ]
    let restaurant = [
        //sm
        "Vikings Luxury Buffet",
        "Live by Healthy Kitchen",
        "Cabalen",
        //festive mall
        "Giligans",
        "Bigby's",
        "The Summer House",
        "Pepper Lunch Expresss",
        "The Original Joe's Grill",
        "Chef Mong's Boneless Lechon",
        "Pares Jimburg",
        "Binalot",
        "Luna'z",
        "Baliwag",
        "Sabor Ilonggo",
        "Bracq's Deli",
        "Pizza Hut",
        "Classic Savory",
        "Kuya J",
        "Kimstaurant",
        //festive walk
        "Carcosa",
        "Sunny Side Up",
        "Lechon Republic",
        "Jip Bab",
        "Lorenzo",
        "Buto't Balat",
        "Casa Iberica",
        "Mamusa Art Bistro",
        "Buto't Balat"
    ]
    let location = [
        "Festive Mall",
        "Festive Walk",
        "SM City Iloilo",
        "Atria",
        "Smallville",
        "Times Square",
        "Central Philippine University"
    ]

    //CHECKS THE AVAILABLE RESTAURANT IN THE AREA 
    let BIN_milktea;
    let BIN_fastfoods;
    let BIN_cafe;
    let BIN_restaurant;

    let location_index = choices(location)

   

    switch (location_index) {
        case "0"://FESTIVE MALL
            BIN_milktea = '00011101';
            BIN_fastfoods = '1100011';
            BIN_cafe = '000010001001';
            BIN_restaurant = '00011111111111111111';
            break;
        case "1"://FESTIVE WALK
            BIN_milktea = '0000001';
            BIN_cafe = '001100000100111';
            BIN_restaurant = '0000000000000000000111111111';
            break;
        case "2"://SM CITY
            BIN_milktea = '0001111';
            BIN_fastfoods = '1111111';
            BIN_cafe = '110011111';
            BIN_restaurant = '1111101000001011';
            break;
        case "3"://ATRIA
            BIN_milktea;
            BIN_fastfoods;
            BIN_cafe;
            BIN_restaurant;
            break;
        case "4"://SMALLVILLE
            BIN_milktea;
            BIN_fastfoods="011110"
            BIN_cafe;
            BIN_restaurant;
            break;
        case "5"://TIMES SQUARE
            BIN_milktea;
            BIN_fastfoods;
            BIN_cafe;
            BIN_restaurant;
            break;
        case "6"://CPU
            let Cat_CPU = [CPU_uyBuilding, CPU_nearby]
            let string_CPU = ["Uy Building", "Nearby Restaurant", "Bisan Di'in"]
            randomly(Cat_CPU, string_CPU, location, location_index)
            break;
        case "7":
            main(true)
        default:
            ERROR()

    }

    let binary = [BIN_milktea, BIN_fastfoods, BIN_cafe, BIN_restaurant];
    let Category_setOf_string = ["Milktea", "Fast Foods", "Cafe", "Restaurant"];
    let Category_setOf_array = [milktea, fastfoods, cafe, restaurant];
    List_filter(binary, Category_setOf_string, Category_setOf_array);
    randomly(Category_setOf_array, Category_setOf_string, location, location_index);
}

//-----------------<Functions>-----------------------//

function choices(Assigned_array) {

    console.clear()

    Heading_Center(heading_String, heading_length, "_", 2)

    let index;

    for (index = 0; index < Assigned_array.length; index++) {
        console.log(`[${index}] - ${Assigned_array[index]}`)
    }

    if (index !== 0) {

        input = readline.question("\n >: ")

        if (input < index) {

            if (input === '') {
                main()
            }

        } else {

            readline.question('\n I N V A L I D  I N P U T')
            choices(Assigned_array)

        }

    } else {
        Heading_Center(" A R R A Y  D O N T  H A V E  E L E M E N T S ", heading_length, " ", 4, 3)
        readline.question(" >: ")
        main()
    }

    return input

}        
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

        for (let spacesCount = 0; spacesCount < Length; spacesCount++) {

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
function ERROR() {
    console.clear()
    Heading_Center(" W H E R E ' S  T H E  F O O D ", heading_length, " ", 1)
    Heading_Center(" I N V A L I D  I N P U T ", heading_length, " ", 1, 1)
}
function randomly(array, Heading, location, locIndex) {

    let recent_numbers = []         // list of indexes that already drawn 
    let mode = "A"                  // default.. shuffle MODE
    let bisanDiin = false;          // Random the category if set true
    let Assigned_array = array      // array of choices
    let input = choices(Heading)    // Input Index

    do {

        switch (mode) {

            case "A":

                //-----------------<THIS CODE RANDOMIZED THE SELETED CATEGORY>---------------//
                //CHECKING
                if (Heading[input] === "Bisan Di'in") {
                    bisanDiin = true
                }

                //SHUFFLE THE CATERGORY
                if (bisanDiin) {
                    input = Math.trunc((Math.random() * 10) + 1) % Assigned_array.length
                }

                //----------------------< MAIN_SHUFFLER >--------------------------//

                random = Math.trunc((Math.random() * 100) + 1) % Assigned_array[input].length

                if (recent_numbers.length < Assigned_array[input].length) {

                    //this check a number match in the array.
                    for (let check = 0; check < Assigned_array[input].length; check++) {

                        //match found add one
                        if (recent_numbers[check] === random) {
                            random = (random + 1) % Assigned_array[input].length
                            check = 0;
                        }

                    }

                } else {

                    //reset or empty array
                    recent_numbers = new Array()

                }

                //listing/storing the number output by random
                recent_numbers[recent_numbers.length] = random

                //END----------------------< MAIN_SHUFFLER >--------------------------END//

                console.clear()

                if (DEBUG) {
                    console.log(`\nArray Length: ${array[input].length}`)
                    console.log(`random OUTPUT: ${random}`)
                    console.log(recent_numbers)
                }


                //MAIN Ouput
                Heading_Center(" W H E R E ' S  T H E  F O O D ", heading_length, " ", 0)
                Heading_Center(" R A N D O M  P I C K E D ! ", heading_length, " ", 1)
                Heading_Center(` TYPE: ${Heading[input].toUpperCase()}  `, heading_length, "=", 1)
                Heading_Center(`${(Assigned_array[input])[random].toUpperCase()}`, heading_length, " ", 1, 0)
                Heading_Center(`<  Location: ${location[locIndex].toUpperCase()}  >`,heading_length,"-")


                //END-----------------<THIS CODE RANDOMIZED THE SELETED CATEGORY>---------------END//

                break

            case "B":

                //------------<SHOW LIST >---------------//
                console.clear()
                Heading_Center(" W H E R E ' S  T H E  F O O D ", heading_length, " ", 1)
                Heading_Center(`  ${Heading[input]}  `, heading_length, "=", 1)

                for (index = 0; index < array[input].length; index++) {
                    console.log(`[${index + 1}] - ${(array[input])[index]}`)
                }

                //END------------<SHOW LIST >---------------END//

                break

            default:
                ERROR()

        }

        if (bisanDiin) {
            console.log("\nBISAN DI'IN is active!")
        }
        console.log("\n[A] - Spin Again.\n[B] - Show List.\n[ENTER] - Back")

        mode = readline.question("\n >: ")

    } while (mode !== "")

    randomly(array, Heading, location, locIndex)
}