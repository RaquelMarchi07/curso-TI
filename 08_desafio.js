/*
O usuário está com dificuldade de lembrar qual é o DDD das capitais dos estados da região sudeste.


Sabendo que o DDD para cada capital é:
SP = 11
RJ = 21
BH = 31
VIT = 27

Desenvolva um algoritmo que quando o usuário informar a capital, receba como resposta seu DDD.


*/


var prompt = require('prompt-sync');
var prompt = prompt()

var capital= prompt("Informe sua capital: "). toLowerCase();

var sp = "O DDD de São Paulo é 11"
var rj = "O DDD do Rio de Janeiro é 21"
var bh = "o DDD de Belo Horizonte é 31"
var vit = "O DDD de Vitória é 27"



if (capital == "sp") {
    console.log(sp);
} else if (capital == "rj") {
    console.log(rj);
} else if (capital == "bh") {
    console.log(bh);
} else {
    console.log(vit);
}
