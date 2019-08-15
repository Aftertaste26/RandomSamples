/*
Goal:
#randomly pick fast food, cafe, restaurant, CPU nearby foods, Milktea......
#help you, your friends and family decide where to eat base on your budget & cravings

Ask:
*budget
*category
*location

Appendix:

References:
http://shemaegomez.com/list-of-milk-tea-places-in-iloilo/
https://www.tripadvisor.com.ph/Restaurants-g298466-Iloilo_City_Iloilo_Province_Panay_Island_Visayas.html
https://www.tripadvisor.com.ph/Restaurants-g298466-zfp58-Iloilo_City_Iloilo_Province_Panay_Island_Visayas.html
*/


const readline = require("readline-sync");
const chalk = require('chalk')

//---------------------<VARIABLES>-------------------------//

let index;
let input;
let random;
let location_no;
let Assigned_array;
let bisanDiin = false
let proceed = true
let ERROR = false
let DEBUG = false
let CHALK = true

//---------------------------END----------------------------//

//-----------------------<STYLING>-------------------------//
let heading_String = ["FOOD SHUFFLE", "W..T..F", "WHERE'S THE FOOD"]
let heading_length = 50
let heading = chalk.reset
let body = chalk.reset
let input_chalk = chalk.reset

if (CHALK) {
    heading = chalk.bold.greenBright
    body = chalk.white
    Index_chalk = chalk.yellowBright
    input_chalk = chalk.bold.green
    Error_chalk = chalk.bold.bgRed
}
//END-----------------------<STYLING>-------------------------END//


