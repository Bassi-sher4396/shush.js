(function chai (){
    console.log(`db connected`);
    
})()   ;   //iife se global scope us function ko pollute nhi krta
   
( (name)=> {console.log(`chut fucked of ${name}`);}
   

   ) ('manjula')