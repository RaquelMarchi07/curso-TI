/*Crie um novo script .js
Neste arquivo, crie um algoritmo que atenda a seguinte regra de negógio.

O algoritmo deverá realizar o sorteio de um número inteiro entre 0 e 100.
O sorteio deverá ser realizado até que o número 15 seja sorteado.
Após o número 15 ser sorteado, o algoritmo deverá mostrar:
1- uma lista com todos os números sorteados 
2- quantos números foram sorteados
3- se dentro da lista de números sorteados existe o número  55
*/



/*O algoritmo deverá realizar o sorteio de um número inteiro entre 0 e 100.*/
var sorteio = []
var list = []
var contador =0
//sorteio.push (parseInt(Math.random() * 101) )
console.log(sorteio)

/*O sorteio deverá ser realizado até que o número 15 seja sorteado.*/

while(list!=15){
    list=parseInt(Math.random() * 101) ;
    sorteio.push(list)
    // console.log(sorteio)

}

//1- uma lista com todos os números sorteados

for(var i= 0; i<sorteio.length;i++){
console.log(i+1, "-", sorteio[i]);
  } 
console.log("Foram sorteados: " ,sorteio.length)

for(var i= 0; i<sorteio.length;i++){
   if(sorteio[i]==55){
       contador++
       
   }
      } 
    console.log("Tem", contador ,"numeros 55 na lista")