var prompt = require("prompt-sync");
var prompt = prompt();

var número = parseInt(prompt("Informe um número: "));

for(var i = 0; i <= número; i++){
    console.log("Número = ", i)
}

