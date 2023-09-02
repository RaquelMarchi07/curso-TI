
var prompt=require("prompt-sync")
var prompt=prompt()


// BY THALES 

var sair = false
while(!sair){
console.log('\n1-soma \n2-subtração \n3-divisão \n4-multiplicação \n5-porcentagem')

var opcao=parseFloat(prompt('escolha uma operação '));
var n1=parseFloat(prompt('informe um numero: '));
var n2=parseFloat(prompt('informe um segundo numero: '));

if (opcao==1)
{
    var soma=n1+n2;
    console.log(n1+ ' + ' + n2 + ' = ' + soma);
}
else if (opcao==2)
{
    var subtracao=n1-n2;
    console.log(n1+ ' - ' + n2 + ' = ' + subtracao);
}
else if (opcao==3)
{
    if(n2==0) {
        console.log("não pode dividir pro 0 burro")
    } else {
        var divisao = n1 / n2;
        console.log(n1 + ' dividido ' + n2 + ' = ' + divisao);
    }
}
else if (opcao==4)
{
    var multiplicacao=n1*n2;
    console.log(n1+ ' x ' + n2 + ' = ' + multiplicacao);
}
else if (opcao==5)
{
    var porcentagem=n1*n2/100;
    console.log(n2 + ' % de '+ n1 + ' = ' + porcentagem );
}
console.log("deseja fazer uma nova operação? (s/n) ")
var voltar=prompt('voltar? ')
switch(voltar){
    case 's':
        sair=false
        break;
    case 'n':
        sair=true
        break;
}
}


//BY THALES SACILOTTI