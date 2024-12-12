const name = "hitesh"
const repCount =50
console.log(`hi my name is ${name} and my body count is ${repCount}`);//use this syntax
const gameName = new String('chootmar')
console.log(typeof gameName);//type is object
console.log(gameName[0])
console.log(gameName.length);
console.log(gameName);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'))

const newString= gameName.substring(-6,4)//substrings disobey the negative values in the beginning and repalce it with 0
console.log(newString);
const anotherString= gameName.slice(-6,4)
console.log(anotherString);
const newStringOne ="  hardik  "
console.log(newStringOne);
console.log(newStringOne.trim());//starting and ens spaces hata deta hai
const url ="fuddi.com%20lunloda"
console.log(url.replace("%20" , "_"))
console.log(url.includes("chhotta"));
const stringName = new String("chootmar-lund-pe-rakhke")
console.log(stringName.split("-"));
