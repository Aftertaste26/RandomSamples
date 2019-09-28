function List_filter(array_bin, array_string, array_var) {

    //DELETES CHOICES THAT ARE EMPTY #NO BINARY ASSIGNED

    let included = 0; //number of included element

    for (let index = 0; index < array_bin.length; index++) {

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

let rd = require('readline-sync')
let binary = ['0', '111', '010', '110'];
let Category_setOf_string = ["Milktea", "Fast Foods", "Cafe", "Restaurant"];
let Category_setOf_array = [milktea, fastfoods, cafe, restaurant];
//List_filter(binary, Category_setOf_string, Category_setOf_array); 

/* console.log(milktea)
console.log(fastfoods)
console.log(cafe)
console.log(restaurant) */
let str = '1'

function Binary_filter(binary, array) {

    for (const i in binary) {

        let bin = binary[i].split('')
        let arr = array[i]
        let set = []
        arr.forEach(x => set.push(x))
        set.forEach(x => {

            if (bin[arr.indexOf(x)] == 0 || !bin[arr.indexOf(x)]) {

                bin.splice(arr.indexOf(x), 1);
                arr.splice(arr.indexOf(x), 1);

            }
        })

    }
}


Binary_filter(binary, Category_setOf_array, Category_setOf_string)



console.log(milktea)
console.log(fastfoods)
console.log(cafe)
console.log(restaurant)
console.log(Category_setOf_string)


/*
console.clear()
console.log(str)
console.log(binary)
console.log(array)
console.log(x)
console.log(set.indexOf(x))
console.log(binary[array.indexOf(x)])
rd.question(binary[array.indexOf(x)] != 1) */
