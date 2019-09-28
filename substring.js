let str = 'kyle'

console.log (str.substr(1))
console.log(str.charAt(0))


function testkolng(text){
    
    if(text == ''){
        return ''
    }else{
        return testkolng(text.substr(1))+text.charAt(0)
    }
}

console.log(testkolng('kyle'))