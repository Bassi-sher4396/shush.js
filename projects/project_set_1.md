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

##project 2

```javascript
const form =document.querySelector('form')
//if u write height an dweight here then u will get empty values and if u write down there then u will get the values after submitting yhe form
form.addEventListener('submit', (e)=>{
  e.preventDefault()
 const height= parseInt(document.querySelector('#height').value)
 const weight = parseInt(document.querySelector('#weight').value)
 const results =document.querySelector('#results')
if(height===''||height<0|| isNaN(height)){
results.innerHTML='please give valid height'
}
else if(weight===''||weight<0|| isNaN(weight)){
  results.innerHTML='please give valid weight'
  }
else{
 results.innerHTML= (weight/
  ((height*height)/10000)).toFixed(2)
  if(results.innerHTML<18.6){
    results.innerHTML=results.innerHTML+`underweight`
  }
  else if(results.innerHTML>18.6&&results.innerHTML<24.9){
    results.innerHTML=results.innerHTML+ `normal`
  }
  else{
    results.innerHTML=results.innerHTML+`overweight`
  }
}

})
```
##project 3
```javascript
 
const clock=  document.querySelector('#clock');



setInterval(function(){
let date = new Date()
 // console.log(date.toLocaleTimeString)
 clock.innerHTML = date.toLocaleTimeString()
},1000)

```

##project 4
```javascript
 let randomNumber= console.log(parseInt(Math.random()*100 +1 ))
 const submit = document.querySelector('#subt')
 const userInput = document.querySelector('#guessField')
 const guessSlot = document.querySelector('.guesses')
 const remaining = document.querySelector('.lastResult')

 const lowOrHi = document.querySelector('.lowOrHi')
 const startOver = document.querySelector('.resultParas')

 const p =document.createElement('p')


 let prevGuess =[]
 let numGuess = 1 

 let playGame =true 

 if(playGame){
   submit.addEventListener('click',function(e){
     e.preventDefault()
     const guess = parseInt(userInput.value)
console.log(guess)
     validateGuess(guess)
   })
 }

 function validateGuess(guess){
   if(isNaN(guess)){
     alert('please enter a valid number')
   } 
   else if(guess<1||guess>100){ alert('please enter a valid number')}
else{
  prevGuess.push(guess)
  if(numGuess===11){
    cleanupGuess(guess)
    displayMessage(`game over. random number was${randomNumber}`)
    endGame()
  }
  else{
    cleanupGuess(guess)
    checkGuess(guess)
  }
}


 }

 function checkGuess(guess){
   //
   if(guess === randomNumber){
    displayMessage(`you guessed it right`);
     endGame();
   }
   else if(guess < randomNumber){
     displayMessage(`number is too low`);
   }
   else if (guess > randomNumber){
    displayMessage(`number is too high`);
   }
 }

 function cleanupGuess(guess){
userInput.value=''
guessSlot.innerHTML+=`${guess}  `
numGuess++;
remaining.innerHTML=`${11-numGuess}`
 }

 function displayMessage(message){
   //
   lowOrHi.innerHTML=`<h2>${message}</h2>`
 }

function newGame(){
  //
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber= parseInt(Math.random()*100 +1 )
 prevGuess=[];
 numGuess=1;
 guessSlot.innerHTML=''
 remaining.innerHTML=`${11-numGuess}`
 userInput.removeAttribute('disabled')
 startOver.removeChild(p)
 playGame=true
  })
}

function endGame(){
userInput.value=""
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML='<h2 id = "newGame">start new game</h2>'
startOver.appendChild(p)
playGame=false
newGame();
}

```