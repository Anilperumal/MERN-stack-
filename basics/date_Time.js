let mydate=new Date    // object type
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toUTCString());
// console.log(mydate.toJSON());
// console.log(mydate.getTime());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toLocaleString());
console.log(mydate.getMonth()+1);  // month starts with 0


// let createdate=new Date(2000,11,29)     // month starts from 0-11 (0-jan,11-dec) 12-23(12-jan, 23- dec)
// let createdate=new Date(2000,11,29,5,3)
let createdate=new Date("09-03-2007")
// console.log(createdate.toLocaleString());

let mytimestamp = Date.now();
console.log(mytimestamp);   // prints in milliseconds
console.log(createdate.getTime());   // since createdate is object we can add any predefined functions
console.log(Math.round(Date.now()/1000));   // this converts milliseconds to seconds

/*
mydate.toLocaleString('default',{
    weekday:"long"
})

this is not working check it later
*/
