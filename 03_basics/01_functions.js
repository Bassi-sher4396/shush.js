function sayMyName(){
    console.log("h");
console.log("a");
console.log("r");
console.log("d");
console.log("i");
console.log("k");

}
sayMyName()//execution is ()

// function addTwoNumbers(number1,number2 ){
//     console.log(number1+number2)
// }

//defining a function


//function ki definition me liye jane wale parameters i.e number1, 2 here and when something is passed in afunction then it is the arguement


// addTwoNumbers(3,"4")
// addTwoNumbers(3,null)
// addTwoNumbers(3,'a')

// const result = addTwoNumbers(3,4)
// console.log("result:",result);
// 
// 
// 

//it will output undefined

function addTwoNumbers(number1,number2 ){
    // let result = number1 + number2
    // return result
 return number1+ number2
}

const result =addTwoNumbers(3,4)
console.log("result:",result);




function loginUserMessage(username = "loda"){
    if(username === undefined){
        console.log(`please enter a username`);     
return//return likhne se ye aage ka koi kaam hi nhi krega
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hardick"))
//agar function me koi usrname de rkha ho aur hum kuch na de to ab undeined username wali condition ayegi hi nhi kyunki ab username empty ho hi nhi sakta aur agar mai arguement me kuch aur value pass kru bad me to it overwrites over thw parametric value in the function
console.log(loginUserMessage());

