const userEmail = []

if(userEmail){
    console.log("got user email");
    
}
else{
    console.log("dont have user email");
    
}

//falsy valus 
// false,0,-0,BigInt 0n, "",NaN,null,undefined

// truthy valus
//"0",'false'," ",[],{},function(){}
if (userEmail==0) {
    console.log(`emoty`);
    
}

const obj = {}
if (Object.keys(obj).length===0) {
 console.log('empty');
    
}
// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5??10
val1=null??10
val1= undefined??15
val1=null??10??20
console.log(val1);
// terniary 
// condition?true:false
const iceprice = 1000
iceprice>= 800? console.log(`more`):console.log
('less')