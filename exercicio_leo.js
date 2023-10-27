/*
Script para controle de gastos

Um script que mostre uma tabela com data-descrição-valor e no final valor total gasto, 
o script tem que permitir que o usuario insira os itens e uma ferramenta que possibilite
excluir um item escolhido pelo usuario, por exemplo:


Escolha uma ação?
1-Adicione um item
		-informe a data
		-descrição
		-valor
2-Delete um item
	-Escolha pelo indice o item para deletar

================xx================xx===============xx=============

indice |    data     |          descrição      |     valor 
   0   |  27-09-2023 | torta do osmar          |   R$70,00 
   1   |  99-99-9999 | xxxxxxxxxxxx            |   R$00,00
valor total gasto = R$70,00
================xx================xx===============xx=============
*/







function listar(){
    for(var i = 0; i < atividades.length; i++){
        console.log(i, "-", atividades[i][0], "-", atividades[i][1]);
    }
}
function adicionar(){
    atividades.push([data, descri, valor])
    listar()
    return
}
function remover(){
    atividades.splice(remove,1);
    listar.table();
    }
var atividades = [
    ["Data"],
    ["Descrição"],
    ["Valor"]
]
var prompt = require('prompt-sync');
var prompt = prompt();
var data = prompt("Informe a data: ");
var descri = prompt("Descrição: ");
var valor = parseFloat(prompt("Informe o valor: "));

var remove = parseInt(prompt("Qual item deseja remover (Escolha pelo indice)?"));