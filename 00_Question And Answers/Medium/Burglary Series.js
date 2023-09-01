function name(obj,petname,value){
    const newobj={...obj,[petname]:value};
    return newobj;
}
console.log(name({piano:500}, "Brutus", 300));
