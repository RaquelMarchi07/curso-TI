/* altere o algoritmo da tabuada para que possa utilizar laço de repetição
Escolha o laço que julgar adequado
*/

var prompt = require('prompt-sync');
var prompt = prompt();

var n1 = parseInt(prompt("Informe um número: "));
var mult = 1

while (mult <= 10){
    console.group(mult, "x", n1, "=", n1 * mult);
    mult++
}
