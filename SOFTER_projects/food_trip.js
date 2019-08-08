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

let CPU = ["Lugawoogaw",
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

let milktea = ["Serenity",
    "Ho Cha",
    "Toni’s Bubble Tea Shop",
    "Gong Cha",
    "Macao Imperial Tea",
    "Chatime",
    "Sharetea",
    "Infinitea"]


let fastfoods = ["Jollibee",
    "McDonalds",
    "Chowking",
    "Greenwich",
    "Burgerking",
    "KFC",
    "Mang Inasal"]

let cafe = ["J.Co Coffee and Donuts",
    "Masu Cafe",
    "Dova Brunch Cafe",
    "Starbucks Coffee",
    "Krispy Cream",
    "Tom N Toms",
    "Bo's Coffee",
    "Dunkin' Donuts",
    "Mister Dunot",
    "Coffeebreak Cafe",
    "Cafe Panay by PTSI",
    "The Coffee Bean an Tea Leaf",
    "La lola",
    "Book Latte",
    "Adeas Cafe",
    "13th Street Expresso Coffee Shop"
]

let restaurant = ["Nicolette Bakery & Cafe",
    "7 Fishes by Coco Veranda",
    "Cabalen",
    "Bigby's",
    "Tatoy's Manokan and Seafoods",
    "Ponsyon by Breakthrough",
    "Breakthrough Restaurant Ililo",
    "Troi OI",
    "Netong's Original Special La Paz Batchoy",
    "Roberto's",
    "Punot",
    "Buto't Balat",
    "Vikings Luxury Buffet",
    "Bavarian German Restaurant",
    "Live by Healthy Kitchen",
    "Mango Tree",
    "Giligans",
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
    "Carcosa",
    "Sunny Side Up",
    "Lechon Republic",
    "Jip Bab",
    "Lorenzo",
    "Buto't Balat",
    "K-Spice",
    "Casa Iberica",
    "Mamusa Art Bistro"

]


let location = ["Festive Mall",
    "Festive Walk",
    "SM City Manduriao",
    "@CPU Uy Building",
    "@CPU Near gate 3"
]

let choices = ["CPU Nearby Foods",
    "Milktea",
    "Fast Foods",
    "Cafe",
    "Restaurant",
    "Bisan Di'in"
]


let Category = [CPU,
    milktea,
    fastfoods,
    cafe,
    restaurant
]


//-------------------------------------------------//


let input = "y"
let random;
let recent_numbers = new Array()
let bisanDiin = false
let proceed = false
let recent_input;


while (input === "y" || input === "n") {

    if (input !== "n") {

        bisanDiin = false
        proceed = false

        console.clear()

        console.log("\n.........FOODTRIP RANDOMIZER.........")
        console.log("  ............W..T..F.............")
        console.log("\n..........WHERE'S THE FOOD...........\n")

        //Print choices
        for (let index = 0; index < choices.length; index++) {
            console.log(` ${index} - ${choices[index]}`)
        }


        input = readline.question("\nEnter No. : ")


        //this checks if there is a match in the choices
        for (let index = 0; index < choices.length; index++) {

            if (Number(input) === index) {
                proceed = true
            }

        }
    } else {

        input = recent_input

    }


    //THIS CODE RANDOMIZED THE SELETED CATEGORY
    if (proceed === true && input !== "") {

        let Selection = "A"

        while (Selection !== "") {

            console.clear()

            switch (Selection) {

                case "A":


                    if (choices[input] === "Bisan Di'in") {
                        bisanDiin = true
                    }

                    //Randomized the category
                    if (bisanDiin) {
                        input = Math.trunc((Math.random() * 10) + 1) % Category.length
                    }

                    random = Math.trunc((Math.random() * 100) + 1) % Category[input].length

                    if (recent_numbers.length < Category[input].length) {

                        //this check a number match in the array.
                        for (let check = 0; check < Category[input].length; check++) {

                            //match found add one
                            if (recent_numbers[check] === random) {
                                random = (random + 1) % Category[input].length
                                check = 0;
                            }

                        }

                    } else {

                        //reset or empty array
                        recent_numbers = new Array()

                    }

                    //location assigning
                    
                    if(random<)

                    //listing/storing the number output by random
                    recent_numbers[recent_numbers.length] = random

                    //DEBUG
                    console.log(`\nArray Length: ${Category[input].length}`)
                    console.log(`random OUTPUT: ${random}`)
                    console.log(recent_numbers)

                    //MAIN Ouput
                    console.log(`\n.....${choices[input]}.....`)
                    console.log(`\nRandom Picked: ${(Category[input])[random]}`)
                    console.log(`\nLocation: ${(location[input])[random]}`)

                    break

                case "B":

                    console.log(`\n.....${choices[input]}.....`)

                    for (let index = 0; index < Category[input].length; index++) {
                        console.log(` ${index+1} - ${(Category[input])[index]}`)
                    }

                    break

                default:

                    console.clear()
                    console.log("! INVALID INPUT !")

            }

            console.log("\n A - Spin Again.\n B - Show List.\n enter - Go back.")

            Selection = readline.question("\nEnter No. : ")


        }

        recent_numbers = new Array()
        recent_input = input
        input = readline.question("\nGo back? y/n: ")

    } else {

        console.log("\n! INVALID INPUT ! \n")

    }

} 