let readline = require("readline-sync");                               //important
let initialVelocity = Number(readline.question("Initial Velocity: ")); // input Initial velocity
let angle = Number(readline.question("Angle of Sling Shot: "));        // input Angle of sling shot
let time = Number(readline.question("Time: "));                        // input Time
let gravity = 9.81;                                                    // Value of gravity
let x = initialVelocity * Math.cos(angle* Math.PI / 180) * time;       // getting x coordinate
let y = (initialVelocity * Math.sin(angle * Math.PI / 180) * time) - (0.5 * gravity * Math.pow(time, 2)); // getting y coordinate

//output = (x , y) coordinates
console.log(x.toFixed(2) + ", " + y.toFixed(2));