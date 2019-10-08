let readline = require('readline-sync')
let print = console.log
let input = readline.question
let game = input(' >: ').split(' ')
let key


do {
    key = input(' >: ').split(' ')
    switch (key[0]) {
        case 'Install':
            game.push(key[1])
            break;
        case 'Uninstall':
            game.splice(game.indexOf(key[1]), 1)
            break;
        case 'Update':
            game.splice(game.indexOf(key[1]), 1)
            game.push(key[1])
            break;
        case 'Expansion':
            game.splice(game.indexOf(key[1].split('-')[0])+1, 0,key[1])
            break;

        default:
            break;
    }

} while (key[0] !== 'Play!')

print(game)

