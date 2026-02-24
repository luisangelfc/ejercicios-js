let precios= [100, 200, 300, 400, 500];

for (x=0; x<precios.length; x++){
    console.log(precios[x]);
}

// for (let precio of precios) {
//     console.log(precio)
// }

// agrega el elemento dado al final
precios.push(600);
console.log(precios)
// borra el ultimo
precios.pop()
console.log(precios)
// agrega al incio el elemetno dado
precios.unshift(50)
console.log(precios)
// borra el primero
precios.shift()
console.log(precios)

let nuevosPrecios = precios.filter(precio => precio<200);
console.log(nuevosPrecios);

let preciosconDescuento= precios.map(precio=>precio*0.9);
console.log(preciosconDescuento)

let preciosconDescyMayores= precios.filter(precio=>precio>200).map(precio=>precio * 0.90);
console.log(preciosconDescyMayores);