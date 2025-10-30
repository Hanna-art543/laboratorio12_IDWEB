//Función procesar texto
function procesarTexto (texto){
    function limpiarEspacios() {
        return texto.trim(); //limpia espacios
    }
    
    let textoNuevo = limpiarEspacios();

    function contarPalabras (textoNuevo) {
        let contar = textoNuevo.split(/\s+/); //separa por uno o más espacios
        let numero = contar.length;
        return numero;
    }
    let textoFinal = contarPalabras (textoNuevo);
    return textoFinal;

}

//Ingresar y mostrar
let texto = prompt("Ingresar texto:");
 alert("Número de palabras: "+procesarTexto(texto));
