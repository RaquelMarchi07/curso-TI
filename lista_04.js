var prompt = require("prompt-sync");
var prompt = prompt();

var preço = parseFloat(prompt("Informe o preço do produto: "));
var desconto = preço * 0.05
var final = preço - desconto

console.log("O valor com 5% de desconto será: ", final)

