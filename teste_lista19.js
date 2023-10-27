var prompt = require("prompt-sync");
prompt = prompt();

var unidade = ["zero","um","dois","tres","quatro","cinco","seis","sete","oito","nove"];
var dez = ["dez","onze","doze","treze","quatorze","quinze","dezesseis","dezessete","dezoito","dezenove"]
var dezena = ["","","vinte","trinta","quarenta","cinquenta","sessenta","setenta","oitenta","noventa"]

var numero = parseInt(prompt("Informe um número inteiro (0-99): "));

if(numero <= 9){
    console.log("unidade:",unidade[numero]);
}else if(numero <= 19){
    console.log("valor:",dez[numero-10]);
}else{
    var num_dezena = parseInt(numero / 10);
    var num_unidade = numero % 10;

    if(num_unidade==0){
        console.log(dezena[num_dezena])
    }else{
        console.log(dezena[num_dezena],"e",unidade[num_unidade])
    }   
}

