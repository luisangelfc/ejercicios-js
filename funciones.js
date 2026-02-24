//forma normal de declarar funciones

function sumar (a, b){
    return (a+b);
}

//arrow function

const resta=(a,b) => a-b

// function par o impar normal
// function detectarParoImpar (x){
//     if (x % 2 == 0){
//         document.writeln("es par");
//     } else {
//         document.writeln("es impar")
//     }
// }

// misma funcion en arrow
let x= parseInt(prompt("introdce numero"));
const detectarParoImpar = (x)=>{
    // console.log("x vale:", x)    solo ers para debbuguear
    if (isNaN(x)){
        return "no es un numero";
    }else if (x%2 == 0){
        return "es par";
    }else{
        return "es impar"
    }
}

console.log(detectarParoImpar());
