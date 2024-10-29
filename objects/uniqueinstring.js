let name="anilperumal";

let obj={};

for(let i=0;i<name.length;i++){
    if(obj[name[i]]==undefined){
        obj[name[i]]=1;
    }
    else {
        obj[name[i]]++;
    }
}
console.log(obj);

for(let key in obj){
    if(obj[key]==1) console.log(key);
}
