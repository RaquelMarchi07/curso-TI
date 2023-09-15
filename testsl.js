var prompt = require("prompt-sync");
prompt = prompt();

var unidade = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito","nove"];
var dez = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]

var numero = parseInt(prompt("Informe um número inteiro (0-99): "));

var dezena = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"]

if(numero <= 9){
    console.log("mostra unidade: ", unidade[numero]);
}else if(numero <= 19){
    console.log("mostra unidade: ", dezena[numero-10]);
}else{
    var sep=String(numero).split('')
    arraydezena=parseInt(sep[0])
    arrayunidade=parseInt(sep[1])

    console.log(sep)
    console.log('mostre unidade:', dezena[arraydezena], 'e', unidade[arrayunidade])
}

