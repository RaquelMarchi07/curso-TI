/*
Respotas esperadas

- Você é maior ou igual a 21 anos
- Sua idade está entre 18 e 20 anos
- Você é menor de idade
*/15

var prompt = require('prompt-sync');
var prompt = prompt()

var idade = parseInt(prompt("Informe sua idade: "));
var idadeMax = 21;
var idadeMin = 18;

if (idade >= idadeMax){
    console.log("Você é maior ou igual 21 anos");
} else if (idade >= idadeMin) {
    console.log("Você tem entre 18 e 20 anos");
}else {
    console.log("Você é menor de idade.");
}
    