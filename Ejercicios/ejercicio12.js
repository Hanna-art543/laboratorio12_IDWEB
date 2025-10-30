// Función principal
function operacionesMatematicas(a, b) {

    // Funciones internas 
    const sumar = () => a + b;
    const restar = () => a - b;
    const multiplicar = () => a * b;
    const dividir = () => b!==0 ? a / b : "Error: división por cero";

    return {
        sumar,
        restar,
        multiplicar,
        dividir
    };
}

let operacion = operacionesMatematicas(10, 2);

console.log("Suma:", operacion.sumar());
console.log("Resta:", operacion.restar());
console.log("Multiplicación:", operacion.multiplicar());
console.log("División:", operacion.dividir());
