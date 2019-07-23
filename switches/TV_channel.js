let readline = require("readline-sync")
let Channel = readline.question("Channel ")

switch (Channel) {
    case "1":
        console.log("CNN News")
        break;
    case "2":
        console.log("ABS-CBN")
        break;
    case "3":
        console.log("GMA")
        break;
    case "4":
        console.log("NBA TV")
        break;
    case "5":
        console.log("Star Movies")
        break;

    default:
        console.log(Channel)
        console.log("Subcribe for more shows to watch!")
        
        break;
}