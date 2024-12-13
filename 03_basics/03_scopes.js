var c =300
let a =100
//jo kisi function ke andar declare kiye jane wala hai vo block scope aur uske bahar global scope block scope cant come out of the function on itself but glbal can go inside block yahan if ke andar console.log(a) print krane pe 10 aya agar uske andar print na krate to it would have been 100 
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log(a);
    
}

console.log(a);
// console.log(b);  ye  if ke bahar defined nhi hai thats why an error
console.log(c);
