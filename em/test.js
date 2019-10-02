/* let object = [{ spec: 'kyle', qty: 9, price: 80 }, { spec: 'Em', qty: 4, price: 80 }, { spec: 'chem', qty: 6, price: 80 }]
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
}]


let input = require('readline-sync')
let search = input.question('poop: ')

stocks.map(x => x.type.map(x => x.brand.map(x => x.specs.map(x => x.Total = x.Price * x.Quantity))))
console.log(stocks.some(x => x.name == 'PAPER'))
console.log(stocks[0].type.some(x => x.name == 'BOND PAPER'))
console.log(stocks.some(x => { console.log(x.name), x.name == 'PAPER' }))

let output
if (search) {
    output = stocks.findIndex(x => x.name == 'PAPER')
}

console.log(output)


 */

let readline = require(`readline-sync`)

// constants
const original_interest = .05
const delayed_interest = .02


// Arrays
let name_of_person = []
let address_of_person = []
let number_of_person = []
let date_of_purchased = []
let name_of_furniture = []
let months_to_pay = []
let price_of_furniture = []
let downpayment_first = []
let record_monthlypayment = []
let Arrays = [name_of_person,
    address_of_person,
    number_of_person,
    date_of_purchased,
    name_of_furniture,
    months_to_pay,
    price_of_furniture,
    downpayment_first]


// undefine variables
let count;
let name;
let address;
let number;
let date_purchased;
let name_furniture;
let months_pay;
let price_furniture;
let downpayment;
// calling the function
add_new_search()


function add_new_search() {

    console.clear()
    console.log(`This program will help sort-out people who owes you money`)
    console.log(`[A] Add new. \n[P] Person in due date. \n[L] List of names. \n[S] Search name.`)
    let run_program = readline.question('')

    switch (run_program.toUpperCase()) {  // <<< << <<<  S I M P L I F I E D

        case `A`:
            add_new_person()
            break
        case `P`:
            break
        case `L`:
            list_of_names()
            break
        default:
            readline.question(`Input is invalid. Press Enter`)
            add_new_search()
    }

}
//////////////////////////////--------FUNCTIONS----------//////////////////////////////////

//////////////////////////////////////SEARCH ENGINE///////////////////////////////////////

//////////////////////////////////////DISPLAY ALL NAMES///////////////////////////////////

function list_of_names() {
    console.clear()
    console.log(`--------Customer's Details---------`)
    console.log(`NAME: ${name_of_person}`)
    console.log(`HOME ADDRESS: ${address_of_person}`)
    console.log(`NUMBER:` + number_of_person)
    console.log(`DATE OF PURCHASE: ` + date_of_purchased)
    console.log(`FURNITURE: ${name_of_furniture}`)
    console.log(`MONTHS TO PAY: ${months_to_pay}`)
    console.log(`PRICE: ${price_of_furniture}`)
    console.log(`DOWNPAYMENT: ${downpayment_first}`)
    console.log(`MONTHLY PAYMENT: ${record_monthlypayment}`)
    console.log(`Would you like to add again?`)
    let ask_again = readline.question(`Enter [Y] to go Back. Press 'Enter' to end `);
    // calling the function. going back to the top
    if (ask_again.toUpperCase() == `Y`) {
        add_new_search()
    }
    else {
        console.log()
    }

}
//////////////////////////////////DATES AND CONTACT NUMBERS////////////////////////////////
function numberReader(givenData) {

    givenData = Number(givenData)

    while (givenData.toString().length !== 6) {
        givenData = Number(readline.question('PLEASE ENTER THE GIVEN FORMAT YY/DD/MM'))
    }

    return givenData.toString().replace(/(\d{2})(\d{2})(\d{2})/, "$1/$2/$3") ////////     < < < < < < < <

}

//date_of_purchased.push(numberReader(date_purchased))  <<<<<<<< remove   T H I S

//////////////////////////////////////ADDING PERSON CODE//////////////////////////////////

function add_new_person() {

    console.clear()
    console.log(`--------Enter Customer's Details---------`)


    let label = ['Name: ', 'Address: ', 'Contact#: ', 'Date: ', 'Furnature: ', 'Months to pay: ', 'Price: ', 'Downpayment']
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }



    //formulation//
    let monthlypayment = ((price_furniture - downpayment) + ((price_furniture - downpayment) * original_interest)) / months_pay
    //formulation//
    console.log(`Name: ${name}`)
    console.log(`Address: ${address}`)
    console.log(`Contact #: ${separateTheNumber}`)
    console.log(`Date purchased: ${date_purchased} `)
    console.log(`Name of Furniture: ${name_furniture}`)
    console.log(`Number of months to pay: ${months_pay}`)
    console.log(`Price of furniture: ${price_furniture}`)
    readline.question(`Your monthly payment will be ${monthlypayment.toFixed(2)}. \nPlease be reminded that every week you missed to pay your bill. 2% will be addded monthly.`)

    // Storing the recorded details
    number = number.replace(/(\d{4})(\d{3})(\d{4})/, "$1-$2-$3")
    let values = [name, address, number, date_of_purchased, name_furniture, months_pay, price_furniture, downpayment]
    Arrays.forEach(x => x.push(values[Arrays.indexOf(x)]))

    console.log(`Would you like to add again?`)
    let ask_again = readline.question(`Enter [Y] to go Back. Press 'Enter' to end `);
    // calling the function. going back to the top
    if (ask_again.toUpperCase() == `Y`) {
        add_new_search()
    }
    else {
        console.log('P O O P !')
    }
}