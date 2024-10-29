console.log(2>3);
console.log("5" > 3);   // js convert string to number datatype to compare but in string there should be numbers too
console.log(1>"-9");

console.log(null>0);  // false
console.log(null>=0);  // comparisions convert null into 0 so >= gives true
console.log(null==0);  // == is equality check -> false



console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined>0);


console.log("1">false);
console.log("2">true);
console.log("1">true);
console.log("1"==true);


console.log("3"=="3");

console.log("5" == 5);   // == it changes string to number data type to compare
console.log("5" === 5);    // === is a strict check it checks the datatype too

let A="abc"
console.log("abc" == A);
console.log("abc" === A);