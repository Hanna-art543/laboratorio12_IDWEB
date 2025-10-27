//Función es múltiplo
const esMultiplo = (a, b) => {
    if(a % b === 0) {
        return true;
    }
    else {
        false;
    }
}

//Ingresar y mostrar
let numero1 = parseInt(prompt("Ingresar primer número:"));
let numero2 = parseInt(prompt("Ingresar segundo número:"));
if (esMultiplo (numero1, numero2)) {
    alert("El número "+numero1+" es múltiplo de "+numero2);
}
else {
    alert("No son multiplos.")
}