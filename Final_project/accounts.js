let object = [
    { value: 9 },
    { value: 6 },
    { value: 8 },
    { value: 2 },
    { value: 5 }
]

let x = average(object)

function average(array) {
    return array.reduce((x, y) => x.value + y.value)
}
console.log(x)