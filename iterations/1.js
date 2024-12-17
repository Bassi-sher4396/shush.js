// for loop me sabse pehle variable declare hoga uske baad condition check hogi aur agar vo true nikli to loop ki execution me ghusna hai aur fir end hone se just pehle(last wale curly parenthesis ke bahar jane se pehle) jo end me operation likhe honge vo apply hojaenge variable pe 
// agar condition fail to loop se bahar
for (let i = 0; i <= 10; i++) {
   
    console.log(`outer loop fuddi is ${i}`);
    for (let j = 0; j <= 10; j++) {
      //  console.log(`the outer element is ${i} and te inner is ${j}` );   
      if(j==8){
        console.log(`fuk`);
        break; //imp
      }
      console.log(`${i}*${j} is ${i*j}` );
      
    } 
}

let myArray = ['chut',`lund`,`fudi`]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}








//break and continue

for (let index = 0; index <= 20; index++) {
            if (index==5) {
        console.log(`stop at 5`);
        
        break;//break ke aage ki koi bhi cheez kam nhi kregi  control flow pura bahar chala jaega iteration se
    }
    console.log(index);
    

}
for (let index = 0; index <10; index++) {
    const element = index;
    if (index == 5) {
        console.log(`detected 5`);
        continue;//agar continue wali condition true hoti hai to iteration me uske aage jo bhi likha jata hai wo us baaar ke lie ignore kia jata hai and iteration dobara se repeat hoti hai (control flow break nhi hota)
    }
console.log(index);



}