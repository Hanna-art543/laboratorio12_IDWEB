// Función que simula la descarga
function descargarArchivo(url, callback) {
    console.log("Descargando...");
    callback(url);
}

// Callback 
function mostrarDescargaCompleta(url) {
    console.log("Descarga completa de " + url);
}


descargarArchivo("https://ejemplo.com/archivo.zip", mostrarDescargaCompleta);
