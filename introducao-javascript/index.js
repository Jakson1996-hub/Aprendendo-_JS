// IMC massa / massa*altura

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0;  i< pacientes.length; i ++){
    var paciente = pacientes[i]


    const pesoPaciente = paciente.querySelector(".info-peso");
    const peso = pesoPaciente.textContent;
    
    let pesoValido = true;
    
    const tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;
    
    let alturaValida = true;
    
    // const tdGordura = paciente.querySelector(".info-gordura");
    // const gordura = tdGordura.textContent;
    
    let tdImc = paciente.querySelector(".info-imc")
    
    if(peso < 0  ||  peso >= 1000){
        console.log('Peso inválido')
         pesoValido = false;
    }   tdImc.textContent = "Peso inválido";
    
    if( altura <0 || altura > 5){
        console.log("Altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
    }
    
    
    
    if(alturaValida == true && pesoValido == true){
    const imc = (peso/(altura*altura)).toFixed(0)
    let tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc
    alert("Seu imc é de :"+ imc)
    }else{alert("altura ou peso com valores surreais")}
}




//  console.log(paciente); /// <tr
//  console.log(peso); /// td =  peso
//  console.log(altura); // td =  altura
//  console.log(gordura); // td =  gordura
//


// > </tr>