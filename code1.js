const readline = require('readline-sync')

//-----VARIABLES-----//
let Category = [
    'Type: ',
    'Variation: ',
    'Brand: ',
    'Specifications: ',
]

let TypeChoices = [
    'Type 1',
    'Type 2',
]

let VariationChoices = [
    'Var1 - Type 1',
    'Var1 - Type 2'
]

let BrandChoices = [
    'Brand 1 - Var 1 - Type 1',
    'Brand 1 - Var 1 - Type 2',
]

let SpecsChoices = [
    'Spec 1 - Brand 1 - Var 1 - Type 1',
    'Spec 1 - Brand 1 - Var 1 - Type 2'
]

let CategoryChoice = [
    TypeChoices, VariationChoices, BrandChoices, SpecsChoices
]

//------------------//

function dataInput() {
    for (let index = 0; index < Category.length; index++) {
        let input = readline.question(Category[index]) // input for every category
        CategoryChoice[index].splice(CategoryChoice[index].length, 0, input.toUpperCase()) //push input for it sdesignated category at each loop
        console.log(CategoryChoice[index])
    }
}
function printChoices() {
    //for (let index = 0;){

    //}
}
