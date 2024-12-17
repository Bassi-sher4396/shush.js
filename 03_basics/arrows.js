const user ={
    username : "hardik",
    price : 999,

 welcomeMessage : function(){
    console.log(`${this.username} welcome to the pornhub`);
    console.log(this);
    
 }
}
//thhis means current context
user.welcomeMessage()
user.username="lulli"
user.welcomeMessage()
console.log(this);//its context here will be empty


function chai(){
    let user = "hardik"
    console.log(this.user);
    
}
//context works only for objects
chai()

const choot = () => {
    let lund = "hard"
    console.log(this);
    console.log(this.lund);
    
    
}
choot()
// const addTwo = (num1,num2) => {
//     return num1 + num2
// } 
// console.log(addTwo(3,4))
const addTwo = (num1,num2) => (num1 + num2) //implicit return
console.log(addTwo(3,4));

const fuddi = () => ({username:"hardy"})
console.log(fuddi());

