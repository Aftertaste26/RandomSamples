// important 
let readline = require("readline-sync");

// input Alphabet
let Alphabet = readline.question("Alphabet: ");

//Vowel Lowwercase Statement
if (Alphabet == "a" || Alphabet == "e" || Alphabet == "i" || Alphabet == "o" || Alphabet == "u"){
    console.log("The alphabet is a Vowel");
}

//Vowel Uppercase Statement
if (Alphabet == "A" || Alphabet == "E" || Alphabet == "I" || Alphabet == "O" || Alphabet == "U") {
    console.log("The alphabet is a Vowel");
}

//Consonant Lowwercase Statement
if (Alphabet == "b" || 
    Alphabet == "c" || 
    Alphabet == "d" || 
    Alphabet == "f" || 
    Alphabet == "g" ||
    Alphabet == "h" ||
    Alphabet == "j" ||
    Alphabet == "k" ||
    Alphabet == "l" ||
    Alphabet == "m" ||
    Alphabet == "n" ||
    Alphabet == "p" ||
    Alphabet == "q" ||
    Alphabet == "r" ||
    Alphabet == "s" ||
    Alphabet == "t" ||
    Alphabet == "v" ||
    Alphabet == "w" ||
    Alphabet == "x" ||
    Alphabet == "y" ||
    Alphabet == "z"
    ) 
    
{
    console.log("The alphabet is a Consonant");
}

//Consonant Uppercase Statement
if (Alphabet == "B" ||
    Alphabet == "C" ||
    Alphabet == "D" ||
    Alphabet == "F" ||
    Alphabet == "G" ||
    Alphabet == "H" ||
    Alphabet == "J" ||
    Alphabet == "K" ||
    Alphabet == "L" ||
    Alphabet == "M" ||
    Alphabet == "N" ||
    Alphabet == "P" ||
    Alphabet == "Q" ||
    Alphabet == "R" ||
    Alphabet == "S" ||
    Alphabet == "T" ||
    Alphabet == "V" ||
    Alphabet == "W" ||
    Alphabet == "X" ||
    Alphabet == "Y" ||
    Alphabet == "Z"
) {
    console.log("The alphabet is a Consonant");
}