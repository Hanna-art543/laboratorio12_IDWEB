//Funcion crear contador
function crearContador () {
    let valor = 0;
    const incrementar = () => {
        valor++;
        return valor;
    };

    const resetear = () => {
        valor = 0;
        return valor;
    };

    return {
        incrementar, resetear
    };
}

//Mostrar
let contador = crearContador();

console.log(contador.incrementar()); 
console.log(contador.incrementar()); 
console.log(contador.resetear());    
console.log(contador.incrementar()); 
