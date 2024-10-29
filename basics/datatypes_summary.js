
// primitive data types :-
// String, number, null, undefined, Boolean, Symbol, BigInt


const name="anil"
let idconfirm=true
const Id=Symbol('abc')
const anotherId=Symbol('abc')

console.log(Id,anotherId);

console.log(Id===anotherId);

const Bignum=12345678899765424563
console.log(typeof Bignum);


// Non-Primitive datatypes :-

// Arrays, functions, objects

let cities=["adoni","kurnool","kadapa"]  // Array

let myprofile={
    name : "anil",  // myprofile is an object 
    age : 23,

}

let myfunction = function() {
    console.log("Hello World");
}

console.log(typeof myfunction);