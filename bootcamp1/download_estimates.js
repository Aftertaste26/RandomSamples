let readline = require('readline-sync');        // important
let speed = Number(readline.question("Transfer Speed: ")); // input transfer speed in Megabits per second
let downloadSize = Number(readline.question("Download Size: ")); // input downloaded size in Megabytes
let transfered = Number(readline.question("Transfered Size: ")); // input already transfered size
let remaining = downloadSize - transfered;      // remaining size of file
let percent = transfered / downloadSize * 100;  // progress in percentage
let megabyte_per_sec = speed * 1 / 8;           // convert Megabits per seconds to Megabytes per seconds
let time = remaining / megabyte_per_sec;        // calculated time in seconds
let hours = Math.trunc(time / 3600);            // convert seconds to hours just getting the whole number
let minutes = Math.trunc(time % 3600 / 60);     // convert the remainder of hours to minutes just getting the whole number
let seconds = Math.trunc(time % 60);            // getting the remainder minutes as seconds just getting the whole number 

//output
console.log("Progress: " + transfered + " of " + downloadSize + " MB downloaded (" + percent.toFixed(2) + "%)");
console.log("Remaining: " + remaining + " MB, " + hours + "h " + minutes + "m " + seconds + "s remaining");
