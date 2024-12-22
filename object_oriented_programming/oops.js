const user ={
    username:'hardik',
    logincount:8,
signedin:true,
getUserDetails: function(){
    console.log(this.username);
    console.log(this);
    
}
}


console.log(user);
console.log(user.getUserDetails());



//const promisone =new Promise()  // new is a constructoe function jisse hum ek hi object literal se alag alag instances(context) bana ske

function User(username,logincount,isLoggedIn){
    this.username=username // yhan this wala username jo hai ek variable hai jiske andar hum ek value pass kara rhe hai username ki (jo ki mera parameter pass hua tha function me)

    this.logincount=logincount
    this.isLoggedIn=isLoggedIn
    this.greeting= function(){
        console.log(`welcome${this.username}`);
        
    }
    //return this
    //  //return this krne se ab in values ko access kr skte hai
}

const userOne = new User('hardik',12,true)
const userTwo = new User('lulli in chut','11',false)
// agar upar dono jgh hum new n likhte to userTwo userOne ki values ko overwrite krdega chahe userTwo ko print na bhi kro new bna dene se instances lg ho jaenge to fadak nhi pdega 
console.log(userOne);

/* steps of new */


//jaise hi new keyword use hoga to humare pass ek empty object create hota hai jise instances kaha jata hai
//constructor function call hota hai jo sare arguements ko usme pack  krta hai aur humme de deta hai
//jo bhi this keywords ke arguements humne likhe the usme inject hojate hai 
//hume mil jata hai

console.log(userTwo.constructor);  //constructor property reffernce hoti hai khudi ke bare me

console.log(userOne instanceof User);
console.log(userTwo instanceof User);

//instanceof tells whether something is an instance of any other thing