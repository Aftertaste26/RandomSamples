let readline = require('readline-sync');
let meassage = readline.question('Message: ');
let Code = Number(readline.question('Code: '));
let secret_message = '';
let cipher;


for (let letters of meassage) {

    let Ascii = letters.charCodeAt(0);

    //only a to z
    if (Ascii >= 97 && Ascii <= 122) {

        cipher = Ascii + Code % 26;

        if (cipher < 97) {
            cipher += 26;
        }

        if (cipher > 122) {

            cipher -= 26;

        }

    }
    //Only A to Z
    else if (Ascii >= 65 && Ascii <= 90) {

        cipher = Ascii + Code % 26;

        if (cipher < 65) {
            cipher += 26;
        }

        if (cipher > 90) {
            cipher -= 26;
        }

    } else {
        cipher = Ascii;
    }

    secret_message += String.fromCharCode(cipher);

}

console.log(secret_message);





