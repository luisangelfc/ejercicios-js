class Auto{
    constructor (nombre, modelo, año){
        this.nombre=nombre; //el this está haciendo referencia al de la misma clase, lo está conectando o relacionando con el parametro que se le va a asignar
        this.modelo=modelo;
        this.año=año;
    }

    acelerar(){
    console.log(`el carro ${this.nombre} está acelerando`)
}
}

let autoNuevo= new Auto("toyota", "Avanza", 2020);
let autoViejo= new Auto("chevrolet", "Aveo", 2001);

console.log(`El nuevo auto es de la marca ${autoNuevo.nombre} es el modelo ${autoNuevo.modelo} y es del año ${autoNuevo.año}`);
autoNuevo.acelerar();

console.log(`El viejo auto es de la marca ${autoViejo.nombre} es el modelo ${autoViejo.modelo} y es del año ${autoViejo.año}`)
autoViejo.acelerar();


//usando herencia vamos a crear otro tipo de auto
class AutoElectrico extends Auto{
    constructor(nombre, modelo, año, bateria){
        super(nombre, modelo, año);
        this.bateria=bateria;
    }
// implementamos un metodo que solo puede realizar los tipos de autos electricos
    cargar(){
        console.log(`El auto ${this.nombre} se está cargando`);
        }
}


let autoModerno= new AutoElectrico("Tesla", "Cybertruck", 2026, "duracell");
console.log(`El auto es de la marca ${autoModerno.nombre} es el modelo ${autoModerno.modelo} y es del año ${autoModerno.año}, además de contar con pilas ${autoModerno.bateria}`)
autoModerno.acelerar();
autoModerno.cargar();
