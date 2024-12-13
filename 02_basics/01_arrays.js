//array
const myArr = [0,1,2,3,4,5] //array copy operations create shallow copies(i.e ki pass by refence)
const myHeros =["shaktiman", "naagraj"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

//array methods
myArr.push(8) // value array me deta hai
myArr.pop()//deletes last element
myArr.unshift(9) // bekar hai adds the value to the start of array
myArr.shift()//removes the first element
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));//shows minus one cuz it doesnt exist
const newArr = myArr.join()



console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice,spice

console.log("a",myArr);
const myn1= myArr.slice(1,3)
console.log(myn1);
console.log("b",myArr);
const myn2 = myArr.splice(1,3) //splice apply krne ke baad print krne pe last vali value bhi include hoti hai lekin sirf itna hi nhi agar splice use kro to original array me se utni values hat bhi jaati hai aur agar dobara array ko print kro to splice vali values nhi dikhti
console.log(myn2);
console.log("c",myArr);


