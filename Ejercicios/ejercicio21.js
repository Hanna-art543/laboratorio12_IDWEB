// Función recursiva 
function potencia(base, exponente) {
    // Caso base
    if (exponente === 0) {
        return 1;
    } 
    // Caso recursivo
    else {
        return base * potencia(base, exponente - 1);
    }
}

console.log(potencia(2, 3)); 
console.log(potencia(5, 2));  
console.log(potencia(3, 0)); 
console.log(potencia(4, 1)); 
