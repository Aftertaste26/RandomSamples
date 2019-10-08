const account = require('./accounts')
const resto = require('./resto')
const readline = require('readline-sync')
const input = readline.question
const print = console.log
const clear = console.clear
const width = 50
const today = new Date()

let user
let pass
let profile
let firstName
let lastName
let data

//update average rating
resto.All.list.forEach(x => x.rating = (x.review.map(x => x.rating).reduce((x, y) => x + y) / x.review.length).toFixed(1))
resto.All.list.sort((x, y) => y.rating - x.rating)

startUp()

function startUp() {

    heading('Food nerd')
    Center('< Sign in >    < Sign_up >', width, ' ', 5, 5)
    Center('Food is the ingredient that binds us together.', width, ' ', 1)

    switch (input(' >: ').toUpperCase()) {

        case 'SIGN IN':
            sign_in()
            break;
        case 'SIGN UP':
            sign_up()
            break;
        case 'SOFTER':
            user = 'Kyle@Softer'

            profile = account.find(x => x.User == user)
            firstName = profile.firstName
            lastName = profile.lastName
            data = profile.saveData
            randomly(resto.All.list)

            break;
        default:
            startUp()
            break;
    }

}
function sign_up() {

    do {
        heading('Sign up')
        print('\n')

        user = input('User >: ')
        pass = input('Pass >: ')

        if (pass.length < 6) {
            Center('Pass must be aleast 6 characters')
            input(' >: ')
        }

    } while (pass.length < 6)

    firstName = input('First Name >: ')
    lastName = input('Last >: ')

    account.push({
        User: user,
        Pass: pass,
        firstName: firstName,
        lastName: lastName,
        saveData: []
    })

    profile = account.find(x => x.User == user)
    data = profile.saveData
    input('\n' + spacing_('welcome').toUpperCase())
    randomly(resto.All.list)
}
function sign_in(i = 0) {

    heading('Log in')
    print('\n')
    user = input('User >: ')
    pass = input('Pass >: ', { hideEchoBack: true })

    if (account.some(x => x.User == user && x.Pass == pass)) {

        profile = account.find(x => x.User == user)
        firstName = profile.firstName
        lastName = profile.lastName
        data = profile.saveData

        randomly(resto.All.list)

    } else {

        invalid(i)
        side_print(' ', '< Sign Up >')

        if (input((' >: ').toUpperCase()) == 'SIGN UP') {
            sign_up()
        }

        sign_in(i += 1)

    }
}
function Food_feed(category, page = 0) {

    heading('food feed')

    //update average rating per restaurant
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


        Center(`• ${spacing_(category[Rows].name)} •`, width, ' ', 1, 2)
        sentence(most_appetite.post)
        print(`\n- ${most_appetite.by} ${most_appetite.date}`)
        side_print(`Rating: ${rating(Rating)} < ${Rating} >`, `Appetite ☺ ${most_appetite.appetite}`)

    }

    Center('< prev  next >', width, ' ', 1, 1)
    side_print('< More >', '< Out >')

    let key = input('\n >: ').toUpperCase()

    if (key == '>' && limit < category.length) {
        Food_feed(category, page + 1)

    } else if (key == '<' && page > 0) {
        Food_feed(category, page - 1)
    } else if (key == 'MORE') {
        more(category)
        Food_feed(category, page)
    } else if (key == 'OUT') {
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
            return print(`${text}`);
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
        return print(left + right)
    return side_print((left + '  ').substring(0, limit), right, length)
}
function sentence(str, length = 50) {
    let output = ''
    str = str.split(' ')
    for (const word of str) {
        if (output.length + word.length < length) {
            output += ' ' + word
        } else {
            print(output)
            output = word
        }

    }
    console.log(output)
}
function more(resto) {
    let option = ['My Wall', 'Shuffle', 'Category', 'List', 'Out']
    print('\n')
    option.forEach((x, y) => side_print(' ', ` ${x} - <${y}>`))
    print('\n')

    let input = readline.question('\n >: ')

    switch (input) {
        case '0':
            my_wall()
            break;
        case '1':
            randomly(resto.All.list)

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
    print('\n')

    resto.Type.forEach((x, y) => print(` <${y}> - ${x.name}`))

    let key = Number(input('\n >: '))

    if (key < resto.Type.length) {
        return resto.Type[key].list
    } else {
        CATEGORY()
    }
}
function list(category) {

    heading('List')
    print('\n')

    category.forEach((x, y) => print(`<${y}> - ${x.name}`))

    let input = Number(input('\n >: '))

    if (input < category.length) {
        reviews(category[input])
    }

}
function reviews(category, page = 0) {

    heading('Review')

    Center(`• ${spacing_(category.name)} •`, width, ' ', 1, 1)
    let most_appetite = category.review.sort((x, y) => y.date_ID - x.date_ID)
    let limit = 2 + (page * 2)

    if (limit > category.review.length) {
        limit = category.review.length
    }

    for (let Rows = page * 2; Rows < limit; Rows++) {


        sentence(most_appetite[Rows].post)
        print(`\n- ${most_appetite[Rows].by}\n`)
        side_print(`Rating: ${rating(most_appetite[Rows].rating)} < ${most_appetite[Rows].rating} >`, `Appetite ☺ ${most_appetite[Rows].appetite}`)
        print('\n')

    }

    Center('< prev  next >', width, ' ', 1, 1)
    side_print('< Home >', '< Out >')

    let key = input('\n >: ').toUpperCase()

    if (key == '>' && limit < category.review.length) {
        reviews(category, page + 1)
    } else if (key == '<' && page > 0) {
        reviews(category, page - 1)
    } else if (key == 'HOME') {
        Food_feed(resto.All.list)
    } else {
        reviews(category, page)
    }

}
function my_wall(page = 0) {

    heading('Your Wall')
    Center(spacing_(`${firstName} ${lastName}`), width, ' ', 1, 1)
    Center(user)

    let limit = 2 + (page * 2)

    if (!data.length) {
        let message = [' ', 'Good Food', 'is', 'Good Mood', ' ']
        print('\n')
        message.forEach(x => Center(spacing_(x)))
        print('\n')
        print('no post yet\n')
    }

    if (limit > data.length) {
        limit = data.length
    }

    for (let Rows = page * 2; Rows < limit; Rows++) {

        let cat_index = resto.Type.findIndex(x => x.name == data[Rows].type)
        let name_i = resto.Type[cat_index].list.findIndex(x => x.name == data[Rows].name)
        let review_i = resto.Type[cat_index].list[name_i].review.findIndex(x => x.date_ID == data[Rows].date_ID)
        let resto = resto.Type[cat_index].list
        let posted_data = resto[name_i].review[review_i]
        /* 
                console.log(posted_data)
                readline.question('') */

        resto.forEach(x => x.rating = (x.review.map(x => x.rating).reduce((x, y) => x + y) / x.review.length).toFixed(1))

        Center(`• ${spacing_(data[Rows].name)} •`, width, ' ', 1, 1)
        sentence(posted_data.post)
        print(`\n${posted_data.date}`)
        side_print(`Rating: ${rating(posted_data.rating)} < ${posted_data.rating} >`, `Appetite ☺ ${posted_data.appetite}`)

    }

    Center('< prev  next >', width, ' ', 1, 1)
    side_print('< More > < Post >', '< Out >')

    let key = input('\n >: ').toUpperCase()

    if (key === '>' && limit < data.length) {
        my_wall(page + 1)
    } else if (key === '<' && page > 0) {
        my_wall(page - 1)
    } else if (key === 'MORE') {
        more(resto.All.list)
        my_wall(page)
    } else if (key === 'POST') {
        POST()
    } else if (key === 'OUT') {
        startUp()
    } else {
        my_wall(page)
    }
}
function heading(name) {
    clear()
    let heading_String = ['', " • AFTERTASTE • ", ` •${name}• `, '']
    heading_String.forEach(x => Center(spacing_(x.toUpperCase()), width, "─"))
}
function invalid(i = 0) {
    let message = ['Invalid', 'User/pass is incorect', 'Give it Up!', 'Please Sign up']
    Center(`${spacing_(message[i % message.length])}`, width, ' ', 1, 1)
}
function POST(i = 0, j, k) {

    heading('Write post')
    Center(spacing_(`${firstName} ${lastName}`), width, ' ', 1, 1)
    Center(user, width, ' ', 2)

    switch (i) {
        case 0:

            let type = resto.Type.map(x => x.name).filter(x => x !== 'All')
            type.forEach((x, y) => print(` <${y}> - ${x}`))

            j = readline.questionInt(' >: ') + 1

            if (j > type.length) {
                POST(i, j)
            }
            POST(1, j)

        case 1:

            let resto = resto.Type[j].list.map(x => x.name)

            print(`»${resto.Type[j].name}`)
            resto.forEach((x, y) => print(` <${y}> - ${x}`))

            k = readline.questionInt(' >: ')

            if (k > resto.length) {
                POST(i, j, k)
            }
            POST(2, j, k)

        case 2:

            print(` » ${resto.Type[j].name}`)
            print(` » ${resto.Type[j].list[k].name}`)

            print('\n » Write something...')
            let post = readline.question(' >: ')

            print('\n » Rating...0-5')
            let rate = readline.questionInt(' >: ')

            print('\n » Appetite...0-10')
            let Appetite = readline.questionInt(' >: ')
            let date_ID = Date.now()

            data.unshift({
                type: resto.Type[j].name,
                name: resto.Type[j].list[k].name,
                date_ID: date_ID
            })
            resto.Type[j].list[k].review.unshift({
                post: post,
                by: firstName,
                rating: rate,
                appetite: Appetite,
                appetite_peps: [],
                date: getDate(),
                date_ID: date_ID
            })

        /*  console.log(JSON.stringify(data, null, 2))
         readline.question('')
         console.log(JSON.stringify(resto.Type[j].list[k].review, null, 2)) */

    }

    Center(spacing_('Posted'))
    readline.question(' >: ')
    Food_feed(resto.All.list)

}
function getDate() {
    return `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
}
function randomly(category, key) {

    let random = 0
    let recent_numbers = [] // list of indexes that already drawn 
    let name = category.map(x => x.name)
    let Rating = category.map(x => x.rating)
    let location = category.map(x => x.location)
    let specialty = category.map(x => x.specialty)

    do {

        clear()
        heading('Shuffle')

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

        // I N D E X E S
        let j = resto.Type.map(x => x.list.map(x => x.name).includes(name[random])).indexOf(true, 1)
        let k = resto.Type[j].list.map(x => x.name).indexOf(name[random])
        let l = resto.Type[j].list[k]

        //END----------------------< MAIN_SHUFFLER >--------------------------END//


        //  »  «  ▬  • ─
        // M A I N  O u p u t
        Center("____ W H E R E ' S  T H E  F O O D ____", width, " ", 0, 3)
        Center("─── R A N D O M  P I C K E D ! ───", width, " ", 2)
        Center(`  • ${name[random].toUpperCase()} •  `, width, " ", 1, 0)
        Center(` Rating: ${rating(Rating[random])} `, width, " ", 3)

        if (specialty[random]) {
            print('Known FOR')
            sentence(`» ${specialty[random]} «`)
        }

        print('Location')
        sentence(`» ${location[random]} «`)
        print('')

        if (l.category.length) {
            side_print('< Menu >', '< Post >')
        } else {
            side_print('', '<Post>')
        }

        //END-----------------<THIS CODE RANDOMIZED THE SELETED CATEGORY>---------------END//


        side_print("< Option > < List >", "< In > < Out >")
        key = input("\n >: ").toUpperCase()

        switch (key) {

            case "OPTION":
                Center(spacing_('OPTION'))
                randomly(category, option())
                break
            case "LIST":
                readline.question('LIST')
                randomly(category)
                break
            case "IN":
                Food_feed(resto.All.list)
                break
            case "POST":
                POST(2, j, k)
                break
            case 'MENU':

                if (l.category.length)
                    Menu(l)


            default:

                break
        }

    } while (key !== 'OUT')
    startUp()
}
function option() {
    let option = ['Category', 'List', 'Log In', 'Out']
    print('\n')
    option.forEach((x, y) => side_print(' ', ` ${x} - <${y}>`))
    print('\n')

    switch (input('\n >: ')) {
        case '0':
            randomly(CATEGORY())
            break;
        case '1':
            return 'LIST'
        case '2':
            Food_feed(resto.All.list)
            break;
        case '3':
            startUp()
            break;
    }
}
function Menu(obj) {

    //--SET COLUMN WIDTH--//
    let column_1 = 35       // ITEM
    let column_2 = 13        // ITEM DESCRIPTION
    let Column_width = [column_1, column_2]
    let title = ['» M E N U «', '» P R I C E «']
    let Output = []
    let index = choices(obj.category.map(x => x.name))

    clear()
    heading('Menu')

    // M A P P I N G  /  P U S H
    obj.category
        .map(x => x.menu)[index]
        .forEach(x => Output.push([x.name, x.price.toString()]))

    // T A B L E
    Center(`» ${rating(obj.rating)} «`, width, ' ', 0, 1)
    Center(`• ${spacing_(obj.name)} •`, width, ' ')
    Center(`» ${obj.category[index].name.toUpperCase()} «`, width, ' ', 1)
    printTable(title, Column_width, '─')
    Output.forEach(x => printTable(x, Column_width))
    Center(`» ${obj.category[index].name.toUpperCase()} «`, width, ' ', 1, 1)
    input(' >: ')
    Menu(obj)
}
function printTable(Text, length, space = ' ') {

    //-------------------------------------< TABULAR TEXT PRINT >--------------------------------------------//
    for (let i_Variable = 0; i_Variable < Text.length; i_Variable++) {

        //<-----------< SETUP >-------------->//
        let Text_Input = Text[i_Variable]                      // ARRAY OF STRING
        let Char_length = length[i_Variable]                   // ARRAY OF NUMBERS FOR TH COLUMN WIDTH

        //-------------------------------------< MAIN CODE >---------------------------------------//
        while (Text_Input.length !== Char_length) {
            Text_Input = ((space + Text_Input + space).substring(0, Char_length))
        }
        process.stdout.write(`║${Text_Input}`) // Printed by row
    }
    process.stdout.write("║\n")
}
function choices(Assigned_array, title = 'Choices') {

    clear()
    heading(title)
    print('\n')

    Assigned_array.forEach(x => print(`<${Assigned_array.indexOf(x)}> - ${x}`))
    let elementCount = Assigned_array.length
    let key = input("\n >: ")

    if (key) {
        
        if (!(key < elementCount)) {
            choices(Assigned_array)
        }

        return Number(key)

    } else {
        randomly(resto.All.list)
    }
}

