 const promiseOne = new Promise(function (resolve,reject){
    //do an async task
    //db calls .cryptography 
    setTimeout(function(){
        console.log(`async task is complete`);
        resolve()
    },1000)
})
//.then ka sidha relation hai resolve ke saath
promiseOne.then(function(){
    console.log(`promise consumed`);
    
})

new Promise(function(resolve,reject){
  setTimeout(function() { (console.log(`async 2 is completed`))
    resolve()
  },1000)
    
}).then(function(){
    console.log(`resolved`);
    
})

const promisethree =new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username:'loda',email:'chuchi'})
  },1000)
})
promisethree.then(function(user){
  console.log(user.username);
  
})


const promisefour = new Promise(function(resolve,reject){
  setTimeout( function(){
  let error=true
  if (!error) {
    resolve({username:'loda',email:'chuchi'})
    
  }
else{
  reject(`lulla fas gya`)
}}
,1000)
})
promisefour.then((user)=>
{
  const {username:name} =user
  return name   //agar ek then se kuch return ho rha hai to vo agle then me apni return kri hui cheeez return krega ise chaining kehte hai
}).then((naam)=>{
  console.log(naam);
  
}).catch((error)=>{
  console.log(error);
  
}).finally(()=>{
  console.log(`promise was tried`)})


  const promisefive = new Promise(function(resolve,reject){
    setTimeout(() => {
      let error =true
      if(!error){
        resolve({username:'loda',email:'chuchi'})
      }
      else{
        reject(`lund vad gaya`)
      }
    }, 1000);
    
  })
  //async await cannot handle catch alone without using try and catch
  async function consumepromisefive(){
    try {const response =await promisefive//await ke andar wo vaue aaegi jo promise se aegi
  console.log(response);}
  catch (error){
    console.log(error);
    

  }
  
  }
    
  consumepromisefive()

//fetch promise laya


  // async function getAllUsers() {
  //  try{const response= await  fetch('https://api.github.com/users')
  //  const data = await response.json()  //response.json hone me bhi time lagta hai to wahan pe bhi ek await lagana padta hai   
  //  console.log(data);}
  //  catch (error){
  //   console.log(error);
    
  //  }
   

  // }
  // getAllUsers()




  //above can also be written like this 

  fetch('https://api.github.com/users')
  .then((response)=>{//we know ki above promise se hume kuch mila hi hoga i.e. response 
    return response.json()
  })
  .then((data)=>{
    console.log(data);
    
  })
  .catch((error)=>{
    console.log(error);
    
  })