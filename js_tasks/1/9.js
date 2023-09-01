function diff(family){
    let minage=Infinity;
    let maxage=-Infinity;

    for(const member of family){
        if(member.age<minage){minage=member.age;}
        if(member.age>maxage){maxage=member.age;}
    }
    const agediff =maxage-minage;
    return[minage,maxage,agediff];
}
console.log(diff([
    { name: "Rachel", age: 20 },
    { name: "Jennifer", age: 45 },
    { name: "Jack", age: 43 },
    { name: "Maria", age: 3 }
    ])) 