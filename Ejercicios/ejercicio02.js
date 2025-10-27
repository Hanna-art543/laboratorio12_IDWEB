//Funcion calcular el area de un rectángulo
function areaRectangulo (base, altura) {
    let area = base * altura;
    return area;
}

//Ingresar y mostrar
let base = parseFloat(prompt("Ingrese la base:"));
let altura = parseFloat(prompt("Ingrese la altura:"));

alert("El área del rectángulo es: "+areaRectangulo(base, altura));