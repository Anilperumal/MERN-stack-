function reverse(name,n){
    let str="";
    for(let i=n-1;i>=0;i--){
        str=str + name[i];
    }
    return str;
}

let arr=["ani", "helleh","Perumal","sos"];
for(let i=0;i<arr.length;i++){
    let n=arr[i].length;
    let str = reverse(arr[i],n);
    // if(str===arr[i]){
    //     console.log(arr[i],"is a palindrome");
    // }
    // else{
    //     console.log(arr[i],"is not a palindrome");
    // }
    console.log(str);

}