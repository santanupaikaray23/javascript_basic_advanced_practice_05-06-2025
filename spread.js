function add(a,b,c,d){
    return a+b+c+d
}
var num = [1,2,3,4]

// console.log(add(num))
// num.map((data)=>{add(data)})
add(...num)

var cars = ['Kia','BMW','Volbo']
var car2 = ['oskda','Merc','Audi','Maruti','Nexa']
output = ['Sokda','Merc',...cars,'Audi','Nexa']

function add(...args){
    let sum = 0
    for(data of args){
        sum=data+sum
    }
    return sum
}
var num = [1,2,3,4]
add(...num)

function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}
mul(1)(2)(3)