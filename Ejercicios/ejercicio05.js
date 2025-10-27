//Función que reciba 3 notas y retorne su promedio
const promedio = function (nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3)/ 3;
    return promedio;
}

//Ingresar y mostrar 
let nota1 = parseInt(prompt("Ingresar nota1:"));
let nota2 = parseInt(prompt("Ingresar nota2:"));
let nota3 = parseInt(prompt("Ingresar nota3:"));

alert("El número mayor de los 3 números es: "+promedio(nota1, nota2, nota3));
