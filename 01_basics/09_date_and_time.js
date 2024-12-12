let myDate = new Date()
console.log(myDate);//datatype=>object

console.log(myDate.toString());
console.log(myDate.toDateString())//ye krne se time chla jaega only date
console.log(myDate.toLocaleString());//numerical dates 12hr clock time
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());//same as above
// let myCreateDate = new Date(2023,0,23)
let myCreateDate = new Date("2023-01-14")// here january is 1 becaue when we write in dd-mm-yyyy format months start from 1

console.log(myCreateDate.toDateString());
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());//helps to compare dates in milliseconds 
console.log(Math.floor(Date.now()/1000));//to get time in seconds


let newDate = new Date()
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString("default",{
    weekday:"long",
    month:"long"
}));//locale string ke andar hum ek object define krte hai jiske andar hum bhot sari parameters define krte hai
