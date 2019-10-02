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
let location = [
    {
        name: "Festive Mall", BIN_milktea: '00011101', BIN_fastfoods: '1100011', BIN_cafe: '000010001001', BIN_restaurant: '00011111111111111111'
    },
    {
        name: "Festive Walk", BIN_milktea: '0000001', BIN_cafe: '001100000100111', BIN_restaurant: '0000000000000000000111111111'
    },
    {
        name: "SM City Iloilo", BIN_milktea: '0001111', BIN_fastfoods: '1111111', BIN_cafe: '110011111', BIN_restaurant: '1111101000001011'
    },
    { name: "Atria" },
    { name: "Smallville" },
    { name: "Times Square" },
    { name: "Central Philippine University" }
]

//-----------------<Functions>-----------------------//
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

    let location_index = choices(location)


/*     let Cat_CPU = [CPU_uyBuilding, CPU_nearby]
    let string_CPU = ["Uy Building", "Nearby Restaurant", "Bisan Di'in"]
    randomly(Cat_CPU, string_CPU, location, location_index) */


    let binary = [location[location_index].BIN_milktea, location[location_index].BIN_fastfoods, location[location_index].BIN_cafe, location[location_index].BIN_restaurant];
    let Category_setOf_string = ["Milktea", "Fast Foods", "Cafe", "Restaurant"];
    let Category_setOf_array = [milktea, fastfoods, cafe, restaurant];

    List_filter(binary, Category_setOf_string, Category_setOf_array);
    randomly(Category_setOf_array, Category_setOf_string, location.map(x => x.name), location_index);

}
function Heading_Center(text, length, char, spacing, spacing2) {

    if (text.length >= length) {
        if (spacing > 0) {
            return Heading_Center(text + '\n', length, char, spacing - 1, spacing2)
        } else if (spacing2 > 0) {
            return Heading_Center('\n' + text, length, char, spacing, spacing2 - 1)
        } else {
            return console.log(`${text}`);
        }
    }
    return Heading_Center((char + text + char).substr(0, length), length, char, spacing, spacing2)
}
function choices(Assigned_array) {

    let elementCount = Assigned_array.length
    console.clear()
    heading_String.forEach(x => Heading_Center(x, heading_length, "_"))
    console.log('\n')
    Assigned_array.map(x => x.name||x).forEach(x => console.log(`[${Assigned_array.map(x => x.name||x).indexOf(x)}] - ${x}`))

    if (elementCount) {

        input = readline.question("\n >: ")

        if (input) {

            switch (input) {
                case 'add':
                    add_(Assigned_array)
                    break
                case 'remove':
                    remove_(Assigned_array)
                    break
            }

            if (!(input < elementCount)) {
                readline.question('\n I N V A L I D  I N P U T')
                choices(Assigned_array)
            }

        } else {

            main()

        }

    } else {
        Heading_Center(" A R R A Y  D O N T  H A V E  E L E M E N T S ", heading_length, " ", 4, 3)
        readline.question(" >: ")
        main()
    }

    return input

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

        if (array_bin[index] === undefined) { // undefined means no food available
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

    let recent_numbers = []               // list of indexes that already drawn 
    let mode = "A"                        // default.. shuffle MODE
    let bisanDiin = false;                // Random the category if set true
    let input = choices(Heading)          // Input Index
    let Assigned_array     // array of choices

    do {

        switch (mode) {

            case "A":

                //-----------------<THIS CODE RANDOMIZED THE SELETED CATEGORY>---------------//
                //CHECKING
                if (Heading[input] === "Bisan Di'in") { bisanDiin = true }

                //SHUFFLE THE CATERGORY
                if (bisanDiin) { input = Math.trunc((Math.random() * 10) + 1) % array.length }

                // array of choices
                Assigned_array = array[input]

                //----------------------< MAIN_SHUFFLER >--------------------------//

                random = Math.trunc((Math.random() * 100) + 1) % Assigned_array.length

                if (recent_numbers.length < Assigned_array.length) {

                    //match found add one
                    while (recent_numbers.includes(random)) {
                        random = (random + 1) % Assigned_array.length
                    }

                } else {

                    //reset or empty array
                    recent_numbers = []

                }

                //listing/storing the random output
                recent_numbers.push(random)

                //END----------------------< MAIN_SHUFFLER >--------------------------END//

                console.clear()

                if (DEBUG) {
                    console.log(`\nArray Length: ${Assigned_array.length}`)
                    console.log(`random OUTPUT: ${random}`)
                    console.log(recent_numbers)
                }


                //MAIN Ouput
                Heading_Center(" W H E R E ' S  T H E  F O O D ", heading_length, " ", 0)
                Heading_Center(" R A N D O M  P I C K E D ! ", heading_length, " ", 1)
                Heading_Center(` TYPE: ${Heading[input].toUpperCase()}  `, heading_length, "=", 1)
                Heading_Center(`${Assigned_array[random].toUpperCase()}`, heading_length, " ", 1, 0)
                Heading_Center(`<  Location: ${location[locIndex].toUpperCase()}  >`, heading_length, "-")


                //END-----------------<THIS CODE RANDOMIZED THE SELETED CATEGORY>---------------END//

                break

            case "B":

                //------------<SHOW LIST >---------------//
                console.clear()
                Heading_Center(" W H E R E ' S  T H E  F O O D ", heading_length, " ", 1)
                Heading_Center(`  ${Heading[input]}  `, heading_length, "=", 1)
                Assigned_array.forEach(x => console.log(`[${Assigned_array.indexOf(x) + 1}] - ${x}`))
                //END------------<SHOW LIST >---------------END//

                break

            default:
                ERROR()

        }

        if (bisanDiin) { console.log("\nBISAN DI'IN is active!") }

        console.log("\n[A] - Spin Again.\n[B] - Show List.\n[ENTER] - Back")

        mode = readline.question("\n >: ").toUpperCase()

    } while (mode !== "")

    randomly(array, Heading, location, locIndex)
}
function add_(Assigned_array) {

    let input = readline.question(' >: ')
    Assigned_array.push({name:input})
    main()

}
function remove_(Assigned_array) {

    let input = readline.question(' >: ')
    Assigned_array.splice(input, 1)
    main()

}

//R U N
main()
