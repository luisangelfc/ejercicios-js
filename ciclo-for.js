function detectarParoImpar (x){
    if (x % 2 == 0){
        return(" es par");
    } else {
        return(" es impar")
    }
}

//utilizando for
for(x=1;x<11;x++){
    console.log(x + detectarParoImpar(x) );
}