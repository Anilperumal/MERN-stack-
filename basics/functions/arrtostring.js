function convert(str){

    let s="";
    for(let i=0;i<str.length;i++){
        s= s+str[i];
    }
   return s;
}

let arr=[1,2,3,4];
let str=convert(arr);
console.log(str);