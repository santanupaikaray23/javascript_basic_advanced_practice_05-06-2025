var a = 10
var b = 20
a+b
30
///////////////
function
method
iffi
generator
//////////////

// function
function add(a,b){
    return a+b
}
function * loop(userInput){
for(i=0;i<userInput;i++){
yield i
}
}
loop(10)
loop {<suspended>}
var data = loop(5)
undefined
data.next()
{value: 0, done: false}done: falsevalue: 0[[Prototype]]: Object
function * loop(userInput){
for(i=0;i<userInput;i++){
yield i
}
}
loop(10)
loop {<suspended>}
var data = loop(10)
undefined
data.next()
{value: 0, done: false}