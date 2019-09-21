//original code---------------------------------START//
const readline = require('readline-sync')

let word = readline.question()

//It is not neccesary to define a string like this
// because it is already unterstood that a text with back ticks,
// single qoute or double quotes are considered string by javascript
let words = String("")
let start = Number(readline.question())
let end = Number(readline.question())

for (let character of word) {

    // conditions are missing
    for (i = start; i < end; i++) {
        //the number of words are not increasing
        words += character
    }
}

console.log(words.toLocaleUpperCase())



//reviced code......................................START// 
const readline = require('readline-sync')

let word = readline.question()
let words = ''
let start = Number(readline.question())
let end = Number(readline.question())

// I added a count to increase the repeation of the word
let repeation = start

for (const character of word) {

    // I added conditions that will filter the out the numbers and symbols
    if (character >= 'A' && character <= 'Z' || character >= 'a' && character <= 'z') {
        
        for (let index = 1; index <= repeation; index++) {
            words += character
        }
        if (repeation === end) {
            repeation = start
        } else {
            repeation++
        }
    } else {
        // this add back the numbers and symbols with out repeating
        words += character
    }
}

console.log(words.toUpperCase())
//reviced code......................................END//