let readline = require('readline-sync')
let Hashtag = readline.question('Hashtag: ')
let converted = ''
let final_output = ''
let recent_char = ''

for (const character of Hashtag) {

    if (character >= 'A' && character <= 'Z') {
        converted += ' ' + character
    } else if (character >= 'a' && character <= 'z') {
        converted += character
    } else if (character >= '0' && character <= '9') {
        converted += character
    } else if (character === '#') {
        converted += ''
    } else if (character === '_') {
        converted += ' '
    }
}
 // removes unnecessary spaces
for (const character of converted) {

    if (character === ' ') {

        if (recent_char !== ' ') {
            final_output += ' '
        }

    } else {

        final_output += character

    }

    recent_char = character
}

console.log(final_output.trim())