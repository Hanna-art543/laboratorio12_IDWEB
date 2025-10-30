//Función mostrar datos
function mostrarDatos(nombre, edad, ...hobbies) {
    let arreglo = [nombre, edad, ...hobbies];
    for (let i of arreglo) {
        console.log(i);
    }
}

//Datos y mostrar
let arreglo = ["Ana", 17, "Cantar", "Dibujar", "Jugar futbol"];

mostrarDatos(...arreglo);

