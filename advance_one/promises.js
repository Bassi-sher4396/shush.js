 const promiseOne = new Promise(function (resolve,reject){
    //do an asynv task
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