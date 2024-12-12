const score = 400
console.log(score);
const balance =new Number(100)
console.log(balance);
console.log(balance.toString().slice(0,2));
console.log(balance.toFixed(2));//decimal ke baad itna dikhaega
const otherNumber = 23.88766
console.log(otherNumber.toPrecision(3))
const fudaPaad = 123.890
console.log(fudaPaad.toPrecision(3));//returns a string type

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-In'));

/*************maths */
console.log(Math);
console.log(Math.abs(-4));//gives the absolute values minus nhi dikahega saath me
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));//4 se halka sa bhi bada to 5
console.log(Math.floor(4.9));//5 se halka sa bhi chota to 4
console.log(Math.min(3,4,5,6));
console.log(Math.random());
console.log(Math.random()*10 +1);
console.log(Math.floor(Math.random()*10) +1);

const min = 1
const max = 6 
console.log(Math.floor(Math.random()*(max-min +1)+min))//fucking important..............




