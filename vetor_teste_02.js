// altere o complemento 01 para que quando o usuário informar dados inválidos além de informar o erro, o sistema deverá solicitar
// novamente um número. Para sair, o usuário deverá digitar S

var prompt = require("prompt-sync");
prompt = prompt();

var unidade = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito","nove"];
var dez = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]



var dezena = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"]


do{
    var numero = prompt("Informe um número inteiro (0-99) ou (S)air: ").toLowerCase();


    if (numero >= 0 && numero<= 99 && numero != 's'){
    numero = parseInt(numero);

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
        
    }else{
        if(numero != "s")
    console.log("Número inválido");

}
}while(numero != "s")

















