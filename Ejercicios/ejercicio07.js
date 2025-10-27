//Función calcular descuento
const calcularDescuento = (precio, porcentaje) => {
    let descuento = precio * porcentaje/ 100;
    let resultado = precio - descuento;
    return "El descuento es "+descuento+" se debe pagar "+resultado;
}

//Ingresar datos y mostrar resultado
let precio = parseFloat(prompt("Ingrese el precio:"));
let porcentaje = parseFloat(prompt("Ingrese el descuento (solo el número):"));

alert(calcularDescuento(precio, porcentaje));

