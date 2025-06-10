// Local Scope
// Global Scope

// enclose something

var a = 10
function add(){
    var b = 20
    return a+b
}
console.log("a>>>",a)
console.log(add())
console.log("b>>>",b)

// Variable that can be access outside the curly bracket and inside also that is in global scope
// Variable that can only be access inside curly bracket that is local scope

var a = 23;
function add(){
    var b = 45;
    return a+b;
}
console.log("a>>>",a)
console.log("b>>>",b)
console.log(add())

var a = 10
for (i=0;i<5;i++){
    var b = 20
    console.log(a+b+i)
}
console.log("a outside>>>>",a)
console.log("b>>>",b)

var a = 10
for (i=0;i<5;i++){
    const b = 20
    console.log(a+b+i)
}
console.log("a outside>>>>",a)
console.log("b>>>",b)
VM124:4 30
VM124:4 31
VM124:4 32
VM124:4 33
VM124:4 34
VM124:6 a outside>>>> 10
VM124:7 b>>> 20
undefined
var a = 10
for (i=0;i<5;i++){
    let b = 20
    console.log(a+b+i)
}
console.log("a outside>>>>",a)
console.log("b>>>",b)
VM136:4 30
VM136:4 31
VM136:4 32
VM136:4 33
VM136:4 34
VM136:6 a outside>>>> 10
VM136:7 b>>> 20
undefined
let a = 10
for (i=0;i<5;i++){
    var b = 20
    console.log(a+b+i)
}
console.log("a outside>>>>",a)
console.log("b>>>",b)
VM148:1 Uncaught SyntaxError: Identifier 'a' has already been declaredUnderstand this error
let a = 10
for (i=0;i<5;i++){
    const b = 20
    console.log(a+b+i)
}
console.log("a outside>>>>",a)
console.log("b>>>",b)
VM152:1 Uncaught SyntaxError: Identifier 'a' has already been declaredUnderstand this error
var a = 10
for (i=0;i<5;i++){
    let b = 20
    console.log(a+b+i)
}
console.log("a outside>>>>",a)
console.log("b>>>",b)
VM172:4 30
VM172:4 31
VM172:4 32
VM172:4 33
VM172:4 34
VM172:6 a outside>>>> 10
VM172:7 b>>> 20
undefined