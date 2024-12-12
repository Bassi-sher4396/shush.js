const accountId = 14453
let accountEmail = "jdfjf"
var accountPassword= "12344"
accountCity ='d'/*declaring variable */
let accountState
// accountId=2 not alowed
console.log(accountId);
/*use only let not var as var keeps changing  beacuase of issue in block and functional scope*/ 
accountEmail="djdj"
accountPassword="99"
accountCity="k"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])