let n=100;

for(let i=2;i<=n;i++){
    let pr=1;
    for(let j=2;j<i;j++){
        if(i%j==0) {
            pr=0;
            break;
        }
    }
    if(pr){
        console.log(i , "is a prime number");
    }
}