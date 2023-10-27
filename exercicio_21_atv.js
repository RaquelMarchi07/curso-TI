//1- usuário deverá informar um número inteiro
//2- o algoritmo deverá calcular o triplo do número informado
//3 - deverá ser mostrado o resultado do cálculo

var prompt=require("prompt-sync")
var prompt=prompt()

var informe = parseInt(prompt("Informe um número: "));
var conta = informe * 3;
console.log(conta);
