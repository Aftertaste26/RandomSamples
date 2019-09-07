let readline = require('readline-sync')
let Hashtag = readline.question('Hashtag: ')
let output = ''
let recentChar_is_underScore

for (const character of Hashtag) {

    if (character >= 'A' && character <= 'Z') {      // UPPERCASE LETTER

        if (!recentChar_is_underScore) {            // add space       
            output += ' ' + character
        } else {
            output += character                     // no space added
        }
        recentChar_is_underScore = false

    } else {

        switch (character) {
            case '_':
                if (!recentChar_is_underScore) {            // if recent char is not
                    output += ' '                        // an underscore add space
                    recentChar_is_underScore = true         // else Fallthru
                    break                               //  no space will be added
                }
            case '#':
                output += ''                             //Hashtag is removed
                break
            default:
                output += character                      //numbers and symbols is added back
                recentChar_is_underScore = false
        }
    }
}

//print & removes the leading and trailing White spaces from the sting
console.log(output.trim()) 