//let string="";
// for(let i=1;i<=5;i++){
//    let str=""
//     for(let j=1;j<=i;j++){
//         str=str+"*";
//     }
//     console.log(str);
// }

for(let i=1;i<=10;i++){
    let str=""
     for(let j=1;j<=10;j++){
         if(i==1 || i==10){
            str=str+"*";
         }
         else if(j==1 || j==10){
            str=str+"*";
         }
         else {
            str=str+" ";
         }
     }
     console.log(str);
 }