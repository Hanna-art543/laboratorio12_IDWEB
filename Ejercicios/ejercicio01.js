//Función es par
function esPar(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

//Ingresar número y mostrar resultado
let numero = parseInt(prompt("Ingrese el número:"));

if(esPar(numero)) {
    alert("El número "+numero+" es par.");
}
else {
    alert("El número es impar.")
}

