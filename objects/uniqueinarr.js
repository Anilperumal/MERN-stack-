let arr=["Anil", "Anil","luffy","sanji","nami","robin","Boa","luffy","sanji"];

let obj={};
console.log(obj["Anil"]);


for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]==undefined){   // since key value in object is undefined
        obj[arr[i]]=1;             // assigning value to key
    }  
    else{
        obj[arr[i]]++;        // if key already exists we increase its value to find unique
    }
}
console.log(obj);


for(let i in obj){
    if(obj[i]==1) {
        console.log(i);
     arr.push(i);
}
}

console.log(arr);