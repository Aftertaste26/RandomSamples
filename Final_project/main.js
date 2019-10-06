const account = require('./accounts')
const menu = require('./menu')
const readline = require('readline-sync')
let today = new Date()
let user
let pass
let firstName
let lastName
let data

menu.All.list.forEach(x => x.rating = (x.review.map(x => x.rating).reduce((x, y) => x + y) / x.review.length).toFixed(1))
menu.All.list.sort((x, y) => y.rating - x.rating)

startUp()

function startUp() {

    heading('Food nerd')
    Center('< Sign in >    < Sign_up >', 50, ' ', 5, 5)
    Center('Food is the ingredient that binds us together.', 50, ' ', 1)

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

            let profile = account.find(x => x.User == user)
            firstName = profile.firstName
            lastName = profile.lastName
            data = profile.saveData
            randomly(menu.All.list)

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

    let profile = account.find(x => x.User == user)
    data = profile.saveData
    readline.question('\n' + spacing_('welcome').toUpperCase())
    randomly(menu.All.list)
}
function sign_in(i = 0) {

    heading('Log in')
    console.log('\n')
    user = readline.question('User >: ')
    pass = readline.question('Pass >: ', { hideEchoBack: true })

    if (account.some(x => x.User == user && x.Pass == pass)) {

        let profile = account.find(x => x.User == user)

        firstName = profile.firstName
        lastName = profile.lastName
        data = profile.saveData

        randomly(menu.All.list)

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

    category.forEach(x => x.rating = (x.review.map(x => x.rating).reduce((x, y) => x + y) / x.review.length).toFixed(1))
    category.sort((x, y) => y.rating - x.rating)
    category = category.filter(x => x.review != 0)

    /*    console.log(category)
       readline.question('') */

    let limit = 2 + (page * 2)

    if (limit > category.length) {
        limit = category.length
    }

    for (let Rows = page * 2; Rows < limit; Rows++) {

        let Rating = category[Rows].rating
        let most_appetite = category[Rows].review.sort((x, y) => y.date_ID - x.date_ID)[0]


        Center(spacing_(category[Rows].name), 50, ' ', 1, 2)
        sentence(most_appetite.post)
        console.log(`\n- ${most_appetite.by} ${most_appetite.date}`)
        side_print(`Rating: ${rating(Rating)} < ${Rating} >`, `Appetite ☺ ${most_appetite.appetite}`)

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
function more(resto) {
    let option = ['My Wall', 'Shuffle', 'Category', 'List', 'Out']
    console.log('\n')
    option.forEach((x, y) => side_print(' ', ` ${x} - <${y}>`))
    console.log('\n')

    let input = readline.question('\n >: ')

    switch (input) {
        case '0':
            my_wall()
            break;
        case '1':
            randomly(menu.All.list)

            break
        case '2':
            Food_feed(CATEGORY())
            break;

        case '3':
            list(resto)
            break;
        case '4':
            startUp()
            break;
        default:
            break;
    }


}
function CATEGORY() {

    heading('Category')
    console.log('\n')

    menu.Category.forEach((x, y) => console.log(` <${y}> - ${x.name}`))

    let input = Number(readline.question('\n >: '))

    if (input < menu.Category.length) {
        return menu.Category[input].list
    } else {
        CATEGORY()
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
    let most_appetite = category.review.sort((x, y) => y.date_ID - x.date_ID)
    let limit = 2 + (page * 2)

    if (limit > category.review.length) {
        limit = category.review.length
    }

    for (let Rows = page * 2; Rows < limit; Rows++) {


        sentence(most_appetite[Rows].post)
        console.log(`\n- ${most_appetite[Rows].by}\n`)
        side_print(`Rating: ${rating(most_appetite[Rows].rating)} < ${most_appetite[Rows].rating} >`, `Appetite ☺ ${most_appetite[Rows].appetite}`)
        console.log('\n')

    }

    Center('< prev  next >', 50, ' ', 1, 1)
    side_print('< Home >', '< Out >')

    let input = readline.question('\n >: ').toUpperCase()

    if (input == '>' && limit < category.review.length) {
        reviews(category, page + 1)
    } else if (input == '<' && page > 0) {
        reviews(category, page - 1)
    } else if (input == 'HOME') {
        Food_feed(menu.All.list)
    } else {
        reviews(category, page)
    }

}
function my_wall(page = 0) {

    heading('Your Wall')
    Center(spacing_(`${firstName} ${lastName}`), 50, ' ', 1, 1)
    Center(user)

    let limit = 2 + (page * 2)

    if (!data.length) {
        let message = [' ', 'Good Food', 'is', 'Good Mood', ' ']
        console.log('\n')
        message.forEach(x => Center(spacing_(x)))
        console.log('\n')
        console.log('no post yet\n')
    }

    if (limit > data.length) {
        limit = data.length
    }

    for (let Rows = page * 2; Rows < limit; Rows++) {

        let cat_index = menu.Category.findIndex(x => x.name == data[Rows].type)
        let name_i = menu.Category[cat_index].list.findIndex(x => x.name == data[Rows].name)
        let review_i = menu.Category[cat_index].list[name_i].review.findIndex(x => x.date_ID == data[Rows].date_ID)
        let resto = menu.Category[cat_index].list
        let posted_data = resto[name_i].review[review_i]
        /* 
                console.log(posted_data)
                readline.question('') */

        resto.forEach(x => x.rating = (x.review.map(x => x.rating).reduce((x, y) => x + y) / x.review.length).toFixed(1))

        Center(spacing_(data[Rows].name), 50, ' ', 1, 1)
        sentence(posted_data.post)
        console.log(`\n${posted_data.date}`)
        side_print(`Rating: ${rating(posted_data.rating)} < ${posted_data.rating} >`, `Appetite ☺ ${posted_data.appetite}`)

    }

    Center('< prev  next >', 50, ' ', 1, 1)
    side_print('< More > < Post >', '< Out >')

    let input = readline.question('\n >: ').toUpperCase()

    if (input == '>' && limit < data.length) {
        my_wall(page + 1)
    } else if (input == '<' && page > 0) {
        my_wall(page - 1)
    } else if (input == 'MORE') {
        more(menu.All.list)
        my_wall(page)
    } else if (input == 'POST') {
        POST()
    } else if (input == 'OUT') {
        startUp()
    } else {
        my_wall(page)
    }
}
function heading(name) {
    console.clear()
    let heading_String = ['', " • AFTERTASTE • ", ` •${name}• `, '']
    heading_String.forEach(x => Center(spacing_(x.toUpperCase()), 50, "─"))
}
function invalid(i = 0) {
    let message = ['Invalid', 'User/pass is incorect', 'Give it Up!', 'Please Sign up']
    Center(`${spacing_(message[i % message.length])}`, 50, ' ', 1, 1)
}
function POST(i = 0, j, k) {

    heading('Write post')
    Center(spacing_(`${firstName} ${lastName}`), 50, ' ', 1, 1)
    Center(user, 50, ' ', 2)

    switch (i) {
        case 0:

            let type = menu.Category.map(x => x.name).filter(x => x !== 'All')
            type.forEach((x, y) => console.log(` <${y}> - ${x}`))

            j = readline.questionInt(' >: ') + 1

            if (j > type.length) {
                POST(i, j)
            }
            POST(1, j)

        case 1:

            let resto = menu.Category[j].list.map(x => x.name)

            console.log(`»${menu.Category[j].name}`)
            resto.forEach((x, y) => console.log(` <${y}> - ${x}`))

            k = readline.questionInt(' >: ')

            if (k > resto.length) {
                POST(i, j, k)
            }
            POST(2, j, k)

        case 2:

            console.log(` » ${menu.Category[j].name}`)
            console.log(` » ${menu.Category[j].list[k].name}`)

            console.log('\n » Write something...')
            let post = readline.question(' >: ')

            console.log('\n » Rating...0-5')
            let rate = readline.questionInt(' >: ')

            console.log('\n » Appetite...0-10')
            let rate = readline.questionInt(' >: ')
            let date_ID = Date.now()

            data.unshift({
                type: menu.Category[j].name,
                name: menu.Category[j].list[k].name,
                date_ID: date_ID
            })
            menu.Category[j].list[k].review.unshift({
                post: post,
                by: firstName,
                rating: rate,
                appetite: 0,
                appetite_peps: [],
                date: getDate(),
                date_ID: date_ID
            })

            console.log(JSON.stringify(data, null, 2))
            readline.question('')
            console.log(JSON.stringify(menu.Category[j].list[k].review, null, 2))

    }

    Center(spacing_('Posted'))
    readline.question(' >: ')
    Food_feed(menu.All.list)

}
function getDate() {
    return `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
}
function randomly(category, mode = '') {

    let random
    let recent_numbers = []               // list of indexes that already drawn 
    let name = category.map(x => x.name)
    let Rating = category.map(x => x.rating)
    let location = category.map(x => x.location)
    let specialty = category.map(x => x.specialty)



    do {

        console.clear()
        heading('Shuffle')

        /*     readline.question(name)
            readline.question(rating) */


        switch (mode) {

            case "OPTION":
                Center(spacing_('OPTION'))
                randomly(category, option())
                break
            case "LIST":
                readline.question('LIST')
                randomly(category)
                break
            case "OUT":
                startUp()
                break
            case "IN":
                Food_feed(menu.All.list)
                break
            case "POST":
                readline.question()
                let j = menu.Category.map(x => x.list.map(x => x.name).includes(name[random])).indexOf(true, 1)
                let k = menu.Category[j].list.map(x => x.name).indexOf(name[random])
                readline.question('wait')
                POST(2, j, k)
                break

            default:

                //----------------------< MAIN_SHUFFLER >--------------------------//

                random = Math.trunc((Math.random() * 100) + 1) % name.length

                if (recent_numbers.length < name.length) {

                    //match found add one
                    while (recent_numbers.includes(random)) {
                        random = (random + 1) % name.length
                    }

                } else {

                    //reset or empty array
                    recent_numbers = []

                }

                //listing/storing the random output
                recent_numbers.push(random)


                //END----------------------< MAIN_SHUFFLER >--------------------------END//


                //  »  «  ▬  • ─
                //MAIN Ouput
                Center(" W H E R E ' S  T H E  F O O D ", 50, "_", 0, 3)
                Center(" R A N D O M  P I C K E D ! ", 50, "─", 2)
                Center(`  • ${name[random].toUpperCase()} •  `, 50, " ", 1, 0)
                Center(` Rating: ${rating(Rating[random])} `, 50, " ", 3)

                if (specialty[random]) {
                    console.log('Known FOR')
                    sentence(`» ${specialty[random]} «`)
                }
                console.log('Location')
                sentence(`» ${location[random]} «`)
                console.log('')
                side_print(' ', '<Post>')
                //Center(`<  Location: ${location[locIndex].toUpperCase()}  >`, 50, "-")


                //END-----------------<THIS CODE RANDOMIZED THE SELETED CATEGORY>---------------END//

                break
        }

        side_print("< Option > < List >", "< In > < Out >")

        mode = readline.question("\n >: ").toUpperCase()
    } while (mode !== 'OUT')
    startUp()
}
function option() {
    let option = ['Category', 'List', 'Log In', 'Out']
    console.log('\n')
    option.forEach((x, y) => side_print(' ', ` ${x} - <${y}>`))
    console.log('\n')

    let input = readline.question('\n >: ')

    switch (input) {
        case '0':
            randomly(CATEGORY())
            break;
        case '1':
            return 'LIST'
        case '2':
            Food_feed(menu.All.list)
            break;
        case '3':
            startUp()
            break;
    }

}

