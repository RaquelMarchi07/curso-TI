var prompt = require("prompt-sync");
var prompt = prompt();

var real = parseFloat(prompt("Informe o valor: "));
var dolar = 0.204
var money = (real * dolar).toFixed(2)
console.log("Você conseguirá U$: ", money)

