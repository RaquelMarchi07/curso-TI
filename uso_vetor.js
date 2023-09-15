// dado o seguinte vetor, crie:
// - um laço de repetição que liste seu conteúdo
// - a possibilidade do usuário inserir mais dados no vetor
// - a possibilidade do usuário excluir um item do vetor à sua escolha
// - a possibilidade do usuário alterar um valor do vetor à sua escolha

var prompt = require("prompt-sync");
prompt = prompt();

var estados = ["SP", "MG", "RJ", "ES"]

console.log(texto);
console.log(texto, "tem", texto.length, "letras");

var tamanho = texto.length

for (var i =0; i < tamanho;i++){
    console.log(texto[i]);
}
console.log("mostrar a letra a: ", texto[3]);
console.log("indice da leyta a: ", texto.indexOf("a"));
console.log()
console.log()

//VETOR - ARRAY

var unidades 
var arrayVazio = [];

console.log("Mostrar posição 2: ", unidades [2]);

console.log(unidades)
console.log("Tamanho do array: ", unidades.length)
console.log("ultimo indice do array: ", unidades.length - 1)
console.log("ultimo valor do array: ", unidades[unidades.length - 1])

//PUSH

unidades.push("TTE");
console.log(unidades)

var prompt = require("prompt-sync");
prompt = prompt ();

unidades.push(prompt("Informe uma unidade: "));
console.log(unidades)

unidades.pop()
console.log(unidades)