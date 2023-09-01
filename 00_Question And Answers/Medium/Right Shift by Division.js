function shift(a,b){
    return Math.floor(a/Math.pow(2,b));
}
console.log(shift(80,3));
console.log(shift(-24,2));
console.log(shift(-5,2));
console.log(shift(4666,6));
console.log(shift(3777,6));