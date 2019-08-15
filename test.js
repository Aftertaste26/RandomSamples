let x = new Date()
let dateNow = `${x.getMonth()+1}/${x.getDate()}/${x.getFullYear()}`
let dueDate = ['8/14/2019','']

console.log(dateNow)
console.log(dueDate[0])

if (dueDate == dateNow){
    console.log('Payment is Due now')
}