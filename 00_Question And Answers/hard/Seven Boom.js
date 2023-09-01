// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
function sevenboom(arr){
    let newa=arr.some(num =>num.toString().includes('7'));
    return newa ? "BOOM!":"There is no 7 in the array";
}
console.log(sevenboom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenboom([8, 6, 33, 100]));
console.log(sevenboom([2, 55, 60, 97, 86]));
