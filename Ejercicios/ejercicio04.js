//Función que devuelva el mayor de 3 números
const mayorDeTres = (a, b, c) => {
    let menor = Math.max(a, b, c);
    return menor;
}

//Ingresar números y mostrar resultado
let num1 = parseInt(prompt("Ingresar primer número:"));
let num2 = parseInt(prompt("Ingresar segundo número:"));
let num3 = parseInt(prompt("Ingresar tercer número:"));

alert("El número mayor de los 3 números es: "+mayorDeTres(num1, num2, num3));