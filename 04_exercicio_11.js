/* 4 - deverá ler uma letra e repitir essa letra 5 vezes
	obs.: utilize o laço de repetição FOR
*/

var prompt = require('prompt-sync');
var prompt = prompt();

var letra = prompt("Informe uma letra:").toUpperCase();
for (var i = 1; i <=5; i++){
    console.log("letra: ", letra);
}
