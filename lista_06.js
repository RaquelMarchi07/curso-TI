var prompt = require("prompt-sync");
var prompt = prompt();

var horário = parseFloat(prompt("Informe o horáio:"));

if(horário >= 0 && horário <= 12){
    console.log("Manhã")
}else if(horário > 12 && horário <= 17){
    console.log("Tarde")
}else if(horário > 17 && horário <= 24){
    console.log("Noite")
}

