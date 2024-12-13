//const tinderUser = new Object()//singleton
const tinderUser = {}//non singleton
tinderUser.id = "123"
tinderUser.name = "hrdick"
tinderUser.isLoggedIn = false



console.log(tinderUser);

const regularUSer= {
    email:"frkfjker",
    fullname: {
        userfullname:{
            firstname: "hard",
            lastname : "dick",
        }
    }
}
console.log(regularUSer.fullname?.userfullname.firstname);// question mark after fullanem it signifies whether something like fullname exists or not
const obj1 ={
    1: "q", 
    2: "r",

}
const obj2 = {
    4:"d",
5:"t"
}
const obj3 = Object.assign({},obj1,obj2)//khali curly parenthesis is a part of syntax
//const obj3 ={...obj1,...obj2} spread method

console.log(obj3);
 /*array of objects*/const users =[
    {
        id: 1,
        email:"jdjcdc"
    },
    {
        id: 2,
        email:"jdjcdc"
    },
    {
        id: 3,
        email:"jdjcdc"
    },
    {
        id: 4,
        email:"jdjcdc"
    },
    {
        id: 5,
        email:"jdjcdc"
    },
    {
        id: 6,
        email:"jdjcdc"
    },
    {
        id: 7,
        email:"jdjcdc"
    },
    {
        id: 8,
        email:"jdjcdc"
    }
 ]
 console.log(users[1].id);
 console.log(tinderUser);
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser ));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 
 