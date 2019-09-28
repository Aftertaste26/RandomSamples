let readline = require('readline-sync')
let Hashtag = readline.question('Hashtag: ')

console.log(Humanize(Hashtag))

function Humanize(str) {

    let output = ''

    for (const character of str) {

        if (character >= 'A' && character <= 'Z') {
            output = output.trim() + ' ' + character
        } else if (character == '_') {
            output += ' '
        } else if (character !== '#') {
            output += character
        }
    }

    return output.trim()
}