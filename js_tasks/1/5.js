function multi(num,length){
    let output =[];
    for(let i=1;output.length < length;i++){
        output.push(num*i);
    }
    return output;
}
console.log(multi(3,4));

// Create a function that takes two numbers as arguments (num, length) and returns an
// array of multiples of num until the array length reaches length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]