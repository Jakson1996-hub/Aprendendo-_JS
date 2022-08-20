var pacientes = document.querySelectorAll('.paciente');

const  title = document.querySelector(".título")
console.log(title.textContent)
title.textContent = "Rayssa linda e maravilhosa" 

for(var a = 0; a < pacientes.length; a++){

 var paciente = pacientes[a];   
 console.log(pacientes[a])
var pesoTd = paciente.querySelector('.info-peso');
var peso = pesoTd.textContent;


var alturaTd = paciente.querySelector('.info-altura');
var altura = alturaTd.textContent;


var imcTd = paciente.querySelector('.info-imc');


    if(peso <= 35 || peso >= 200){

    var pesoValido = false;
    imcTd.textContent = "Peso inválido!"; 
    console.log("Peso inválido")
    paciente.classList.add("paciente-invalido")
    }else{

        pesoValido = true;

    }

    if(altura <= 0 || altura >= 3.10){

    var alturaValida = false;
    imcTd.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido")
    }else{

        alturaValida = true;
    }

    if(pesoValido === true && alturaValida === true){

      imcTd.textContent = (peso/(altura*altura)).toFixed(0)
    }
}
