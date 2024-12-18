const coding = ['js','cpp','java','python']

const values =    coding.forEach( (item)=>{
    //console.log(item);
    return item
} )
console.log(values);

// it means ki for each loop koi bhi value return nhi krta 



const numbers = [1,2,3,4,5,6,7,8,9,10]
const newnumbers=  numbers.filter((num)=>(num>4))
console.log(newnumbers);
//filter does return the values  unlike for each (its useful)  plus we can use direct condition in filter




//by using for loop 


const newNum = []
numbers.forEach(  (num)=>{
    if (num > 4) {
newNum.push(num)
        
    }

}    )

console.log(newNum);


