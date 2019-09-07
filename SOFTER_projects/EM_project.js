//Final Code Generator 

//-----------------------SAVED DATA-----------------------//
let Type = [
    'Paper',
    'Writing Materials',
    'Others'
]

//========VARIATION========//
let Variation_Paper = [
    'Bond Paper',
    'Pad Paper',
    'Others',
]
let Variation_Writing = [
    'Ballpen',
    'Marker',
    'Others'
]
let Variation_Others = [

]
let Variation = [
    Variation_Paper,
    Variation_Writing,
    Variation_Others
]


//========BRAND========//
let Brand_BondPaper = [
    'CACTUS',
    //insert new Brand Bond Paper
    'Others'
]
let Brand_PadPaper = [
    'Intermediate Pad',
    'Yellow Pad',
    //insert new brand Pad Paper
    'Others'
]
let Brand_Others = [

]
let Brand = [
    Brand_BondPaper,
    Brand_PadPaper,
    Brand_Others
]

//========SPECIFICATIONS========//
let Specification_BondPaper = [
    'Short',
    'Long'
    //insert Specifications
]
let Specification_Ballpen = [
    '0.5 - Black',
    '0.3 - Blue',
    'Black'
    //insert specifications
]
let Specification_Marker = [
    'Red'
    //insert specification
]
let Specification = [
    Specification_BondPaper,
    Specification_Ballpen,
    Specification_Marker,
]
//indexes
let IndexInput = [
    '01',
    '02',
    '03'
]
//========Nested Array========//

//1. For Summarization of Inputs
//   index             0            1           2           3
let CategoryList = ['Type: ', 'Variation: ', 'Brand: ', 'Specification: ']
let CategoryList_Data = ['TypeChoosen', 'VariationChoosen', 'BrandChoosen', 'SpecificationChoosen',]

//2. For Generated Code = 1A2BB3CC4DD
//     index           0   1   2    3   4   5    6   7
let generated_code = ['1', 'A', '2', 'BB', '3', 'CC', '4', 'DD']
//-----------------------OTHER VARIABLES-----------------------//
const readline = require('readline-sync')
let input_divider = '\n--------------------------------------'
let validityString = 'Not valid input! Press any key to try again.'
let ANS_Choice_Input
let index
let input
let VariationPrint
//Counters
let PaperVariation_Counter = 0
let PadPaperVariation_Counter = 0
let OthersVariation_Counter = 0
//New Item Code



/*-----------------------NOTES-----------------------//
C A T E G O R Y

#   Name 
1 - Type
2 - Variation
3 - Brand
4 - Specifications

Function & Parameter
1. Code generator:
> categoryName - [string] Ex: 'Brand: '
> categoryNumber - 1,2,3,4

counter is per Category
indexOf is not neccessary for 1 digit input since 1 digit input is for TYPE CATEGORY
/-----------------------END OF NOTES-----------------------*/

//-----------------------FUNCTIONS-----------------------//

//0. MENU
function Menu() {
    console.clear()
    console.log('╔════════════════════════════════════╗')
    console.log('║  • S T O C K  I N V E N T O R Y •  ║')
    console.log('╚════════════════════════════════════╝')
    console.log('\n[1] - View Stock List\n[2] - Add Item\n[3] - Search Item')
    console.log(input_divider)
    let Menu_Input = readline.question('> ')

    switch (Menu_Input) {
        case '1':
            console.clear()
            readline.question(" Carry on, Nothing to see here.. please press ENTER")
            Menu()
            break
        case '2':
            Add_Item()
            break
        case '3':
            console.clear()
            readline.question(" Carry on, Nothing to see here.. please press ENTER")
            Menu()
            break
        default:
            readline.question('Not valid input! Press any key to try again.')
            console.clear()
            Menu()
    }
}

//1. View Stock List (TABLE)

//2. Add Item
function Add_Item() {
    console.clear()
    console.log('    < A D D  I T E M > \n')
    console.log('[+] - Add New Stock\n[=] - Add Quantity\n[^] - Return to Menu')
    console.log(input_divider)
    let Add_Item_Input = readline.question('> ')

    switch (Add_Item_Input) {
        case '+':
            console.clear()
            Add_New_Stock()
            break
        case '=':
            console.clear()
            console.log('[ADD QUANTITY]')
            break
        case '^':
            console.clear()
            Menu()
            break
        default:
            readline.question(validityString)
            console.clear()
            Add_Item()
    }
}

