function detectarParoImpar (x){
    if (x % 2 == 0){
        return(" es par");
    } else {
        return(" es impar")
    }
}

//utilizando for
// for(x=1;x<11;x++){
//     console.log(x + detectarParoImpar(x) );
// }


//reto ciclo for
let suma=0;
for(x=1;x<21;x++){
    if(detectarParoImpar(x)== " es par"){
        console.log(x);
        suma= suma+x;

    }     
}

    console.log(suma);