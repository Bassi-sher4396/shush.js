// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(2,4,5,6));
function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(300,200,200,11,355,55));
//pehli do values val1 and val2 me chali jaengi and the rest become the part of the array
const user={
    username:"hitesh",
    price :199

}
function handleObject(anyobject){
    console.log(`username is${anyobject.username} and price is ${anyobject.price}`);
    

}
// handleObject(user)
handleObject(
    {
        username: "sam",
        price: 399
    }
)
const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500]));