//2.1 Add New Stock
function Add_New_Stock() {

    console.log('   [ A D D  N E W  S T O C K ]\n')     //  CATEGORY: 1 - TYPE
    console.log('Select Type:\n')
    printChoice(Type, 1)                                //prints choices for TYPE
    Input_Choices(1)                                    //index of category in generated_code Array = A
                                                        
    switch (ANS_Choice_Input) {                         //  CATEGORY: 2 - VARIATION
        case '1': //Paper
            console.clear()
            VariableFlow(0, 0, Type[0], 0, Variation_Paper, 2, 3, 'Input New Variation: ', OthersVariation_Counter, Variation_Others)
            ItemCode()
            break
        case '2': //Writing
            console.clear()
            break
        case '3': //Others
            console.clear()
            break
        default:
            readline.question(validityString)
            console.clear()
            Add_New_Stock()
    }

}

//2.1.2 Reads input {Variation,Brand,Specification}
function Input_Choices(IndexofCategory) {
    console.log(input_divider)
    ANS_Choice_Input = readline.question('> ')
    generated_code.splice(IndexofCategory, 1, ANS_Choice_Input)
}

//2.2 Add Quantity

//A. Print Choice
function printChoice(ArrayChoice, NumberOfDigit) {

    for (let row = 1; row <= ArrayChoice.length; row++) {

        let i = row - 1

        process.stdout.write('[')
        if (NumberOfDigit === 2) {
            process.stdout.write(`0`)
        }
        for (let column = 0; column !== 1; column++) {
            process.stdout.write(`${row}]`)
        }
        process.stdout.write(` - ${ArrayChoice[i]}`)

        i++
        console.log('')

    }

}
//B. Others [NEW ITEM, NEW CODE GENERATED] - not on the saved data

function Others(categoryName, categoryCounter, ArrayToAddInput, IndexofCategory) {
    let newCode = ''
    input = readline.question(categoryName)                      //  to print categoryName and take the input
    categoryCounter++                                            // counts the number of times the user has encoded
    let code = categoryCounter + ArrayToAddInput.length + index  // generate new number for the input
    ArrayToAddInput.push(input)                                  // adds the input to the designated array
    if (code < 10) {                                             // makes sure that the new code is 2 digit
        newCode += '0' + code
    }
    generated_code.splice(IndexofCategory, 1, newCode)
}

//C. Prints summarized inputs
function summarize(CategoryList_Index, replaceIndex, String_or_Array, CategoryList_DataIndex) {

    CategoryList_Data.splice(replaceIndex, 1, String_or_Array)
    console.log(`${CategoryList_Index}  ${CategoryList_DataIndex}`)
    console.log(CategoryList[CategoryList_Index] + CategoryList_Data[CategoryList_DataIndex])
}

//D. Prints Item Code
function ItemCode() {

    for (let i = 0; i < generated_code.length; i++) {
        process.stdout.write(generated_code[i])
    }

}

//VARIATION
function VariableFlow( CategoryList_Index, replaceIndex, String_or_Array, CategoryList_DataIndex,   //summarize
    ArrayChoice, NumberOfDigit,                                                                     //printChoice
    IndexofCategory,                                                                                //Input_Choices , last parameter of Others
    categoryName, categoryCounter, ArrayToAddInput) {                                               //Others

    summarize(CategoryList_Index, replaceIndex, String_or_Array, CategoryList_DataIndex)            //displays 'Type:'

    console.log('Select Variation:\n')
    printChoice(ArrayChoice, NumberOfDigit)                                                         //prints choices for Paper Variation
    Input_Choices(IndexofCategory)                                                                     //index of category in generated_code Array = BB
    index = IndexInput.indexOf(ANS_Choice_Input)                                                    // gets the index of the input [2- digit input]

    console.clear()
    summarize(CategoryList_Index, replaceIndex, String_or_Array, CategoryList_DataIndex)            //displays 'Type:'

    if (index > 1) {                                                                                // if others; ask specification
        Others(categoryName, categoryCounter, ArrayToAddInput, IndexofCategory)
        VariationPrint = input.toString()
    } else {
        VariationPrint = Variation_Paper[index]
    }
    console.clear()
    summarize(CategoryList_Index, replaceIndex, String_or_Array, CategoryList_DataIndex) //displays 'Type:'
    summarize(CategoryList_Index + 1, replaceIndex + 1, VariationPrint, CategoryList_DataIndex + 1) //displays 'Variation:'
}

//-----------------------RUN CODE-----------------------//

Menu()