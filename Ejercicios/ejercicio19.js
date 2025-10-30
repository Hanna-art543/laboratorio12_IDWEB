// Función filtrar Arreglo
function filtrarArreglo(arr, callback) {
    let resultado = [];
    for (let elemento of arr) {
        if (callback(elemento)) {
            resultado.push(elemento);
        }
    }
    return resultado;
}

let numeros = [2, 5, 8, 10, 13, 20];

// callback
let mayores = filtrarArreglo(numeros, n => n > 8);
console.log(mayores);


let pares = filtrarArreglo(numeros, n => n % 2 === 0);
console.log(pares); 
