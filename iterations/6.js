const my = [1,2,3,4]
//reduce me parameters me ek accumulator hai aur dusra current value ,,accumulator ki initail value scope ke baad di jati hai jo ki sirf usko initiate krne ke liye read kri jati hai aur ek baar hojane ke baad accumulator ki value return wali ho jati hai
const myTotal = my.reduce((acc,currentval)=>{
   console.log(`acc is ${acc} and currval is${currentval}`);
   
    return acc *currentval
} ,1)
 console.log(myTotal);
 //can be used like recursive function in cpp