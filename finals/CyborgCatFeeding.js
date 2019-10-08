let readline = require('readline-sync')
let input = readline.question
let print = console.log
let letters = []
let ascii = []
let key
let ouput

do {

    if (!Number(key) && key) {
        letters.push(key)
        ascii.push(key.charCodeAt(0))
    }
    if (Number(key)) {
        ouput = 'Invalid Input'
    }

    key = input(' >: ')

} while (key !== 'end')

let combi = []
let set = []

for (let index = 0; index < ascii.length; index++) {

    
    set.splice(0,1,letters[index])

    for (let index2 = 0; index2 < ascii.length; index2++) {

        if (index2 == index) {
            index2++
        }

        set.splice(1,1,letters[index2])


        for (let index3 = 0; index3 < ascii.length; index3++) {

            while (index2 == index3 || index3 == index) {
                index3++
            }

            set.splice(2, 1, letters[index3 % ascii.length])

            print(set)
            input('')
            combi.push(set)
            print(combi)
        }

    }


/*     A
    b
    a
    B
    C
    c
    end
     */

}

print(letters)
print(ascii)
print(ascii.reduce((x, y) => x + y))
input('')


let x = ascii.reduce((x, y) => x + y)
let count = 0

for (let factor = x; factor > 0; factor--) {

    if (x % factor == 0) {
        count++
    }
}

if (ouput) {
    print(ouput)
} else if (count > 2) {
    print('No results: try a different array')
}



