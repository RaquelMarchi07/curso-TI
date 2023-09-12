/*
7 - mostre os numeros pares entre dois númeoros informados pelo usuário
	obs.: Escola a melhor estrutura da lógia de programação para resolver o problema
    */

    var prompt = require('prompt-sync');
var prompt = prompt();




var numero=parseInt(prompt("Informe um número: "));
var numero2=parseInt(prompt("Informe mais um número: "));
if (numero<numero2){

for (var i = numero; i <=numero2; i++){
    var soma= i%2
    if (soma == 0){
        console.log(i);
    } else{}
}
} 
else{


for (var i = numero2; i <=numero; i++){
    var soma= i%2
    if (soma == 0){
        console.log(i, 'numero par');
    } else{}
}
}



