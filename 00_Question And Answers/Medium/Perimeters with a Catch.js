function perimeter(shape,num){
    return (shape =="s" && num*4)||(shape =="c" && num *6.28)

}
console.log(perimeter("s",7));
console.log(perimeter("c",4));
console.log(perimeter("c",9));