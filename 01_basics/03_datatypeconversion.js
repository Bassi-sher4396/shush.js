let score = "33abc"
console.log(typeof score)
console.log(typeof(score))
let valueInNumber = Number(score)//still prints the type number for 33abc
console.log(typeof valueInNumber)
console.log(valueInNumber)//prints nan (for score = 33abc and score=undef and for score =any string also)therefore check value of number carefully
// if score =null then its console log will print 0 as its output
let isLoggedIn =""
let BooleanIsLoggedIn= Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn)//here output willbe 1
//""=>false
//"hitesh"=>true
let some= 33
let stringNumber = String(some)
console.log(stringNumber)//33 string output hojaega
/*********operations*/
let value=3
let negValue= -value
console.log(negValue)
console.log(2**3)//power
let str1 = "hello"
let str2 = "hardik"
let str3 = str1+str2
console.log(str3)
console.log("1"+2)
console.log(1+"2")
console.log(1+"2"+2)
console.log(1+2+"2")
console.log(3+4*5%3);//dont write these type of quotes
console.log(+true);
console.log(+"");
let num1,num2,num3
num1=num2=num3=2+2
let gameCounter= 100
console.log([num1,num2,num3]);

++gameCounter;

console.log(gameCounter)
