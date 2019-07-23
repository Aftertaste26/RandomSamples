/* 
By Kyle Osunero
BSSE 1

To get the Ratio
check if both "No_Of_Male" and "No_Of_Female" 
has a Greatest Common Denominator

to get the Greatest common denominator
one way is to have a loop that will check each number
from your total number of entries untill you get GCD

means if we have 10 number of entries 
then we have this numbers:
10
9
8
7
6
5
4
3
2
1

Given 
we have 5 males and 5 females, total of ten.
to get the GCD
we need to check if number of male and female is divisible by x
where: x = {10,9,8,7,6,5,4,3,2,1}

<<MALE>>
5 / 10 = 0.5
5 / 9  = 0.56
5 / 8  = 0.62
5 / 7  = 0.71
5 / 6  = 0.83
5 / 5  = 1    <-------5 is divisible by 5 <--- the GREATEST COMMON DENOMINATOR
5 / 4  = 1.25
5 / 3  = 1.67
5 / 2  = 2.5
5 / 1  = 5    <-------5 is divisible by 1

<<FEMALE>>
5 / 10 = 0.5
5 / 9  = 0.56
5 / 8  = 0.62
5 / 7  = 0.71
5 / 6  = 0.83
5 / 5  = 1    <-------5 is divisible by 5 <--- the GREATEST COMMON DENOMINATOR
5 / 4  = 1.25
5 / 3  = 1.67
5 / 2  = 2.5
5 / 1  = 5    <-------5 is divisible by 1

SO THE RATIO IS "1:1"

*/
let No_Of_Entries = 10
let No_Of_Male = 6
let No_Of_Female = 4
let check = No_Of_Entries
let ratio = `${No_Of_Male}:${No_Of_Female}`

while (check !== 0) {
    if (No_Of_Male % check === 0 && No_Of_Female % check === 0) {
        ratio = `${No_Of_Male / check}:${No_Of_Female / check}`
        check = 0
    } else {
        check--
    }
}

console.log(ratio)