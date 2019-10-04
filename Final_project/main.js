const account = require('./accounts')
const menu = require('./menu')
const readline = require('readline-sync')
let user
let pass
let firstName
let lastName


startUp()

function startUp() {

    heading('Food nerd')
    Center('< Sign in >    < Sign_up >', 50, ' ', 5, 5)
    Center('Someone who loves trying newly discovered foods', 50, ' ', 1)

    let input = readline.question(' >: ').toUpperCase()

    switch (input) {
        case 'SIGN IN':
            sign_in()
            break;
        case 'SIGN UP':
            sign_up()
            break;
        case 'SOFTER':
            user = 'Kyle@Softer'
            Food_feed(menu.All.list)

            break;
        default:
            startUp()
            break;
    }

}
function sign_up() {

    do {
        heading('Sign up')
        console.log('\n')

        user = readline.question('User >: ')
        pass = readline.question('Pass >: ')

        if (pass.length < 6) {
            Center('Pass must be aleast 6 characters')
            readline.question(' >: ')
        }

    } while (pass.length < 6)

    firstName = readline.question('First Name >: ')
    lastName = readline.question('Last >: ')



    account.push({
        User: user,
        Pass: pass,
        firstName: firstName,
        lastName: lastName,
        saveData: []
    })

    readline.question('\n' + spacing_('welcome').toUpperCase())
    Food_feed(menu.All.list)


}
function sign_in(i = 0) {

    heading('Log in')
    console.log('\n')
    user = readline.question('User >: ')
    pass = readline.question('Pass >: ')

    if (account.some(x => x.User == user && x.Pass == pass)) {

        Food_feed(menu.All.list)

    } else {

        invalid(i)
        side_print(' ', '< Sign Up >')

        input = readline.question(spacing_(' >: ')).toUpperCase()

        if (input == 'SIGN UP') {
            sign_up()
        }

        sign_in(i += 1)

    }
}
function Food_feed(category, page = 0) {

    heading('food feed')
    category.forEach(x => x.Average = Math.ceil(x.rating.reduce((x, y) => x + y) / x.rating.length))
    category.sort((x, y) => y.Average - x.Average)

    let limit = 2 + (page * 2)

    if (limit > category.length) {
        limit = category.length
    }

    for (let Rows = page * 2; Rows < limit; Rows++) {

        let average = category[Rows].Average
        let most_appetite = category[Rows].review.sort((x, y) => y.appetite - x.appetite)[0]

        Center(spacing_(category[Rows].name), 50, ' ', 1, 1)
        sentence(most_appetite.description)
        console.log(`\n- ${most_appetite.by}\n`)
        side_print(`Rating: ${rating(average)} < ${average} >`, `Appetite ☺ ${most_appetite.appetite}`)

    }

    Center('< prev  next >', 50, ' ', 1, 1)
    side_print('< More >', '< Out >')

    let input = readline.question('\n >: ').toUpperCase()

    if (input == '>' && limit < category.length) {
        Food_feed(category, page + 1)

    } else if (input == '<' && page > 0) {
        Food_feed(category, page - 1)
    } else if (input == 'MORE') {
        more(category)
        Food_feed(category, page)
    } else if (input == 'OUT') {
        startUp()
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
function side_print(left = '', right = '', length = 50) {
    let limit = length - right.length
    if (length === left.length + right.length)
        return console.log(left + right)
    return side_print((left + '  ').substring(0, limit), right, length)
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
    let option = ['My Wall', 'Category', 'List', 'Out']
    console.log('\n')
    option.forEach((x, y) => side_print(' ', ` ${x} - <${y}>`))
    console.log('\n')

    let input = readline.question('\n >: ')

    switch (input) {
        case '0':
            my_wall()
            break;
        case '1':
            category()
            break;

        case '2':
            list(cat)
            break;
        case '3':
            startUp()
            break;

        default:
            break;
    }


}
function category() {

    heading('Category')
    console.log('\n')

    menu.Category.forEach((x, y) => console.log(` <${y}> - ${x.name}`))

    let input = Number(readline.question('\n >: '))

    if (input < menu.Category.length) {
        Food_feed(menu.Category[input].list)
    } else {
        category()
    }
}
function list(category) {

    heading('List')
    console.log('\n')

    category.forEach((x, y) => console.log(`<${y}> - ${x.name}`))

    let input = Number(readline.question('\n >: '))

    if (input < category.length) {
        reviews(category[input])
    }

}
function reviews(category, page = 0) {

    heading('Review')

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
        Food_feed(menu.All.list)
    } else {
        reviews(category, page)
    }

}
function my_wall(page = 0) {

    heading('Your Wall')

    let profile = account.find(x => x.User == user)
    let data = profile.saveData

    Center(spacing_(`${profile.firstName} ${profile.lastName}`), 50, ' ', 1, 1)
    Center(user)

    let limit = 2 + (page * 2)



    if (limit > data.length) {
        limit = data.length
    }

    for (let Rows = page * 2; Rows < limit; Rows++) {

        let cat_index = menu.Category.findIndex(x => x.name == data[Rows].category)
        let name_index = menu.Category[cat_index].list.findIndex(x => x.name == data[Rows].name)
        let resto = menu.Category[cat_index].list

        resto.forEach(x => x.Average = Math.ceil(x.rating.reduce((x, y) => x + y) / x.rating.length))
        resto.sort((x, y) => y.Average - x.Average)

        let average = resto[name_index].Average

        Center(spacing_(data[Rows].name), 50, ' ', 1, 1)
        sentence(data[Rows].description)
        console.log('\n')
        side_print(`Rating: ${rating(average)} < ${average} >`, `Appetite ☺ ${data[Rows].appetite}`)

    }

    Center('< prev  next >', 50, ' ', 1, 1)
    side_print('< More > ', '< Out >')

    let input = readline.question('\n >: ').toUpperCase()

    if (input == '>' && limit < category.length) {
        my_wall(page + 1)

    } else if (input == '<' && page > 0) {
        my_wall(page - 1)
    } else if (input == 'MORE') {
        more(category)
        my_wall(page)
    } else if (input == 'OUT') {
        startUp()
    } else {
        my_wall(page)
    }
}
function heading(window) {
    console.clear()
    let heading_String = ['', " AFTERTASTE ", `< ${window} >`, '']
    heading_String.forEach(x => Center(spacing_(x.toUpperCase()), 50, "-"))
}
function invalid(i = 0) {
    let message = ['Invalid', 'User/pass is incorect', 'Give it Up!', 'Please Sign up']
    Center(`${spacing_(message[i % message.length])}`, 50, ' ', 1, 1)
}

