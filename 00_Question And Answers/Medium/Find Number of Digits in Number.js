function numberr(x){
    if(x== 0){ return 1;}
   let count =0;
   while (x!=0){
    count ++;
    x=Math.floor(x/10);
   }
    return count;
   
}
console.log(numberr(1000));
console.log(numberr(12));
console.log(numberr(1305981031));
console.log(numberr(0));
console.log(numberr(1));
console.log(numberr(1111));