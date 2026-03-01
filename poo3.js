class Animal{
    constructor(nombre, sonido){
        this.nombre=nombre;
        this.sonido=sonido;
    }

    hacerSonido(){
        console.log(`El ${this.nombre} ${this.sonido}`);
    }
}

class Perro extends Animal{
    constructor(nombre, sonido, raza){
        super(nombre, sonido);
        this.raza=raza;
    }

    buscarPelota(){
        console.log(`El perro llamado ${this.nombre} va por la pelota`);
    }

    hacerSonido(){
        super.hacerSonido();
        console.log(`${this.nombre} ahora ladra más fuerte`);
    }
}


class Gato extends Animal{
    constructor(nombre, sonido, colorOjos){
        super(nombre, sonido);
        this.colorOjos=colorOjos;
    }

    ignorarte(){
        console.log(`El gato llamado ${this.nombre} no te está pelando`);
    }
}

let gatoDePedro= new Gato("pelusa", "maulla", "verdes");
gatoDePedro.ignorarte();
gatoDePedro.hacerSonido();

let perroDeBubu= new Perro("Nikko", "ladra", "mestizo");
perroDeBubu.buscarPelota();
perroDeBubu.hacerSonido();