// IMC massa / massa*altura

var paciente1 = document.querySelector("#primeiroPaciente"); // Essa linha serve para pegarmos o array do primeiro paciente [nome, peso, altura, gordura e imc]
var nome = paciente1.querySelector(".info-nome"); 

var peso = paciente1.querySelector('.info-peso');
var pesoNumber = Number(peso);

    let pesoValido = false;
    let alturaValida = false;


var altura = paciente1.querySelector('.info-altura');
var alturaNumber = altura.textContent;
console.log(alturaNumber)

var imcPreenche = paciente1.querySelector('.info-imc')





if (alturaNumber >= 4 && alturaNumber <=0 ){

    imcPreenche.textContent = "Altura inválida"
    console.log("altura inválida")
}


// if(pesoValido == true && alturaValida == true)
//     {
//     var imc = (pesoNumber/(alturaNumber*alturaNumber)).toFixed(0)
// }else{""}




// console.log(imcPreenche)








// console.log(imc)
// console.log(pesoNumber+alturaNumber)
// console.log(`o Nome do Paciente é ${nome},  pesa ${peso}Kg e mede ${altura}`)
