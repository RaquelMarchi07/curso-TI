var prompt = require("prompt-sync");
var prompt = prompt();

var número = parseFloat(prompt("Informe um número: "));
var n1 = número % 2

if(n1 == 0){
    console.log("Seu número é par")
}else{
    console.log("Seu número é impar")
}

