let readline = require('readline-sync')

//Hanoi(readline.question('hi: '))

function Hanoi(disk) {

    let recent, From, To, pole_1 = [], pole_2 = [], pole_3 = []

    for (let index = 1; index <= disk; index++) {
        pole_1.push(index)
    }

    do {
        top_a = Math.max(...pole_1)
        top_b = Math.max(...pole_2)
        top_c = Math.max(...pole_3)


        if (top_a > top_c && top_a % 2 !== 0 && top_a !== recent) {
            pole_3.push(recent = pole_1.pop())
            From = 1
            To = 3
        } else if (top_a > top_b && top_a % 2 == 0 && top_a !== recent) {
            pole_2.push(recent = pole_1.pop())
            From = 1
            To = 2
        } else if (top_b > top_a && top_b % 2 !== 0 && top_b !== recent) {
            pole_1.push(recent = pole_2.pop())
            From = 2
            To = 1
        } else if (top_b > top_c && top_b % 2 == 0 && top_b !== recent) {
            pole_3.push(recent = pole_2.pop())
            From = 2
            To = 3
        } else if (disk % 2 == 0) {
            if (top_c > top_a && top_c !== recent) {
                pole_1.push(recent = pole_3.pop())
                From = 3
                To = 1
            } else if (top_c > top_b && top_c !== recent) {
                pole_2.push(recent = pole_3.pop())
                From = 3
                To = 2
            }
        } else {
            if (top_c > top_b && top_c !== recent) {
                pole_2.push(recent = pole_3.pop())
                From = 3
                To = 2
            } else if (top_c > top_a && top_c !== recent) {
                pole_1.push(recent = pole_3.pop())
                From = 3
                To = 1
            }
        }
        console.log(`Move a disk from pole ${From} to pole ${To}.`);

    } while (pole_3.length !== Number(disk))

}

var hanoi = function (disc, src, aux, dest) {
    if (disc > 0) {
        readline.question(disc)
        hanoi(disc - 1, src, dest, aux);
        readline.question('Move disc ' + disc + ' from ' + src + ' to ' + dest);
        hanoi(disc - 1, aux, src, dest);
    }
};

hanoi(3, 'pole1', 'pole2', 'pole3');

/* function debug() {

    console.log(pole_1);
    console.log(pole_2);
    console.log(pole_3);
    console.log('\nT O P  D I S K')
    console.log(`${Math.max(...pole_1)} - ${Math.max(...pole_2)} - ${Math.max(...pole_3)}\n`);
    console.log(`pole length ${pole_3.length}`);
    console.log(`Recent number ${recent}`);
    readline.question('E N T E R ')
    console.clear()

} */
