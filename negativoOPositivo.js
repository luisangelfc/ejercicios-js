document.write("programa que detecta numeros pares e impares" + "<br>");

let x = parseInt(prompt("escribe el numero"))
document.writeln("escogiste el numero:" + x + "<br>");
function detectarParoImpar (x){
    if (x % 2 == 0){
        document.writeln("es par");
    } else {
        document.writeln("es impar")
    }
}
    if (!isNaN(x)){ 
        if (x>0){
            document.write(" tu numero es positivo y ");
            detectarParoImpar(x)
        } else if (x==0){
            document.writeln("tu numero es 0")
        } else{
            document.writeln("Tu numero es negativo y ")
            detectarParoImpar(x);
    }
    }   else {
        document.writeln("Lo que escribiste no es un numero")
    }