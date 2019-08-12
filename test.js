let string = "fast food"
let center = Math.floor(string.length / 2)
let spaces = ""
for (index = 0; index < (20 - center); index++) {
    spaces += "_"

}
console.log(spaces+string+spaces)
