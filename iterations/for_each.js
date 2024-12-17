const coding = ['js','cpp','java','py','cpp']

// coding.forEach(   function (val1) {
// console.log(val1);
// })

function one(val){
    console.log(val);
    
}

coding.forEach(one)//function name ke baad parenthesis lagana zruri nhi hai

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
    
})

const myCoding =[ {
    languageName: "java",
    languageFileName : "java",
},
{ 
    languageName: "python",
    languageFileName : "js",
}

]

myCoding.forEach(  (item,index,arr) => {
    console.log(item.languageFileName);} )