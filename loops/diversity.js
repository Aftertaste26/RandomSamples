let readline = require("readline-sync")
let count = 0
let Male = 0
let Female = 0
let Ratio
let Number_Of_Person = Number(readline.question("Number of person: "))
let check = Number_Of_Person

//this tally the input
while (count < Number_Of_Person) {

    let input = (readline.question("Gender: "))

    if (input == 'm' || input == 'M') {
        Male++
    }
    if (input == 'f' || input == 'F') {
        Female++
    }
    count++
}


//Ratio Output
if (Male > 0 && Female === 0) {

    Ratio = 'All males'

} else if (Female > 0 && Male === 0) {

    Ratio = 'All females'

} else {

    let Ratio_Male = Male
    let Ratio_Female = Female

    while (check !== 0) {

        if ((Ratio_Male % check) === 0 && (Ratio_Female % check) === 0) {
            Ratio_Male = Ratio_Male / check
            Ratio_Female = Ratio_Female / check
        }
        check--
    }

    Ratio = `${Ratio_Male}:${Ratio_Female}`
}

//Print Final Ouput
console.log(`Males: ${Male}`)
console.log(`Females: ${Female}`)
console.log(Ratio)