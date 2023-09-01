function getlength(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            count+=getlength(arr[i]);
        }else{
            count++;
        }
    }
    return count;

}
console.log(getlength([1, [2, 3]]));
console.log(getlength([1, [2, [3, 4]]]));
console.log(getlength([1, [2, [3, [4, [5, 6]]]]]));
console.log(getlength([1, [2], 1, [2], 1]));