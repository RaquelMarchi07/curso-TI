// Resolvendo problemas utilizando array
//transcrever um número

var prompt = require("prompt-sync");
prompt = prompt();

var unidade = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito","nove"];
var dez = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]

var numero = parseInt(prompt("Informe um número inteiro (0-99): "));

var dezena = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"]

if(numero <= 9){
    console.log("mostra unidade: ", unidade[numero]);
}else if(numero <= 19){
    console.log("mostra unidade: ", dez[numero-10]);
}else{
    var num_dezena = parseInt(numero / 10)
    var num_unidade = numero % 10;

    if(num_unidade == 0){
        console.log(dezena[num_dezena])
    }else{
        console.log(dezena[num_dezena], "e", unidade[num_unidade]);
    }

    

    
}



// 10 % 10 -> resto 0
// 11 % 10 -> resto 1
// 12 % 10 -> resto 2
// 13 % 10 -> resto 3


