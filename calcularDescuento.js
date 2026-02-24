//ejercicio donde se aplica un descuento, se pide al usuario precio y descuento. se valida si el descuento es vacio, en ese caso, se aplica por defecto un descuetno del 10%
let precio= parseInt(prompt("Ingrese el precio:"));
let descuento= prompt("Ingrese el descuento:");
function descuentoVacio (descuento){
    if (descuento == ""){
        return descuento=undefined;
    } else
        return parseInt(descuento);
}
descuento=descuentoVacio(descuento);
function calcularDescuento (precio, descuento=10) {
    if (isNaN(precio)){
        return `El precio que ingresaste es ${precio} y no es un numero`
    }else{
        let aux=descuento/100;
        let precioFinal=precio - (precio*aux);
        return `El precio Final del producto es  ${precioFinal}`;
    }
}
// console.log(typeof(precio));
// console.log(typeof(descuento));
console.log(calcularDescuento(precio, descuento));