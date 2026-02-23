document.write("programa que detecta numeros pares e impares" + "<br>");
let x = parseInt(prompt("escribe el numero")) //el parseInt se usa para convertit el prompt en un entero, si no se guardaria como string
document.writeln("escogiste el numero:" + x + "<br>");
    if (!isNaN(x)){
            if (x % 2 == 0){
        document.writeln("es par")
        }
        else {
        document.writeln("es impar")

        }
    } else {
        document.writeln("Ingresa un numero valido")
    }