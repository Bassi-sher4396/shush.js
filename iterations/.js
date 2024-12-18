const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums  =  myNumbers.map( (num)=>num+10 )
const newNums = myNumbers.map((num)=>num*10).map((num)=>num+1)
//ek baar pehle wle map se guzrne ke baad num ki value num*10 hi hojati hai
console.log(newNums);
const lulli =[]
const oldmonk = myNumbers.forEach((num)=>{
    num=num+10
    lulli.push(num)
    console.log(lulli);
    
})
//console.log(lulli);

