//Función es positivo
const esPositivo = (num) => {
    if(num > 0) {
        return num + " es positivo";
    }
    else {
        return num + " es negativo";
    }
}

//Ingresar numero y mostrar
let numero = prompt("Ingrese número:");
alert(esPositivo(numero));

