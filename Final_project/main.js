let menu = require('./menu')
let readline = require('readline-sync')
let heading_String = ['', " AFTERTASTE " /* "W..T..F", "WHERE'S THE FOOD" */, " <FOOD FEED> ", '']

Food_feed(menu.FastFood.list)

function Food_feed(category, page = 0) {
    console.clear()

    heading_String.forEach(x => Center(spacing_(x), 50, "-"))
    category.forEach(x => x.Average = Math.ceil(x.rating.reduce((x, y) => x + y) / x.rating.length))
    category.sort((x, y) => y.Average - x.Average)

    let index = 0
    let limit = 2 + (page * 2)

    if (limit > category.length) {
        limit = category.length
    }

    for (let Rows = page * 2; Rows < limit; Rows++) {
        index = Rows
        let average = category[index].Average
        let most_appetite = category[index].review.filter((x, y, z) => x.appetite === Math.max(...z.map(x => x.appetite)))[0]

        Center(spacing_(category[index].name), 50, ' ', 1, 1)
        sentence(most_appetite.description)
        console.log(`\n- ${most_appetite.by}\n`)
        side_print(`Rating: ${rating(average)} < ${average} >`, `Appetite ☺ ${most_appetite.appetite}`)

    }

    Center('< prev  next >', 50, ' ', 1, 1)
    side_print('< More >', '< Out >')

    let input = readline.question('\n >: ')

    if (input == '>' && limit < category.length) {
        Food_feed(category, page + 1)

    } else if (input == '<' && page > 0) {
        Food_feed(category, page - 1)
    } else if (input == 'More') {
        more(category)
        Food_feed(category, page)
    } else {
        Food_feed(category, page)
    }
}
function rating(rate) {
    let output = ''
    while (output.length !== Math.round(rate)) {
        output += '♥'
    }
    return spacing_(output)
}
function Center(text, length = 50, char = ' ', spacing, spacing2) {

    if (text.length >= length) {
        if (spacing > 0) {
            return Center(text + '\n', length, char, spacing - 1, spacing2)
        } else if (spacing2 > 0) {
            return Center('\n' + text, length, char, spacing, spacing2 - 1)
        } else {
            return console.log(`${text}`);
        }
    }
    return Center((char + text + char).substr(0, length), length, char, spacing, spacing2)
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
function more(cat) {
    let option = ['Category', 'List']
    console.log('\n')
    option.forEach((x, y) => Center(`<${y}> - ${x}`))
    console.log('\n')

    let input = readline.question('\n >: ')

    switch (input) {
        case '0':
            category()
            break;

        case '1':
            list(cat)
            break;

        default:
            break;
    }


}
function category() {

    console.clear()
    let heading_String = ['', " AFTERTASTE ", " <CATEGORY> ", '']

    heading_String.forEach(x => Center(spacing_(x), 50, "-"))
    menu.Category.forEach((x, y) => Center(`<${y}> - ${x.name}`))

    let input = Number(readline.question('\n >: '))

    if (input < menu.Category.length) {
        Food_feed(menu.Category[input].list)
    } else {
        category()
    }
}
function list(category) {

    console.clear()
    let heading_String = ['', " AFTERTASTE ", " <LIST> ", '']
    heading_String.forEach(x => Center(spacing_(x), 50, "-"))
    console.log('\n')

    category.forEach((x, y) => console.log(`<${y}> - ${x.name}`))

    let input = Number(readline.question('\n >: '))

    if (input < category.length) {
        reviews(category[input])
    }

}
function reviews(category, page = 0) {

    console.clear()
    let heading_String = ['', " AFTERTASTE ", " <REVIEWS> ", '']
    heading_String.forEach(x => Center(spacing_(x), 50, "-"))
    console.log('\n')

    Center(spacing_(category.name), 50, ' ', 1, 1)

    let limit = 2 + (page * 2)

    if (limit > category.review.length) {
        limit = category.review.length
    }

    for (let Rows = page * 2; Rows < limit; Rows++) {

        let average = category.Average
        let most_appetite = category.review.sort((x, y) => y.appetite - x.appetite)

        sentence(most_appetite[Rows].description)
        console.log(`\n- ${most_appetite[Rows].by}\n`)
        side_print(`Rating: ${rating(average)} < ${average} >`, `Appetite ☺ ${most_appetite[Rows].appetite}`)
        console.log('\n')

    }

    Center('< prev  next >', 50, ' ', 1, 1)
    side_print('< Home >', '< Out >')

    let input = readline.question('\n >: ')

    if (input == '>' && limit < category.review.length) {
        reviews(category, page + 1)
    } else if (input == '<' && page > 0) {
        reviews(category, page - 1)
    } else if (input == 'Home') {
        Food_feed(menu.FastFood.list)
    } else {
        reviews(category, page)
    }

}

