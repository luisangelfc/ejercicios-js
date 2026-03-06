// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

let n= parseInt(prompt("Introduzca el numero"));
function digitize(n) {
  let aux=n.toString();
  let resultado=[];

  for(let i=aux.length-1;i>=0;i--){
    resultado.push(parseInt(aux[i]));
  }
  return resultado
}

console.log( `El numero es  ${n} y el resultado es ${digitize(n)}` );
// console.log( `El numero es  902937 y el resultado es ${digitize(902937)}` );
// console.log( `El numero es  0 y el resultado es ${digitize(0)}` );   