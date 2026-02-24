let producto= {nombre: "baraja", precio:300, stock:30};
console.log(producto.nombre) //la manera mas facil de acceder a cada atributo de los objetos    

//haciendo un array con 3 productos
let magicArray= [
    {nombre:"bycicle", precio:500, stock:3},
    {nombre:"chinese coin", precio:100, stock:40},
    {nombre:"tapate de magia", precio:900, stock:34}
];

// for(let x of magicArray){
//     console.log(`El producto es ${x.nombre}, tiene un precio de ${x.precio}, y hay ${x.stock} disponibles`);
// }


    let miniEjercicio= magicArray.filter(aux => aux.precio>100).map(aux=> ({ nombre: aux.nombre, precio: aux.precio * 0.85, stock: aux.stock }))
    for (let x of miniEjercicio){
    console.log(`El producto es ${x.nombre}, tiene un precio de ${x.precio}, y hay ${x.stock} disponibles`);
    }
