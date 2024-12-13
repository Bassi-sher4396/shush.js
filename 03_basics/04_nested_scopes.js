//bachhe badon se ce cream chheen sakte hai but bade bachhon se nhi 

function one(){
const username ="hardik"
function two(){
    const website = "youtube"
    console.log(username);
    
}
//console.log(website); 
// website cant be accessed here 
two()
}
one()
if(true){
    const username ="hardik"
    if (username === "hardik"){
        const website ="youtube"
        console.log(username+website );
        
    }
//console.log(website);
//not possib;e

}
//console.log(username);
//not possible


//++++++++++++++++++++interesting++++

console.log(addone(5))
function addone(num){
    return num +1
}
addone(5) //if i write here then no outcome and if i write before the function then it changes



// addtwo(5)
//error because function is defined and kept in a variable here
const addtwo = function(num){
    return num +2
}
addtwo(5)
