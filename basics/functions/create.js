function check_even(num){
   if(num%2==0){
    return true;
   }
   return false;
}

let arr=[2,5,3,1,7,9,8,999];

for(let i=0;i<arr.length;i++){
    let num = check_even(arr[i]);
    if(num==true) console.log(arr[i],"is even");
    else{
        console.log(arr[i],"is odd");
    }
}