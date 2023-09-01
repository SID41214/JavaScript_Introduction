function ish(num){
let nums=num.toString();
let sum=0;
for(i=0;i<nums.length;i++){
    sum+=parseInt(nums[i]);}
    return sum%2 === 0 ? "EVENISH": "ODDISH";
}
console.log(ish(43));
console.log(ish(373));
console.log(ish(4433));
console.log(ish(0));