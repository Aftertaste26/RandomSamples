const readline = require('readline-sync');

let word = new Array('helloworld','engineer');
let each_Letter = new Array('hello')

console.log(`\n${word[1].length} letter word`)
console.log(word[1])

let final;
let count=0;

while(final !==0){

let input = readline.question('letter: ')

for (const x of word[1]) {

    if(x===input){
        console.log('word match '+ input)
    }else{
        console.log('word match ' + input)
    }

    each_Letter[count]=x
    count++

}
count=0


console.log(count)
console.log(each_Letter)
}
