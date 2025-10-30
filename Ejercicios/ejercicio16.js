//Funcion con rest
function mediaAritmetica (...numeros) {
    let suma = 0;
    for (let num of numeros) {
        suma += num;
    }

    let promedio = suma / numeros.length;
    return promedio;
}

//Ejecución
console.log(mediaAritmetica(5, 10, 15));     
console.log(mediaAritmetica(3, 6, 9, 12));   
console.log(mediaAritmetica(100));     