const score =300

// console.log(score);

const num=new Number(100.342)
const st=new String("Anil")
const age= new Number(23)
// console.log(typeof num);
// console.log(num);
const newnum =num.toString()
// console.log(typeof newnum, newnum);
// console.log(num.toPrecision(20));
let n=1000000
// console.log(n.toLocaleString())   // put commas for number like 10,00,000
// console.log(n.toLocaleString('en-Us'))  // put commas for numbers readle by US 1,000,000



//  +++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++


// console.log(Math);  // object
// console.log(Math.round(9.7), Math.ceil(9.4), Math.floor(5.99));   // 10, 10, 5
// console.log(Math.min(23,5,0,-3,-9,7,43));
// console.log(Math.max(23,5,0,-3,-9,7,43));

// console.log(Math.random());   // produce random number between (0-1)
// console.log(Math.random()*10 + 1);
// console.log(Math.floor(Math.random()*10) + 1);

let min =1;
let max=6;

// to print random numbers between min and max value use below formula
console.log(Math.floor(Math.random()*(max-min+1))+min);