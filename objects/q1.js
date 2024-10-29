let details={
    name :"Anil",
    age :24,
    phone_no:9182654226,
    address :"Adoni"
};
details.name ="Anil Perumal";
details.father_name ="NArasimhulu";
// console.log(details.name);
// console.log(details.father_name);

delete details.phone_no;
//console.log(details);

for(let key in details){
    console.log(key,":" ,details[key]);
    // console.log();
    // console.log(key)   // print vlaues in object...  like name age address father_name....
}