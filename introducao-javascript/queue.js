// var clientes = "0; null ;[Negócio.Cliente 3]";
// var clientesSpliteds = clientes.split(';',4)

// var cliente1 = clientesSpliteds[0]
// var cliente2 = clientesSpliteds[1]
// var cliente3 = clientesSpliteds[2]

// var verificador0null = clientes.includes(0, null, "null", "0")

// if(cliente1 === cliente2 && verificador0null === false || cliente1 === cliente3 && verificador0null === false || cliente2 === cliente3 && verificador0null === false ){

// console.log("")
// }else{

// console.log("Clientes validos")

// }

var clientes = "a;b;0";
var clientesSpliteds = clientes.split(';',4)
console.table(clientesSpliteds)

var cliente1 = clientesSpliteds[0]
var cliente2 = clientesSpliteds[1]
var cliente3 = clientesSpliteds[2]
console.log(cliente1,cliente2,cliente3)


console.log(cliente3 !== '0')
var verificador0null = clientes.includes(null,0, 'null','0')

if(cliente1 === cliente2  && verificador0null === "true" || 
  cliente1 === cliente3 && verificador0null === "true"||
  cliente2 === cliente3 && verificador0null === "true" ||
  cliente2 === cliente1 && verificador0null === "true" || 
  cliente3 === cliente1 && verificador0null === "true" || 
  cliente3 === cliente2 && verificador0null === "true"  )
  
  {
console.log(".")
}else{

console.log("Clientes validos")

}


function verifica(cliente1, cliente2, cliente3){

if( cliente1 === 0 || cliente1 === null || 
    cliente2 === 0 || cliente2 === null||
    cliente3 === 0 || cliente3 === null){

    return ""
    }
else if(

    cliente1 === cliente2 || 
    cliente1 === cliente3 ||
    cliente2 === cliente3 ||
    cliente2 === cliente1 ||
    cliente3 === cliente1 ||
    cliente3 === cliente2){

        return ""
    }else{

        return "Valida"
    }
} (cliente1, cliente2, cliente3)



