let num=[2,1,3,4,5,6,3,4,2,1,4,5,7,9,0,8];

let obj={};

// for(let i=0;i<num.length;i++){
//     if(objn[num[i]]==undefined){
//         objn[num[i]]=1;
//     }

//     else{
//         objn[num[i]]++;
//     }
// }

// for(let key in objn){
//     if(objn[key]>=2) console.log(key);
// }

// console.log(objn);


for (let i=0;i<num.length;i++){
   if(obj[num[i]] ==undefined){
    obj[num[i]]=1;
   }
   else obj[num[i]]++;
}

console.log(obj);