let n=5;
let string="";
for(i=0;i<n;i++){
    for(j=0;j<i;j++)
    {string+=" "};
    for(k=0;k<(2*i -1);k++)
    { string+="*"};
    string+="\n";
}
console.log(string);