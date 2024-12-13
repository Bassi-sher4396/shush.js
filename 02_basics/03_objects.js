//objects literals
 //Object.create constructor method
 
 const mySym = Symbol("key1")
 
 const JsUser ={
    "name":"hardik",//  name is now a string so it is only acccesed by square notations
   [mySym] : "myKey1" ,//this is the method to use symbol as a key 
    age:18,
location:"nlg",
email:"hkffnfjk",
isLoggedIn : false,
lastLoginDays : ["monday","saturday"] }
console.log(JsUser);

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);//symbol key only accessed by square notations

JsUser.email= "hitesh@jj"
//Object.freeze(JsUser)//freezes the value
JsUser.email= "lund"
console.log(JsUser.email);
 

JsUser.greeting = function(){
    console.log("hello JS user");
}
JsUser.greeting = function(){
    console.log(`hello JS user ,${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());//different than above


