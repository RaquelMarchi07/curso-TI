/* exercicio 1 
devera ler um número inteiro e informar (mostrar na tela) se o número é par ou impar
   obs.: utilize o desvio condicional ternário para sua solução
*/

var prompt = require('prompt-sync');
var prompt = prompt();




var numero=parseInt(prompt("Informe um número inteiro: "))
var conta=numero%2 == 0 ? "Número par" : "Número impar";
console.log(conta)
