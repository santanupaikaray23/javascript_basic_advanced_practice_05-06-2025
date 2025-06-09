
for 
while
do while
for of
Map
filter

/////////////////////////////
for> generate series of value or help to iterate over Array
var a = 15
for(i=0;i<5;i++){
    console.log(i)

}

for(var i=0;i<5;i++){
    let a =10
    console.log(a+i)
}

var city = ["London","Delhi","NewYork","Paris"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

var i = 5
while(i<5){
    console.log(i)
    i++
}

var city = ["London","Delhi",["Bmw","Audi","Skoda"],"NewYoke","Paris"]
for(mycity of city){
    if(Array.isArray(mycity)){
        for(car of mycity){
            console.log(cars)
        }
    }else{
        console.log(mycity)
    }
}
London
VM85:8 Delhi
VM85:5 Bmw
VM85:5 Audi
VM85:5 Skoda
VM85:8 NewYoke
VM85:8 Paris