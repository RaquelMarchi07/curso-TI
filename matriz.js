var prompt = require("prompt-sync");
var prompt = prompt();

var v = [0,0,0]
var m = [
    [0,1,0],
    [0,0,0],
    [0,0,0]
]
    console.log(m);
    console.table(m);

    // 0 - 1

    console.log(m[0])
    console.log(m[0][1])

    // 1 - 0

    console.log([1])
    console.log(m[0][0])

    // 2 - 2

    console.log(m[2])
    console.log(m[2][2])

    var linhas = m.length
    
// percorrendo as linhas com uma matriz

    for (var i = 0; i< linhas; i++){
        console.log(m[i])
    }

// percorrendo os itens de uma matriz

var colunas;
var itens = "";

for(var i = 0; i < linhas; i++){
    colunas = m[i].length
    for(var j = 0; j < colunas; j++){
        itens += (m[i][j]) + ",";
    }

}
 //   console.log(itens);

 // conceito de busca sequencial
 var v = [0,1,0];
 var conta = 0
 for(var i = 0; i < v.length; i++){// for permite percorrer todas as posições
    console.log(v[i]); // mostra no console o valor do item do vetor
    if(v[i]== 1){// verifica se a posição do vetor possui o número 1
        conta++; //caso seja número 1, atualiza a cont e 1 unidade

    }

 }
    console.log("O array possui", conta, "número 1 (um)");

// percorrendo os itens de uma matriz

var colunas;
var itens = "";

cont = 0;
for(var i = 0; i < linhas; i++){
    colunas = m[i].length
    for(var j = 0; j < colunas; j++){
        if (m[j][j] == 1){
            cont++;
        }
    }
}

console.log("A matriz possui", cont, "numeros 1 (um)")


// math.random() = retorna números aleatórios entre 0 e menor que 1

var aleatorio = Math.random();
console.log(aleatorio.toFixed(4));

/* Desenvolver um algoritmo para criar uma matriz com 5 linhas e 8 colunas
cada item da matriz deverá ser um número inteiro
aleatório entre 0 e 9
*/

var m = [];
var temp = [];
linhas = 5;
colunas = 8;

for(var i = 0; i < linhas; i++){
    // m[i] = 0; // TESTE de atribuição para o array
    temp = [];
    for(var j = 0; j < colunas; j++){
        temp[j] = parseInt(Math.random()*10);
    }
    m[i] = temp;
    
}
console.table(m);

