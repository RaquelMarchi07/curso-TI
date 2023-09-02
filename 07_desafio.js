/*

desenvolva um algorítmo onde o usuário possa informar dois números inteiros.

após informar os dois números inteiros, seu algorítmo deverá mostrar qual dos dois números informados é o maior e qual é o menor.


*/

var prompt = require('prompt-sync');
var prompt = prompt()

var numeroP = parseInt(prompt("Informe um número n1: "));
var numeroS = parseInt(prompt("Informe mais um número n2: "));

if (numeroP > numeroS) {
    console.log("N1 = " + numeroP + " É maior que N2 " + numeroS);
} else if (numeroP < numeroS) {
    console.log("N2 = " + numeroS + " É maior que N1 " + numeroP);
} else {
    console.log("N1 é igual a N2");
}
    



