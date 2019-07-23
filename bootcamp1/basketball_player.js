let readline = require('readline-sync');                            // very important
let playersName = readline.question("Player's Name: ");             // Player name input
let playersHeight = Number(readline.question("Player's Height: ")); // Player height input in inches
let heightFeet = Math.trunc(playersHeight/12);                      // convert inches to Feet... just getting the whole number
let heightInches = playersHeight % 12;                              // Getting the remainder.. in inches..

// the output = Standing at feet"inches' tall, Players name.
console.log("Standing at " + heightFeet + "'" + heightInches + "\" " + "tall, " + playersName + "."); 