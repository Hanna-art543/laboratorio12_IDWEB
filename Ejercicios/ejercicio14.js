//Función acumulador
function acumulador (valorInicial) {
    let total = valorInicial;
    
    return function (nuevoValor) {
        total +=nuevoValor;
        return total;
    }
}

let sumar = acumulador(10);  

console.log(sumar(5));  
console.log(sumar(3));   
console.log(sumar(7));   