//FIRST_LOOP
while (proceed) {
    //---------------------<ARRAY_VARIABLES>---------------------//
    let CPU = [
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
        "Central Philippine University",
        "@CPU Uy Building",
        "@CPU Near gate 3"
    ]
    //---------------------------END----------------------------//



    //-------------------Choices-PRINTER-Code---------------------//
    //#LOCATION

    Assigned_array = location

    proceed = false


    //---------------------------<TEXT HEADER SPACING AND BOARDER>-----------------------------//

    console.clear()
    for (index = 0; index < heading_String.length; index++) {

        let center = Math.floor(heading_String[index].length / 2)
        let spaces = ""

        for (let spaces_number = 0; spaces_number < ((heading_length / 2) - center); spaces_number++) {
            spaces += "_"
        }

        if (center % 2 === 0) {
            console.log(heading(spaces + heading_String[index] + spaces))
        } else {
            console.log(heading(spaces + heading_String[index] + (spaces.slice(1))))
        }
    }
    console.log("\n")

    //END---------------------------<TEXT HEADER SPACING AND BOARDER>-----------------------------END//


    //Print Elements of Assigned array
    for (index = 0; index < Assigned_array.length - 2; index++) {
        console.log(` ${Index_chalk(index)} - ${body(Assigned_array[index])}`)
    }

    //ERROR message
    if (ERROR) {
        console.log(Error_chalk("\n ! INVALID INPUT ! "))
        ERROR = false
    }

    input = readline.question(input_chalk("\nEnter No. : "))

    if (input !== "") {

        //this checks if there is a match in the location index
        for (index = 0; index < Assigned_array.length - 2; index++) {

            if (Number(input) === index) {
                proceed = true
                location_no = input
            }

        }

        ERROR = !proceed

    }

    //END-------------------Choices-PRINTER-Code---------------------END//



    //===================< PREPARES THE LIST >==========================//

    //CHECKS THE AVAILABLE RESTAURANT IN THE AREA 
    let BIN_milktea;
    let BIN_fastfoods;
    let BIN_cafe;
    let BIN_restaurant;
    let CPU_sw = false;

    switch (input) {
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
            BIN_fastfoods;
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
            CPU_sw = true;
            break;
    }


    //DELETES CHOICES THAT ARE EMPTY #NO BINARY ASSIGNED
    let binary = [BIN_milktea, BIN_fastfoods, BIN_cafe, BIN_restaurant];
    let Category_setOf_string = ["Milktea", "Fast Foods", "Cafe", "Restaurant"];
    let Category_setOf_array = [milktea, fastfoods, cafe, restaurant];
    let included = 0; //number of included element

    for (index = 0; index < binary.length; index++) {

        if (DEBUG) {
            console.clear()
            console.log(binary)
            console.log(`Index: ${index} length ${binary.length} Included ${included}`)
            readline.question(`${binary[index]}`)
        }

        if (binary[index] === undefined) {
            binary.splice(index, 1)
            Category_setOf_string.splice(index, 1)
            Category_setOf_array.splice(index, 1)
            index = -1 + included
        } else {
            included++
        }
    }

    //DELETES THE NOT INCLUDED RESTO IN AN ARRAY #notAvailableInTheArea
    for (index = 0; index < binary.length; index++) {

        let limit = Category_setOf_array[index].length
        let number_of_cycle = 0     //counts the loop
        let index2 = 0              //to get the the variale in the array
        included = 0                //number of included element

        while (number_of_cycle < limit) {

            if (DEBUG) {
                console.clear()
                console.log(Category_setOf_array[index])
                console.log(`Number of cycles: ${number_of_cycle} < limit ${limit} Index 2: ${index2} length ${Category_setOf_array[index].length} `)
                readline.question(`${(Category_setOf_array[index])[index2]} - ${(binary[index])[number_of_cycle]}`)
            }

            if ((binary[index])[number_of_cycle] !== '1') {
                Category_setOf_array[index].splice(index2, 1)
                index2 = -1 + included
            } else {
                included++
            }
            number_of_cycle++
            index2++
        }

    }

    //END===================< PREPARE THE LIST >==========================END//



    //KEEPS FIRST_LOOP LOOPING
    if (proceed) {

        //SECOND_LOOP
        while (proceed) {


            //AKA_RESTAURANT CATEGORY SHUFFLER
            bisanDiin = false

            //-------------------Choices-PRINTER-Code---------------------//
            //#CATEGORY

            Assigned_array = Category_setOf_string

            proceed = false


            //---------------------------<TEXT HEADER SPACING AND BOARDER>-----------------------------//

            console.clear()
            for (index = 0; index < heading_String.length; index++) {

                let center = Math.floor(heading_String[index].length / 2)
                let spaces = ""

                for (let spaces_number = 0; spaces_number < ((heading_length / 2) - center); spaces_number++) {
                    spaces += "_"
                }

                if (center % 2 === 0) {
                    console.log(heading(spaces + heading_String[index] + spaces))
                } else {
                    console.log(heading(spaces + heading_String[index] + (spaces.slice(1))))
                }
            }
            console.log("\n")

            //END---------------------------<TEXT HEADER SPACING AND BOARDER>-----------------------------END//


            //Print Elements of Assigned array
            for (index = 0; index < Assigned_array.length; index++) {
                console.log(` ${Index_chalk(index)} - ${body(Assigned_array[index])}`)
            }

            //ERROR message
            if (Assigned_array.length === 0) {

                //---------------------------<TEXT HEADER SPACING AND BOARDER>-----------------------------//

                console.clear()
                for (index = 0; index < heading_String.length; index++) {

                    let center = Math.floor(heading_String[index].length / 2)
                    let spaces = ""

                    for (let spaces_number = 0; spaces_number < ((heading_length / 2) - center); spaces_number++) {
                        spaces += "_"
                    }

                    if (center % 2 === 0) {
                        console.log(heading(spaces + heading_String[index] + spaces))
                    } else {
                        console.log(heading(spaces + heading_String[index] + (spaces.slice(1))))
                    }
                }
                console.log("\n")

            //END---------------------------<TEXT HEADER SPACING AND BOARDER>-----------------------------END//

                console.log(Error_chalk("       !STILL WORKING ON IT!       "))
                console.log(Error_chalk("\n     !press enter to go back!      "))
            }

            //ERROR message
            if (ERROR) {
                console.log(Error_chalk("\n ! INVALID INPUT ! "))
                ERROR = false
            }

            if (!CPU_sw) {

                input = readline.question(input_chalk("\nEnter No. : "))

            } else {

                Assigned_array[Assigned_array.length] = "CPU_FOODS"
                Category_setOf_array[Category_setOf_array.length] = CPU
                input = 0

            }

            if (input !== "") {

                //this checks if there is a match in the Category_setOf_string index
                for (index = 0; index < Assigned_array.length; index++) {

                    if (Number(input) === index) {
                        proceed = true
                    }

                }

                ERROR = !proceed

            }

            //END-------------------Choices-PRINTER-Code---------------------END//



            //KEEPS SECOND_LOOP LOOPING
            if (proceed) {

                let Selection = "A" //default.. shuffle MODE
                let recent_numbers = new Array()

                //THIRD_LOOP
                while (Selection !== "") {

                    console.clear()

                    switch (Selection) {

                        case "A":

                            //-----------------<THIS CODE RANDOMIZED THE SELETED CATEGORY>---------------//

                            //ARRAY OF DEFINED VARIABLES
                            Assigned_array = Category_setOf_array

                            //CHECKING
                            if (Category_setOf_string[input] === "Bisan Di'in") {
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


                            if (DEBUG) {
                                console.log(`\nArray Length: ${Category_setOf_array[input].length}`)
                                console.log(`random OUTPUT: ${random}`)
                                console.log(recent_numbers)
                            }


                            //MAIN Ouput
                            console.log(`\n..........${Category_setOf_string[input]}..........`)
                            console.log("\x1b[36m%s\x1b[34m%s\x1b[0m", "\n.....Random Picked..... ", `\n\n   ${(Assigned_array[input])[random]}`)
                            console.log("\x1b[33m%s\x1b[0m", `\nLocation: ${location[location_no]}`)


                            //END-----------------<THIS CODE RANDOMIZED THE SELETED CATEGORY>---------------END//

                            break

                        case "B":

                            //------------<SHOW LIST >---------------//

                            console.log(`\n.....${Category_setOf_string[input]}.....`)

                            for (index = 0; index < Category_setOf_array[input].length; index++) {
                                console.log(` ${index + 1} - ${(Category_setOf_array[input])[index]}`)
                            }

                            //END------------<SHOW LIST >---------------END//

                            break

                        default:

                            console.clear()
                            console.log(Error_chalk("\n! INVALID INPUT !"))

                    }

                    console.log("\n A - Spin Again.\n B - Show List.\n ENTER - Back")

                    Selection = readline.question("\nEnter No. : ")

                }

                recent_numbers = new Array()

            } else {

                //ERROR input                        
                if (ERROR) {
                    proceed = true
                } else {
                    proceed = false
                }

            }

            if (CPU_sw) {
                proceed = false
            }

        }

        proceed = true

    } else {

        proceed = true

    }

}
