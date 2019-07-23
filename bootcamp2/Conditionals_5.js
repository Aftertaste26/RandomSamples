let readline = require('readline-sync');
let input = Number(readline.question("How old are you Mam/Sir? : "))
let guardian;
let stat;

// 1 to 17 minors 
if (input <= 17) { 

    console.log("\nMinors are Not Allowed")
    guardian = (readline.question("\nAre you accompanied by a guardian? "))

    if (guardian == "yes") {

        console.log("\nwell okay, you can proceed")

    } else if (guardian == "no") {

        console.log("\nSorry but I'm not allowing you")

    } else {
        console.log("\nYou cannot proceed!")
    }

}

// 18 to 21
else if (input >= 18 && input <= 21) {  

    console.log("\nMay I see your identification card?")
    stat = readline.question("\npress enter to give your identification card")
    console.log("\nEnjoy the Movie")


}

// 22 to 25
else if (input >= 22 && input <= 25) { 

    console.log("\nYou may proceed")
    console.log("\nEnjoy the Movie")

}

// 60 to 90
else if (input >= 60 && input <= 90) { 

    console.log("\nYou're to old for this movie.")

// 26 t0 59
} else { 

    console.log("\nEnjoy the movie")

}

