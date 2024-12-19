# projects related to dom
 ##project link 
 [Click here]
    (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
 

 #solution code

##project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click',function(e){
console.log(e)
console.log(e.target)//target means aa kahan se raha hai
console.log(e.target.id)
if(e.target.id==='grey'){
  body.style.backgroundColor='grey'
}
if(e.target.id==='white'){
  body.style.backgroundColor='white'
}
if(e.target.id==='blue'){
  body.style.backgroundColor='blue'
}
if(e.target.id==='yellow'){
  body.style.backgroundColor='yellow'
}
if(e.target.id==='purple'){
  body.style.backgroundColor ='purple'
}
  })
});

```
