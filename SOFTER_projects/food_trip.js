/*
this code will:
#randomly pick fast food, cafe, restaurant, CPU nearby foods, Milktea......
#help you, your friends and family decide where to eat

base on your:
budget & cravings

Ask:
category

Appendix:


References:
http://shemaegomez.com/list-of-milk-tea-places-in-iloilo/
https://www.tripadvisor.com.ph/Restaurants-g298466-Iloilo_City_Iloilo_Province_Panay_Island_Visayas.html
https://www.tripadvisor.com.ph/Restaurants-g298466-zfp58-Iloilo_City_Iloilo_Province_Panay_Island_Visayas.html
*/


const readline = require("readline-sync");

//---------------------<VARIABLES>-------------------------//

let input;
let random;
let Assigned_array;
let bisanDiin = false
let proceed = true
let ERROR = false

//---------------------------END----------------------------//



//FIRST_LOOP
while (proceed) {
    //---------------------<ARRAY_VARIABLES>---------------------//

    let BIN_milktea;
    let BIN_fastfoods;
    let BIN_cafe;
    let BIN_restaurant;
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

    let choices = new Array()
    let Category = new Array()
    let recent_numbers = new Array()
    let binary = new Array()

    //---------------------------END----------------------------//



    //-------------------Choices-PRINTER-Code---------------------//

    Assigned_array = location

    proceed = false

    console.clear()
    console.log("\n............FOOD SHUFFLE.........")
    console.log("  ............W..T..F.............")
    console.log("\n..........WHERE'S THE FOOD...........\n")

    //Print Elements of Assigned array
    for (let index = 0; index < Assigned_array.length - 2; index++) {
        console.log(` ${index} - ${Assigned_array[index]}`)
    }

    //ERROR message
    if (ERROR) {
        console.log("\n ! INVALID INPUT ! ")
        ERROR = false
    }

    input = readline.question("\nEnter No. : ")

    if (input !== "") {

        //this checks if there is a match in the choices
        for (let index = 0; index < Assigned_array.length - 2; index++) {

            if (Number(input) === index) {
                proceed = true
            }

        }

        ERROR = !proceed

    }

    //END-------------------Choices-PRINTER-Code---------------------END//


    //CHECK THE AVAILABLE RESTAURANT IN THE AREA 
    switch (input) {
        case "0":
            BIN_milktea = '0001111'
            BIN_fastfoods;
            BIN_cafe = '00010011'
            BIN_restaurant;
            break;
        case "1":
            BIN_milktea = 0
            BIN_fastfoods = 0
            BIN_cafe = 0
            BIN_restaurant = 0
            break;
        case "2":
            BIN_milktea = 0
            BIN_fastfoods = 0
            BIN_cafe = 0
            BIN_restaurant = 0
            break;
        case "3":
            BIN_milktea = 0
            BIN_fastfoods = 0
            BIN_cafe = 0
            BIN_restaurant = 0
            break;
        case "4":
            BIN_milktea = 0
            BIN_fastfoods = 0
            BIN_cafe = 0
            BIN_restaurant = 0
            break;
        case "5":
            BIN_milktea = 0
            BIN_fastfoods = 0
            BIN_cafe = 0
            BIN_restaurant = 0
            break;
        case "6":
            choices[choices.length] = "CPU_FOODS"
            Category[Category.length] = CPU
            break;
        default:
    }

    if (BIN_milktea !== undefined) {
        choices[choices.length] = "Milktea"
        Category[Category.length] = milktea
        binary[binary.length] = BIN_milktea
    }
    if (BIN_fastfoods !== undefined) {
        choices[choices.length] = "Fast Foods"
        Category[Category.length] = fastfoods
        binary[binary.length] = BIN_fastfoods
    }
    if (BIN_cafe !== undefined) {
        choices[choices.length] = "Cafe"
        Category[Category.length] = cafe
        binary[binary.length] = BIN_cafe
    }
    if (BIN_restaurant !== undefined) {
        choices[choices.length] = "Restaurant"
        Category[Category.length] = restaurant
        binary[binary.length] = BIN_restaurant
    }

    for (let index = 0; index < binary.length; index++) {

        for (let index2 = 0; index2 < Category[index].length; index2++) {

            if ((binary[index])[index2] !== '1') {
                delete (Category[index])[index2]
            }

        }

    }

    for (let index = 0; index < binary.length; index++) {

        for (let index2 = 0; index2 < Category[index].length; index2++) {

            console.log(Category[index])
            let x = readline.question(`${(Category[index])[index2]} - ${index2}`)


            if ((Category[index])[index2] === undefined) {

                (Category[index]).splice(index2, 1)
                index2 = -1

            }

        }

    }





    //KEEPS FIRST_LOOP LOOPING
    if (proceed) {

        //SECOND_LOOP
        while (proceed) {


            //AKA_RESTAURANT CATEGORY SHUFFLER
            bisanDiin = false

            //-------------------Choices-PRINTER-Code---------------------//

            Assigned_array = choices

            proceed = false

            console.clear()
            console.log("\n............FOOD SHUFFLE.........")
            console.log("  ............W..T..F.............")
            console.log("\n..........WHERE'S THE FOOD...........\n")

            //Print Elements of Assigned array
            for (let index = 0; index < Assigned_array.length; index++) {
                console.log(` ${index} - ${Assigned_array[index]}`)
            }

            //ERROR message
            if (ERROR) {
                console.log("\n ! INVALID INPUT ! ")
                ERROR = false
            }

            input = readline.question("\nEnter No. : ")

            if (input !== "") {

                //this checks if there is a match in the choices
                for (let index = 0; index < Assigned_array.length; index++) {

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

                //THIRD_LOOP
                while (Selection !== "") {

                    console.clear()

                    switch (Selection) {

                        case "A":

                            //------------<THIS CODE RANDOMIZED THE SELETED CATEGORY>----------//

                            //ARRAY OF DEFINED VARIABLES
                            Assigned_array = Category

                            //CHECKING
                            if (choices[input] === "Bisan Di'in") {
                                bisanDiin = true
                            }

                            //SHUFFLE THE CATERGORY
                            if (bisanDiin) {
                                input = Math.trunc((Math.random() * 10) + 1) % Assigned_array.length
                            }

                            //LOCATION ASSIGNING//


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



                            //DEBUG

                            /* 
                            console.log(`\nArray Length: ${Category[input].length}`)
                            console.log(`random OUTPUT: ${random}`)
                            console.log(recent_numbers)
                            */

                            //MAIN Ouput
                            console.log(`\n.....${choices[input]}.....`)
                            console.log(`\nRandom Picked: ${(Assigned_array[input])[random]}`)
                            console.log(`\nLocation: ${location[random]}`)

                            break

                        case "B":

                            console.log(`\n.....${choices[input]}.....`)

                            for (let index = 0; index < Category[input].length; index++) {
                                console.log(` ${index + 1} - ${(Category[input])[index]}`)
                            }

                            break

                        default:

                            console.clear()
                            console.log("! INVALID INPUT !")

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

        }

        proceed = true

    } else {

        proceed = true

    }

}
