const accountId=12345
let accountEmail="anil@gmail.com"
var accountPasswd=7654
accountCity="adoni"

console.table([accountId, accountEmail, accountPasswd, accountCity]);

//  accountId=9   // not applied since it was created using const (constant) variable 


/*prefer not to use var
because of issue in block scope and function scope 
*/


accountEmail="anil@yoho.com"
accountPasswd=2345
let accstate;
accountCity="Kurnool"

console.log(accountId);
console.table([accountId, accountEmail, accountPasswd,accstate, accountCity]);
