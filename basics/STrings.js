const name="Anil"

let count=10

// console.log(name + count + " Perumal");
// console.log(`hello my name is ${name}, roll no. ${count}`);

const str=new String(`Anil Perumal`)
// console.log(str);
console.log(str[5]);
console.log(str.__proto__);
console.log(str.length);
const newname=str.substring(0,6)
console.log(newname);
console.log(str.toUpperCase())
console.log(str.charAt(8));
console.log(str.slice(0,4));
const anothername=str.slice(-1,8)
console.log(anothername);

const Strname="   Anil   Perumal   "
console.log(Strname);
console.log(Strname.trim());   // to remove spaces from front and back

const url="https://www.scum%20mdn.com"
console.log(url.replace('%20','&'))

console.log(url.includes('wwws'));

console.log(str.split(' ')) // converts string to array by spliting at specified place
console.log(Strname.split(' '));

console.log(url.bold());