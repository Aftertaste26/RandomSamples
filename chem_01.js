
let readline = require(`readline-sync`)

// Arrays
let name_of_person = [``]
let address_of_person = [``]
let number_of_person = []
let date_of_purchased = [``]
let name_of_furniture = [``]
let months_to_pay = []
let price_of_furniture = []
let downpayment_first = []
let record_monthlypayment = []

// constants
const original_interest = .05
const delayed_interest = .02

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
let monthlypayment;

// calling the function
add_new_search()


function add_new_search() {

    console.clear()
    console.log(`This program will help sort-out people who owes you money`)
    console.log(`[S] to search the name of the person. \n[A] to add new. \n[P] to see who is in due date. \n[L] List of names.`)

    let run_program = readline.question('')

    switch (run_program) {
        case `a`:
        case `A`:
            add_new_person()
            break
        case `s`:
        case `S`:

            break

        case `p`:
        case `P`:
            break
        default:

            readline.question(`Input is invalid. Press Enter`)

            add_new_search()
    }

}

//////////////////////////////////////

function add_new_person() {

    console.clear()
    console.log(`--------Enter Customer's Details---------`)

    do {
        name = readline.question('Name: ')
        address = readline.question('Address: ')
        number = readline.question('#: ')
        date_purchased = (readline.question('Date of Purchased (MM/DD/YY): '))
        name_furniture = readline.question('Furniture: ')
        months_pay = Number(readline.question('Months to pay: '))
        price_furniture = Number(readline.question('Price: '))
        downpayment = Number(readline.question(`Downpayment: `))
        count = Number(readline.question(`Enter 0: `))
        console.clear()
    }
    while (count != 0)
    //formulation//
    let remaining_balance = price_furniture - downpayment
    let increased_payment = remaining_balance * original_interest
    let monthlypayment = (remaining_balance + increased_payment) / months_pay
    //formulation//
    console.clear()
    console.log(`----------Check Details---------`)
    console.log(`Name: ${name}`)
    console.log(`Address: ${address}`)
    console.log(`Contact #: ${number}`)
    console.log(`Date of purchased: ${date_purchased}`)
    console.log(`Name of Furniture: ${name_furniture}`)
    console.log(`Number of months to pay: ${months_pay}`)
    console.log(`Price of furniture: ${price_furniture}\n`)
    
    readline.question(`Your monthly payment will be ${monthlypayment.toFixed(2)}. \nPlease be reminded that if every week you missed to pay your will 2% will addded.`)
}

// Storing the recorded details
name_of_person.push(name)
address_of_person.push(address)
number_of_person.push(number)
date_of_purchased.push(date_purchased)
name_of_furniture.push(name_furniture)
months_to_pay.push(months_pay)
price_of_furniture.push(price_furniture)
downpayment_first.push(downpayment)
record_monthlypayment.push(monthlypayment)

console.clear()
readline.question(`Would you like to add again? \nEnter to go Back`);

// calling the function. going back to the top
add_new_search()







/* let ask_again = readline.question('')

if (ask_again == `a` || ask_again == `A`) {
    //the function of adding new peson must be executed
    //function add_new_person()
    //back to loop question
}
else if (ask_again == `C` || ask_again == `c`) {
    // show the data
} */

