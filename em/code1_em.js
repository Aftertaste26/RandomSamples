const readline = require('readline-sync')

let testRun = true

//-------------[ SAVED DATA ]-------------//

let stocks = [{
    name: 'PAPER',
    type: [{
        name: 'BOND PAPER',
        unit: 'REAM',
        brand: [{
            name: 'CACTUS',
            specs: [{
                Specifications: 'SHORT',
                Quantity: 2,
                Price: 150
            }]
        }]
    }]
} /*, { //debugger
    name: 'WRITING MATERIALS',                      // CATEGORY 2
    type: [{
        name: 'PEN',
        unit: 'PCS',                              // TYPE 1
        brand: [{
            name: 'G-TECH',
            specs: [{
                Specifications: '0.5 - BLACK',
                Quantity: 5,
                Price: 150
            }]
        }, {
            name: 'PANDA',
            specs: [{
                Specifications: '0.5 - BLACK',
                Quantity: 5,
                Price: 150
            }]
        }]
    }, {
        name: 'MARKER',                             // TYPE 2
        brand: [{
            name: 'PILOT',
            specs: [{
                Specifications: 'PERMANENT',
                Quantity: 10,
                Price: 190
            }]
        }]
    }]
}*/]



let displayData = ['Category', 'Type', 'Brand', 'Specifications', 'Quantity', 'Unit Price'] // =6
let i = 0 //index for stocks
let j = 0 //index for type
let k = 0 //index for brand
let l = 0 //index for specs

addStocks()

