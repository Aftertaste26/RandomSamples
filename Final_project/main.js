let menu = require('./menu')
let readline = require('readline-sync')
let heading_String = ['', " AFTERTASTE " /* "W..T..F", "WHERE'S THE FOOD" */, " <FOOD FEED> ", '']

Food_feed(menu.FastFood)

function Food_feed(category, page = 0) {
    console.clear()

    heading_String.forEach(x => Heading(spacing_(x), 50, "-"))
    category.forEach(x => x.Average = Math.ceil(x.rating.reduce((x, y) => x + y) / x.rating.length))
    category.sort((x, y) => y.Average - x.Average)

    let index = 0
    let limit = 2 + (page * 2)

    if (limit > Number(category.length)) {
        limit = category.length
    }

    for (let Rows = page * 2; Rows < limit; Rows++) {
        index = Rows
        let average = category[index].Average
        let most_appetite = category[index].review.filter((x, y, z) => x.appetite === Math.max(...z.map(x => x.appetite)))[0]

        Heading(spacing_(category[index].name), 50, ' ', 1, 1)
        sentence(most_appetite.description)
        console.log(`\n- ${most_appetite.by}\n`)
        side_print(`Rating: ${rating(average)} < ${average} >`, `Appetite ☺ ${most_appetite.appetite}`)

    }

    Heading('< prev  next >', 50, ' ', 1, 1)
    side_print('< More >', '< Out >')

    let input = readline.question('\n >: ')

    if (input == '>' && limit < Number(category.length)) {
        Food_feed(page + 1)

    } else if (input == '<' && page > 0) {
        Food_feed(page - 1)
    } else if (input == 'More') {
        more()
        Food_feed(page)
    } else {
        Food_feed(page)
    }
}

function rating(rate) {
    let output = ''
    while (output.length !== Math.round(rate)) {
        output += '♥'
    }
    return spacing_(output)
}
function Heading(text, length = 50, char = ' ', spacing, spacing2) {

    if (text.length >= length) {
        if (spacing > 0) {
            return Heading(text + '\n', length, char, spacing - 1, spacing2)
        } else if (spacing2 > 0) {
            return Heading('\n' + text, length, char, spacing, spacing2 - 1)
        } else {
            return console.log(`${text}`);
        }
    }
    return Heading((char + text + char).substr(0, length), length, char, spacing, spacing2)
}
function spacing_(text) {
    text = text.split('')
    return text.join(' ')
}
function side_print(left, right = '', length = 50) {
    if (length < left.length + right.length)
        return console.log(left + right)

    return side_print(left + ' ', ' ' + right, length)
}
function sentence(str, length = 50) {
    let output = ''
    str = str.split(' ')
    for (const word of str) {
        if (output.length + word.length < length) {
            output += ' ' + word
        } else {
            console.log(output)
            output = word
        }

    }
    console.log(output)
}
function more() {
    let option = ['Category', 'List']
    console.log('\n')
    option.forEach((x, y) => Heading(`<${y}> - ${x}`))
    console.log('\n')

    let input = readline.question('\n >: ')

    switch (input) {
        case '0':
            readline.question('youre in')
            category()
            break;

        default:
            break;
    }


}
function category() {

    let heading_String = ['', " AFTERTASTE ", " <CATEGORY> ", '']
    heading_String.forEach(x => Heading(spacing_(x), 50, "-"))
    console.log(menu.Category.name)
readline.question('ps')
}

