// Función ejecutar Operacion
function ejecutarOperacion(fn, x, y) {
    return fn(x, y);
}

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b ;

console.log(ejecutarOperacion(sumar, 10, 5));      
console.log(ejecutarOperacion(restar, 10, 5));     
console.log(ejecutarOperacion(multiplicar, 10, 5));  
console.log(ejecutarOperacion(dividir, 10, 5));    
