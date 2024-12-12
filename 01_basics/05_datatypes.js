//primitive
//call by valu
//7 types: string,numbers,null,bool,undef,symbol,bigInt

const id =Symbol('123')
const anotherId=Symbol('123')
//console.log(id===anotherId);//ye dono same nhi honge bhale hi andar maal same bhi likh do



//referrence(non primitve)
//array,objects,functions
const heros=["shakti","naagraj","dogra"]//array
 let myobect ={
    name:"hardy",
    age: 18,}
const  myFunction = function() {
    console.log("hello world");
}
//saare non primitive ka datatype objet
let lul="33abc"
console.log(typeof myFunction);
