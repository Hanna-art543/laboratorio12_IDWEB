//Función procesar texto
function procesarTexto (texto){
    function limpiarEspacios() {
        return texto.trim(); //limpia espacios
    }
    
    let textoNuevo = limpiarEspacios(texto);

    function contarPalabras (textoNuevo) {
        let contar = textoNuevo.split();
        let numero = contar.length;
        return numero;
    }
    let textoFinal = contarPalabras (textoNuevo);
    return textoFinal;

}

//Ingresar y mostrar
let texto = prompt("Ingresar texto:");
 alert("El resultado final: "+procesarTexto(texto));