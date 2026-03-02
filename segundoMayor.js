// funcion que devuelve el segundo mayor de un arreglo
function segundoMayor(arr) {
    if(arr.length <2 ){
        throw new Error ("El arreglo debe tener al menos 2 elementos")
    } 
    let mayor=arr[0];
    let segundo;
    // asigna los primeros dos elementos y los acomoda dependiendo de su tamaño
    if (arr[1]> mayor){
        mayor = arr[1];
        segundo=arr[0];
    } else{
        segundo = arr[1];
    }
    for(let i=2; i<arr.length; i++){
        if (arr[i]>mayor){
            segundo=mayor;
            mayor= arr[i];
        }else if (arr[i] < mayor && arr[i] > segundo){
            segundo =arr[i];
        }
    }
    if(mayor == segundo){
        throw new Error("El arreglo contiene los mismos elementos")
    }
    return segundo;    
}

let ejemplo = [-10, -20, -3, -50];
console.log(segundoMayor(ejemplo));