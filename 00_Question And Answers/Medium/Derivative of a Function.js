function derivative(b,m){
    let out=b* Math.pow(m,b-1);
    return out;

}
console.log(derivative(1,4));
console.log(derivative(3,-2));
console.log(derivative(4,-3));
