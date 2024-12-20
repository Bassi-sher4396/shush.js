##project 1
```javascript
const randomColor = function(){
  const hex= '0123456789ABCDEF'
  let color ='#'
  for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color
}

document.querySelector('#start').addEventListener('click', function(){
  const chut=(setInterval(function(){
  document.body.style.backgroundColor=randomColor()
},1000))
document.querySelector('#stop').addEventListener('click',function(){
  clearInterval(chut)
})

})
```

##project 2
```javascript
console.log('Project 5');
 window.addEventListener('keydown',(e)=>{
   insert.innerHTML=`
   <div class ='color'>
   <table>
   <tr>
   <th>key</th>
   <th>keycode</th>
   <th>code</th>
   <tr>
   <th>${e.key}</th>
   <th>${e.keyCode}</th>
   <th>${e.code}</th> 
   
   
   `
 })
 ```