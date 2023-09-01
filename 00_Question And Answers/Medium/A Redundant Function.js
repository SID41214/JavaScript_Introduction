// Write a function redundant that takes in a string str and returns a function that returns str.
function redundant(str) {
 return function(){
    return `"`+ str+`"`;
}
}
const f1=redundant("apple");
console.log(f1());