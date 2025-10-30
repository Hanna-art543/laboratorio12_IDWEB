// Función que crea una secuencia
function crearSecuencia(inicio, paso) {
    let actual = inicio; 

    // función interna 
    return function() {
        let valor = actual;
        actual += paso; 
        return valor;
    };
}

let secuencia = crearSecuencia(2, 3);

console.log(secuencia()); 
console.log(secuencia()); 
console.log(secuencia());
console.log(secuencia()); //aumentan
