// Multiple condition and Multiple Output(ifelse)
// One condition and one output(ternary)
// One condition and multiple output(switch)

var name = "Aakashh"
switch(name){
    case 'Aakash':
        console.log(`Hi ${name}`)
        break;
        case 'Eva':
            console.log(`hi ${name}`)
            break;
            default:
                console.log(`hi default case`)
}

var input =2

switch(input%2){
    case 0:
        console.log(`Number is even`)
        break;
        case 1:
            console.log(`Number is Odd`)
            break;
            default:
                console.log(`Hi default case`)
}
switch(new Date().getDay()){
    case 0:
        console.log(`Today is monday`)
        break;
        case 4:
            console.log(`Today is thursday`)
            break;
            default:
                console.log(`Invalid Input`)

}