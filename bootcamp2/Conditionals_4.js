let readline = require("readline-sync");
let callMinute = Number(readline.question());
let textMessages = Number(readline.question());
let plan = 799;
let excess_MinutesCharge = (callMinute % 60) * 6.50;
let excess_SMScharge = (textMessages % 100);
let fee_911 = 25;
let tax = 0;
let totalBill = 0;

console.log("Call minutes: " + callMinute);
console.log("Text messages: " + textMessages);

// if no excess charge
if (excess_MinutesCharge != 0) {

    console.log("Excess minutes charges: " + excess_MinutesCharge.toFixed(2));

}

// if no excess charge
if (excess_SMScharge != 0 && textMessages > 100) {

    console.log("Excess SMS charges: " + excess_SMScharge.toFixed(2));

} 
else {

    excess_SMScharge = 0;

}


tax = (plan + excess_MinutesCharge + excess_SMScharge + fee_911) * 0.05;
totalBill = plan + excess_MinutesCharge + excess_SMScharge + fee_911 + tax;

console.log("911 fee: " + fee_911.toFixed(2));
console.log("Tax: " + tax.toFixed(2));
console.log("Total bill: " + totalBill.toFixed(2));
