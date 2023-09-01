function boom(arr){
    let count=0;
    for (i = 0 ;i< arr.length-2; i++) {
        if(arr[i] === arr[i+2] && arr[i] !== arr[i+1]){count++}}
        return count;
}
console.log(boom([9,5,9,5,1,1,1]));
console.log(boom([5,6,6,7,6,3,9]));
console.log(boom([4,4,4,9,9,9,9]));
