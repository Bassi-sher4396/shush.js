const arr =[1,2,3,4]
for (const num of arr) {
    
console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings ) {
    console.log(`each char is ${greet}`);
    
}

//maps 
const map =new Map()
map.set('in','india')
map.set('usa','united states of america')
map.set('fr','france')

console.log(map);

for (const [key,values] of map) {
console.log(key);

    
}


const myObject = {
    'game':'nfs',
    'game2':'kk'
}
//not iterable object
// for (const [lullu] of myObject) {
//  console.log(lullu);
    
// }

 const yourObject={
    js: 'javascript',
    cpp: 'c++',
    rb:'ruby'

 }

 for (const lulli in yourObject) {
    console.log(lulli);
    console.log(`${lulli} is the shortcut for ${yourObject[lulli]}`);
    
    
 }
//for in me object ki keys print hoti hai and foroff me array,string,map in ssab ki values

 const chutad = ['js','rb','cpp','python','py']

 for (const lullu in chutad) {
    console.log(lullu);
    console.log(chutad[lullu]);
    
 }

 