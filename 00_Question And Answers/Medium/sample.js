// var i,j,k;
// for(i=5;i>=1;i--){
//     for(j=1;j<=5-i;j++){
//         document.write("&nbsp")
//     }
//     for(k=1;k<=2*i-1;k++){
//         document.write(k)
//     }
//     document.writeln("<br>");
// }

// function string(str){
//     let newst=str.split(" ");
//     let out=newst.map(newst=>{ return ( newst[0].toUpperCase()+ newst.slice(1));})
//     let finalout=out.join(" ");
//     console.log(finalout);
// }
// string("how are you?");
var i,j,k;
for(i=1;i<=5;i++){
    
    
    for(k=0;k<i;k++){
        if(i==5||k==0||k==i-1){
        document.write("*")}
        else{ document.write("&nbsp;&nbsp")}
    }
    document.write("<br>")
}