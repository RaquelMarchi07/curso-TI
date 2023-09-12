/*
8 - Crie um algoritmo que  leia dois número inteiros. 
O algoritmo deverá mostrar a tabuada iniciando pelo menor até o maior número informado pelo usuário
*/

var prompt = require('prompt-sync');
var prompt = prompt();

var numero=parseInt(prompt('Digite um número: '));
var numero2=parseInt(prompt('Digite mais um número: '));

if (numero<numero2){
    console.log("Tabuada do:", numero);
console.log(numero, "x 1 ", numero * 1);
console.log(numero, "x 1 ", numero * 2);
console.log(numero, "x 1 ", numero * 3);
console.log(numero, "x 1 ", numero * 4);
console.log(numero, "x 1 ", numero * 5);
console.log(numero, "x 1 ", numero * 6);
console.log(numero, "x 1 ", numero * 7);
console.log(numero, "x 1 ", numero * 8);
console.log(numero, "x 1 ", numero * 9);
console.log(numero, "x 1 ", numero * 10);

console.log("Tabuada do:", numero2);
console.log(numero2, "x 1 ", numero2 * 1);
console.log(numero2, "x 1 ", numero2 * 2);
console.log(numero2, "x 1 ", numero2 * 3);
console.log(numero2, "x 1 ", numero2 * 4);
console.log(numero2, "x 1 ", numero2 * 5);
console.log(numero2, "x 1 ", numero2 * 6);
console.log(numero2, "x 1 ", numero2 * 7);
console.log(numero2, "x 1 ", numero2 * 8);
console.log(numero2, "x 1 ", numero2 * 9);
console.log(numero2, "x 1 ", numero2 * 10);
}
