/*ALTERE o algoritmo de repetir a letra para ler uma letra e repetir a quantidade que usuário quiser.
	- mostre o indice da repetição;
	- utilize o laço de repetição FOR

*/

var prompt = require('prompt-sync');
var prompt = prompt();

var letra = prompt("Informe uma letra:").toUpperCase();
var vezes = parseInt(prompt("Informe a quantidade de vezes que você deseja repetir a letra: "));
for (var i = 1; i <= vezes; i++){
    console.log("letra: ", letra);
}