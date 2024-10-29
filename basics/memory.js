// STACK (primitive data types stored in stack) && HEAP (Non-primitive DT stored in heap)


let name="Anil"
let anothername=name
anothername="Perumal"
console.log(name);
console.log(anothername);


//heap

let userone={
    email: "Anil@yoho.com",
    age:23
}

let usertwo=userone
usertwo.age=25
console.log(usertwo.age);
console.log(userone.age);
console.table(userone);