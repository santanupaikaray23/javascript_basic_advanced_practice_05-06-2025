//Array is the collection of Homegebiour and hetrogeniour data type.

var a = [12,45,34,56,78,789](Array of Number)
var b = ['wee','dfg','hjk','qwert'](Array of String)
var c = [true,false,false,true](Array of Boolean)
var d = [234,'wert',true,false,'sdfgf',3,5,6]

var city = ["werr","dfgh","vbn","asdf"]
push > add in the end of the Array
unshift > add in the begining of the array
pop > always remove the last value of the array
shift > always remove the first value of the array

var a = ['a','b','c',1]
var b = [1,2,3]
a+b

var city = ["werr","dfgh","vbn","asdf",12,34,1,56,true,false,"sdfg",true,45]
undefined
city.indexOf('sdff')
-1
city.indexOf('werr')
0
city.indexOf('vbn')
2
city.indexOf('dfgh')
1

var city = ["werr","dfgh",['Red','Yellow',["Bmw","Audi","Skoda"],'Green'],"vbn","asdf"]

var myarray = ["werr","dfgh",['Red','Yellow',["Bmw","Audi","Skoda"],'Green'],"vbn","asdf"]
undefined
myarray[0]
'werr'
myarray[2]
(4) ['Red', 'Yellow', Array(3), 'Green']
myarray[2][2]
(3) ['Bmw', 'Audi', 'Skoda']
myarray[2][2][2]
'Skoda'
myarray.flat()
(8) ['werr', 'dfgh', 'Red', 'Yellow', Array(3), 'Green', 'vbn', 'asdf']0: "werr"1: "dfgh"2: "Red"3: "Yellow"4: Array(3)0: "Bmw"1: "Audi"2: "Skoda"length: 3[[Prototype]]: Array(0)5: "Green"6: "vbn"7: "asdf"length: 8[[Prototype]]: Array(0)
myarray.flat(2)
(10) ['werr', 'dfgh', 'Red', 'Yellow', 'Bmw', 'Audi', 'Skoda', 'Green', 'vbn', 'asdf']