function addStocks() {

    let newCategory = {
        name: '',
        type: [] //insert newType
    }

    let newType = {
        name: '',
        unit: '',
        brand: [] //insert newBrand
    }

    let newBrand = {
        name: '',
        specs: [] //insert specs
    }

    let newSpecs = {
        Specifications: '',
        Quantity: 0,
        Price: 0
    }

    let newData = [newCategory, newType, newBrand, newSpecs]
    displayData = ['Category', 'Type', 'Brand', 'Specifications', 'Quantity', 'Unit Price'] // =6
    i = 0
    j = 0
    k = 0
    l = 0

    //TOTAL PRICE
    function totalPrice(specs_i) {

        quantity = Number(stocks[i].type[j].brand[k].specs[specs_i].Quantity)
        unitPrice = Number(stocks[i].type[j].brand[k].specs[specs_i].Price)
        total = unitPrice * quantity

        return total
    }


    //-------------[ ADD NEW STOCKS ]-------------//



    let includes = false
    let input
    let counter = 0
    let divider = '---------------------------'
    let index = 0


    for (counter; counter <= 2; counter++) { //loop with choices; category to brand
        let stocksAccessArray = [stocks, stocks[i].type, stocks[i].type[j].brand]
        console.log(divider)
        console.log(`[ ${displayData[counter].toUpperCase()} ]\n`)
        for (let c = 0; c < stocksAccessArray[counter].length; c++) { //print choices
            console.log(`[${c + 1}] - ${stocksAccessArray[counter][c].name}`)
        }

        console.log(`${divider}`)
        input = readline.question(`${displayData[counter]}: `).toUpperCase() //takes input
        displayData.splice(counter, 1, `${displayData[counter]}: ${input}`)   // temporary holds data for DISPLAY

        console.clear()
        for (let m = 0; m <= counter; m++) { //display
            console.log(`${displayData[m]}`)
        }

        check()

        //CHECK EXISTENCE
        function check() { //check existence of input
            for (index = 0; index < stocksAccessArray[counter].length; index++) { //stocks
                if (input === stocksAccessArray[counter][index].name) {
                    includes = true
                    break//checks for match, then breaks if found
                } else {
                    includes = false
                }
            }

            switch (counter) {
                case 0: //category
                    i = index
                    break
                case 1: //type
                    j = index
                    break
                case 2: //brand
                    k = index
                    break
            }
            return includes
        }

        if (testRun === true) {
            console.log(`\n${divider}`)
            console.log('TEST RUN')

            console.log(displayData)

            console.log(check())
            console.log(divider)
            readline.question()
            console.log(newSpecs)
            console.clear()

            // readline.question('i - ' + i)
            // readline.question('j - ' + j)
        }

        if (check() === false) { //exits loop if false, and after checking BRAND
            newData[counter].name = input //counter == original
            newCounter = counter + 1

            for (newCounter; newCounter <= 2; newCounter++) { //will ask till brand
                // if (testRun === true) {
                //     readline.question('newCounter - ' + newCounter)
                //     readline.question('counter - ' + counter)
                //     console.log(displayData)
                // }

                if (newCounter === 2) {
                    input = readline.question(`Unit: `).toUpperCase()
                    displayData.splice(newCounter, 0, `Unit: ${input}`)
                    newData[1].unit = input
                    console.clear()

                    for (let m = 0; m <= newCounter; m++) { //display
                        console.log(`${displayData[m]}`)
                    }

                    input = readline.question(`${displayData[newCounter + 1]}: `).toUpperCase()
                    displayData.splice(newCounter + 1, 1, `${displayData[newCounter + 1]}: ${input}`)
                    newData[newCounter].name = input
                    newCounter++
                } else {

                    input = readline.question(`${displayData[newCounter]}: `).toUpperCase()
                    displayData.splice(newCounter, 1, `${displayData[newCounter]}: ${input}`)
                    newData[newCounter].name = input
                }

                console.clear()
                for (let m = 0; m <= newCounter; m++) { //display
                    console.log(`${displayData[m]}`)
                }
            }
            break
        }

    }


    newCounter = 3                      //SPECS display
    if (displayData.length === 7) {
        newCounter = 4
    }

    for (const key in newSpecs) {
        // readline.question(newCounter)
        if (newSpecs.hasOwnProperty(key)) {
            input = readline.question(`${key}: `).toUpperCase()
            newSpecs[key] = input
            displayData.splice(newCounter, 1, `${displayData[newCounter]}: ${input}`)

            //readline.question(displayData)// if testrun === true 
        }

        console.clear()
        for (let m = 0; m <= newCounter; m++) { //display
            console.log(`${displayData[m]}`)
        }
        newCounter++
    }
    // console.log(newSpecs)
    // console.log(displayData)

    // readline.question(counter)
    if (includes === false) {
        switch (counter) {                      //base on where check === false
            case 0: // new category
                newBrand.specs.push(newSpecs)
                newType.brand.push(newBrand)
                newCategory.type.push(newType)
                stocks.push(newCategory)
                break
            case 1: // new type
                newBrand.specs.push(newSpecs)
                newType.brand.push(newBrand)
                stocks[i].type.push(newType)
                break
            case 2: //new brand
                newBrand.specs.push(newSpecs)
                stocks[i].type[j].brand.push(newBrand)
                break
        }
    } else {
        // readline.question('k ' + k)
        stocks[i].type[j].brand[k].specs.push(newSpecs)
    }

    l = stocks[i].type[j].brand[k].specs.length - 1
    // readline.question(l)

    if (testRun === true) {
        //shows saved data array
        readline.question('\nSAVED DATA:')
        readline.question('stocks')
        console.log(stocks)
        readline.question('type')
        console.log(stocks[i].type)
        readline.question('brand')
        console.log(stocks[i].type[j].brand)
        readline.question('specs')
        console.log(stocks[i].type[j].brand[k].specs)
        //shows summary of input

        console.log(divider)
        readline.question('\nSUMMARY')
        // l = l + stocks[i].type[j].brand[k].specs.length
        console.log(`Category: ${stocks[i].name}`)
        console.log(`Type: ${stocks[i].type[j].name}`)
        console.log(`Brand: ${stocks[i].type[j].brand[k].name}`)
        // readline.question(l)
        console.log(`Specifications: ${stocks[i].type[j].brand[k].specs[l].Specifications}`)
        console.log(`Quantity: ${stocks[i].type[j].brand[k].specs[l].Quantity}`)
        console.log(`Unit Price: ${stocks[i].type[j].brand[k].specs[l].Price}`)
        console.log(`Total Price: ${totalPrice(l)}`)
    }

    console.log(divider)
    input = readline.question(`\n[+] - Add more stocks\n[^] - Back\n`)

    if (input === '+') {
        console.clear()
        addStocks()

    } else if (input === '^') {
        console.log('back')
        // addMenu()
    }
}