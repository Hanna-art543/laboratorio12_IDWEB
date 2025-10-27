//Función transformar a mayúsculas
function convertirAMayusculas (texto) {
    let textoMayusculas = texto.toUpperCase();
    return textoMayusculas;
}

//Ingresar y mostrar
let texto = prompt("Ingresar un texto:");
alert(convertirAMayusculas(texto));

