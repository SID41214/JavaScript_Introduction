
// function repeat(a){
//     let a=document.getElementById("text");
//     let b = return [...str].map(s => s.repeat(2).join(''));

//   document.getElementById("answer").innerHTML=b;
// }
function repeat(){
    let a=document.getElementById("text").value
    let arr = Array.from(a)
    let newArr = []
    for( var i=0;i<arr.length;i++){
        newArr.push(arr[i].repeat(2))
    }
   // document.write(newArr.join(""))
     document.getElementById("answer").innerText=`${newArr.join("")}`;
}






// function repeat(str){
//     let arr=Array.from(str)
//     let newArr=[]
//     for(var i=0;i<arr.length;i++){
//         newArr.push(arr[i].repeat(2))
//     }
//     console.log(newArr.join(""))
// }
// repeat("sad")