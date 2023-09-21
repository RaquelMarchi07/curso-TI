var prompt = require("prompt-sync");
var prompt = prompt();

var animal = ["gato", "cachorro", "camelo"]
console.log(animal);
animal.push(prompt("Informe o animal: "));
animal.shift();
console.log(animal);
