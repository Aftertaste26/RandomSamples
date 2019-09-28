const readline = require('readline-sync')

let debug = false  // DEBUGGING

let num = 0    // S W I T C H
let i = 0      // S T O C K  INDEX
let j = 0      // T Y P E  INDEX
let k = 0      // B R A N D  INDEX
let l = 0      // S P E C I F I C A T I O N  INDEX
let m = 0      // D E S C R I P T I O N  INDEX

let label
let input
let setup_array
let reprint_array

let heading = ['C A T E G O R Y', 'T Y P E', 'B R A N D', 'S P E C S', 'D E S C R I P T I O N', 'P R I C E', 'Q U A N T I T Y']
let stocks = [{ name: 'Writing material', type: [{ name: 'Pen', brand: [{ name: 'Pilot', specs: [{ name: 'G-tech', description: [{ name: '5.0', price: '10', qty: '10' }] }] }] }] }]

console.log(JSON.stringify(stocks))

Choices()

function Choices() {

    i = 0                // =========================================//
    j = 0                //  R E S E T                               //
    k = 0                //  B A C K   TO   E M P T Y  OR  Z E R O   //
    l = 0                //                                          //
    m = 0                // =========================================//
    reprint_array = []

    let index = 0        //  G E T T I N G   T H E   I N D E X  //



    // AS LONG AS THE ELEMENT EXIST THIS LOOP WILL CONTINUE LOOPING AND THE CONDITION IS TRUE
    for (let Main_index = 0; Main_index < heading.length; Main_index++) {


        // FOR THE CHOICES TO BE PRINTED
        let Type = stocks[i].type
        let Brand = stocks[i].type[j].brand
        let Specs = stocks[i].type[j].brand[k].specs
        let Description = stocks[i].type[j].brand[k].specs[l].description
        let Price = stocks[i].type[j].brand[k].specs[l].description[m].price
        let Qty = stocks[i].type[j].brand[k].specs[l].description[m].qty

        setup_array = [stocks, Type, Brand, Specs, Description, Qty, Price]

        let includes = false
        let array = setup_array[Main_index]

        do {

            //------------------< D E B U G >--------------------//
            console.clear()

            if (debug) {
                console.log(array)
            }

            console.log(`${i}  ${j}  ${k}  ${l}  ${m}`)


            //--------------< H E A D I N G >----------------//

            console.log(`\n${heading[Main_index]}\n`)


            //--------------< C H O I C E S >---------------//

            if (Main_index <= 4) {


                for (index = 0; index < array.length; index++) {

                    //FOR ARRAY WITH OBJECTS
                    console.log(` [${index + 1}] - ${array[index].name}`)

                }


            } else {

                //FOR ARRAY W/O OBJECTS
                console.log(`${array}`)

            }

            //-----------------< I N P U T >-------------------//

            input = sentenceCase(readline.question('\nInput: '))


        } while (input - 1 >= array.length && Main_index < 5)

        //--------< E X I S T E N C E   C H E C K >--------//

        for (index = 0; index < array.length; index++) {

            if (input === array[index].name || input - 1 == index) {

                // P U S H I N G  EXISTING ELEMENT TO REPRINT
                reprint_array.push(array[index].name)

                includes = true
                break

            }

        }



        //--------< I N D E X   A S S I G N M E N T >-------//

        switch (Main_index) {
            case 0:
                i = index
                break
            case 1:
                j = index
                break
            case 2:
                k = index
                break
        }


        //--------< A D D I N G   S T O C K S >-------//
        //  E L E M E N T  D O E S  N O T  E X I S T  //

        if (!includes) {

            // SETTING SWITCH NUMBER
            num = Main_index

            // CALLING FUNCTION
            storeData()

        }

    }

    Choices()

}
function storeData() {

    // 'num' VARIES @ CHOICES FUNCTION
    switch (num) {

        case 0:

            // ASSIGNING LENGTH OF ARRAY MINUS ONE TO 'i'
            i = stocks.push({ name: input, type: [] }) - 1

            reprint()

            input = sentenceCase(readline.question('Type: '))

        case 1:

            // ASSIGNING LENGTH OF ARRAY MINUS ONE TO 'j'
            j = stocks[i].type.push({ name: input, brand: [] }) - 1

            reprint()

            input = sentenceCase(readline.question('Brand: '))

        case 2:

            // ASSIGNING LENGTH OF ARRAY MINUS ONE TO 'k'
            k = stocks[i].type[j].brand.push({ name: input, specs: [] }) - 1

            reprint()

            input = sentenceCase(readline.question('Specs: '))

        case 3:


            // ASSIGNING LENGTH OF ARRAY MINUS ONE TO 'l'
            l = stocks[i].type[j].brand[k].specs.push({ name: input, description: [] }) - 1

            reprint()

            input = sentenceCase(readline.question('Description: '))

        case 4:

            // ASSIGNING LENGTH OF ARRAY MINUS ONE TO 'm'
            m = stocks[i].type[j].brand[k].specs[l].description.push({ name: input }) - 1

            reprint()

            input = sentenceCase(readline.question('Price: '))

        case 5:

            stocks[i].type[j].brand[k].specs[l].description[m].price = input

            reprint()

            input = sentenceCase(readline.question('Qty: '))

        case 6:
            stocks[i].type[j].brand[k].specs[l].description[m].qty = input


            //------------------< D E B U G >--------------------//

            console.clear()
            console.log('\n N E W   D A T A  A D D E D\n')
            console.log(JSON.stringify(stocks),null,2)


            readline.question('success! data saved')
    }

    // RETURNING BACK TO CHOICES
    Choices()
}
function reprint() {

    console.clear()
    console.log(`${i}  ${j}  ${k}  ${l}  ${m}\n`)

    console.log(' A D D I N G  S T O C K S \n')

    // P U S H I N G  EXISTING ELEMENT TO REPRINT
    reprint_array.push(sentenceCase(input))

    label = ['Category:', 'Type:', 'Brand:', 'Specs:', 'Description: ', 'Price: ', 'Qty: ']


    //------------------< P R I N T >--------------------//

    for (let index = 0; index <= num; index++) {
        console.log(`${label[index]} ${reprint_array[index]}`)
    }


    //INCREMENTING 'num'
    num++


    //------------------< D E B U G >--------------------//

    if (debug) {
        console.log(reprint_array)
    }

}
function sentenceCase(text) {

    let array = text.toLowerCase().split('')
    if (array[0] !== undefined) {
        array[0] = array[0].toUpperCase()
    }
    text = ''

    for (let index = 0; index < array.length; index++) {
        text += array[index]
    }
    return text
}

