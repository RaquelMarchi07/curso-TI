var sair = true
var menu = 0
var prompt = require('prompt-sync');
prompt = prompt();
var listaprincipal = [];
var data = 0
var descri = 0
var valor = 0
var apagar = 0
var conta = 0

function mostrar(){
    for(var i = 0; i < listaprincipal.length; i++){
        console.log("indice: ", i, "Data: " , listaprincipal[i][0],  "| Descrição: ",  listaprincipal[i][1], "| Valor: ", listaprincipal[i][2]);
    }
    console.log("Valor total gasto: ", conta)};


while (sair){
    mostrar()
    menu = prompt("Escolha uma das opções 1, 2 ou S para sair: ").toUpperCase();
    if (menu == 1){
        data = prompt("Informe a data: ");
        descri = prompt("Descrição: ");
        valor = parseFloat(prompt("Valor: "));
        conta += valor;
    listaprincipal.push([data, descri, valor]);
    }
    else if(menu == 2){
        mostrar();
        apagar = prompt("Escolha pelo indice o item a ser removido: ");
        listaprincipal.splice(apagar,1);
    } 
    else if (menu == 'S'){
        sair = false
    }
    else{
        console.log("Opção inválida");
    }
}


