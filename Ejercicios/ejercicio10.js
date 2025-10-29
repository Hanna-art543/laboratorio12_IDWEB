//Función flecha
const componerFunciones = (texto, convertirMayusculas, agregarSigno) => {
    let mayuscula = convertirMayusculas(texto);
    let textoFinal = agregarSigno (mayuscula);
    return textoFinal;
}

//Función convertir a mayúsculas
const convertirMayusculas = (texto) => {
    return texto.toUpperCase();
}

//Función agregar signo
const agregarSigno = (texto) => {
    return texto + "!";
}

//Ingresar y mostrar
let texto = prompt("Ingresa un texto:");

alert("El texto nuevo es: "+componerFunciones(texto, convertirMayusculas, agregarSigno));
