/* const readline = require('readline-sync');

function Person(firstName, lastName, contact, address) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Contact = contact;
    this.Address = address;
}

let customer = {};
let input;
let start = true

do {

    let array = ["Name", "Last Name", "Contact", "Adrress"]

    for (let index = 0; index < array.length; index++) {

        input = readline.question(array[index]);

    }


    customer.ID001 = new Person("Jane", "Smith", "09053335501", "Jaro Iloilo");

    console.table(customer);

} while (start) */

let readline = require('readline-sync');
let l = Number(readline.question("Length: "))
let w = Number(readline.question("Width: "))
let limit = 0

for (let index = 0; index < l; index++) {

    for (let index = 0; index < w; index++) {

        if (limit === 0 || limit === l - 1 || index == 0 || index == w - 1) {
            process.stdout.write('*');
        }else{
            process.stdout.write(' ');
        }

    }

    process.stdout.write('\n');
    limit++

}