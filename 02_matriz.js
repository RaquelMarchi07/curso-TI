/* desenvolva um algortmo que crie uma matriz de tamanho 4x4 e, insira o valor 0 em todas as suas posições


- após a matriz 4x4 criada anteriormente, altere seu conteúdo para diagonal, inserir valor 1.
*/

var m = []
var temp = [];
linhas = 4;
colunas = 4;


for(var i = 0; i < linhas; i++){
    temp = [];
    // m[i] = 0; // teste de atribuição para array
    for(var j = 0; j < colunas; j++){
       temp[j] = 0
    }
    m[i] = temp
}
console.table(m);




/* parte dois
*/



for(var i = 0; i < linhas; i++){
    // m[i] = 0; // teste de atribuição para array
    for(var j = 0; j < colunas; j++){
       if( i == j){
            m[i][j] = 1;
       }
           
    }
}
console.table(m);


// altera a diagonal da matriz NxN para o valor 1 (um)
// for (var i = 0; < linhas; i++){
//  for(var j = 0; j < colunas; j++){
//      if(i==j){
//          m[i][j] = 1;
//  }
//    }
// }
// console.table(m);


for(var i = 0; i < linhas; i++){
    m[i][i] = 1;
}
console.table(m);


/* matriz quadrada
*/

var m = []
var temp = [];
linhas = 10;
colunas = linhas;


for(var i = 0; i <= linhas; i++){
    temp = [];
    // m[i] = 0; // teste de atribuição para array
    for(var j = 0; j <= colunas; j++){
       temp[j] = 0
    }
    m[i] = temp
}
console.table(m);

