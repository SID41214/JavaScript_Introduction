let deposit=document.getElementById("n1");
let withdraw=document.getElementById("n2");
let balance=document.getElementById("balance");

function curbal(){
    balance.value=deposit.value;
}

function aftrwith(){
    balance.value=balance.value-withdraw.value;
}
function famount(){
    document.getElementById("p").innerHTML=balance.value;
}