let jollibee = {
    name: 'jolibee',
    description: "Jollibee is that happy place where one can savor a crispy chicken with joy, hence the name Chickenjoy!",
    category: [{
        name: 'Burger and Sandwich',
        menu: [
            { name: 'champ', price: 128 },
            { name: 'cheesy bacon mushroom Champ', price: 118 },
            { name: 'Yum', price: 128 },
            { name: 'Yum and cheese', price: 128 },
            { name: 'Yum with TLC', price: 128 },
            { name: 'Cheesy Bacon Mashroom Yum', price: 128 },
            { name: 'Aloha Champ', price: 128 },
            { name: 'Jolly Hotdog Classic', price: 128 }
        ]
    }, {
        name: 'Chickenjoy',
        menu: [
            { name: '1pc Chickenjoy | original or Spicy |', price: 128 },
            { name: '2pc Chickenjoy | original or Spicy |', price: 118 },
            { name: '1pc Chickenjoy | original or Spicy | with Jolly Spagehetti', price: 128 },
            { name: '1pc Chickenjoy | original or Spicy | with palabok', price: 128 },
            { name: 'Chickenjoy Super Value Meals', price: 128 }
        ]
    }, {
        name: 'Rice Meals',
        menu: [
            { name: 'Unltimate Burger Steak ', price: 128 },
            { name: '1pc Burger Steak', price: 118 },
            { name: 'Pepper Beef', price: 128 },
            { name: 'Shanghai Roll', price: 128 },
        ]
    },
    ]
}
let mcdo = {
    name: 'Mcdonalds',
    description: "Jollibee is that happy place where one can savor a crispy chicken with joy, hence the name Chickenjoy!",
    category: [{
        name: 'Burgers',
        menu: [
            { name: 'Big Mac', price: 201 },
            { name: 'Burger McDo', price: 108 },
            { name: 'Cheeseburger', price: 124 },
            { name: 'Cheeseburger deluxe', price: 149 },
            { name: 'Cheesy Burger McDo', price: 119 },
            { name: 'Ebi Burger Meal', price: 177 },
            { name: 'McCrispy Chicken Fillet Sandwich', price: 119 },
            { name: 'Double Cheesburger', price: 166 },
            { name: 'filet-O-Fish', price: 172 },
            { name: 'McChicken', price: 172 },
            { name: 'Quarter Pounder with Cheese', price: 201 }

        ]
    }, {
        name: 'Chicken & Platters',
        menu: [
            { name: '1pc Chickenjoy | original or Spicy |', price: 128 },
            { name: '2pc Chickenjoy | original or Spicy |', price: 118 },
            { name: '1pc Chickenjoy | original or Spicy | with Jolly Spagehetti', price: 128 },
            { name: '1pc Chickenjoy | original or Spicy | with palabok', price: 128 },
            { name: 'Chickenjoy Super Value Meals', price: 128 }
        ]
    }, {
        name: 'Rice Meals',
        menu: [
            { name: 'Unltimate Burger Steak ', price: 128 },
            { name: '1pc Burger Steak', price: 118 },
            { name: 'Pepper Beef', price: 128 },
            { name: 'Shanghai Roll', price: 128 },
        ]
    },
    ]
}


let readline = require('readline-sync')
let heading_String = ["  F O O D  S H U F F L E  ", "  W . . T . . F  ", "  W H E R E ' S  T H E  F O O D  "]
let heading_length = 60
let menus=[jollibee,mcdo]

Menu(menus[choices(menus.map(x=>x.name))])

function Menu(obj) {

    //--SET COLUMN WIDTH--//
    let column_1 = 65       // ITEM
    let column_2 = 15        // ITEM DESCRIPTION
    let Column_width = [column_1, column_2]
    let heading = ['M E N U', 'P R I C E']
    let Output = []
    let index = choices(obj.category.map(x => x.name))

    console.clear()
    heading_String.forEach(x => Heading_Center(x, column_1 + column_2 + 3, "_"))
    obj.category.map(x => x.menu)[index].forEach(x => Output.push([x.name, x.price.toString()]))
    Heading_Center(`< ${spacing_(obj.category[index].name.toUpperCase())} >`, column_1 + column_2 + 3, '=', 1, 2)
    table_Print_Advance(heading, Column_width, NaN, '-')
    Output.forEach(x => table_Print_Advance(x, Column_width))
    Heading_Center(`< ${spacing_(obj.category[index].name.toUpperCase())} >`, column_1 + column_2 + 3, '=', 1, 1)

}
function choices(Assigned_array) {

    let elementCount = Assigned_array.length
    console.clear()
    heading_String.forEach(x => Heading_Center(x, heading_length, "_"))
    console.log('\n')
    Assigned_array.forEach(x => console.log(`[${Assigned_array.indexOf(x)}] - ${x}`))

    if (elementCount) {

        input = readline.question("\n >: ")

        if (input) {

            if (!(input < elementCount)) {
                readline.question('\n I N V A L I D  I N P U T')
                choices(Assigned_array)
            }

        } else {

            //main()

        }

    } else {
        Heading_Center(" A R R A Y  D O N T  H A V E  E L E M E N T S ", heading_length, " ", 4, 3)
        readline.question(" >: ")
        //main()
    }

    return input

}
function Heading_Center(text, length, char = ' ', spacing, spacing2) {

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
function table_Print_Advance(Text, length, index, space) {

    //-------------------------------------< TABULAR TEXT PRINT >--------------------------------------------//

    for (let i_Variable = 0; i_Variable < Text.length; i_Variable++) {      //SECOND LOOP VARIABLE INDEX

        //<-----------< SETUP >-------------->//
        let Text_Input = Text[i_Variable]                       // ARRAY OF STRING
        let Char_length = length[i_Variable]                   // ARRAY OF NUMBERS

        if (typeof Text_Input == 'object') {
            Text_Input = Text[i_Variable][index]               // ARRAY OF STRING (NESTED ARRAY)
        }

        let center = Math.ceil(Text_Input.length / 2)           // GETTING THE CENTER OF THE TEXT

        //-------------------------------------< MAIN CODE >---------------------------------------//
        process.stdout.write("║")

        for (let spaces_number = 0; spaces_number < (Math.ceil(Char_length / 2) - (center || 0)); spaces_number++) {
            Text_Input = ((space || ' ') + Text_Input + (space || ' ')).substring(0, Char_length)        // add spaces
        }

        process.stdout.write(Text_Input) // Printed by row

    }

    process.stdout.write("║\n")

}
function spacing_(text) {
    text = text.split('')
    return text.join(' ')
}


