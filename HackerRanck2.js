function findSmallestMissingPositive(orderNumbers) {
    let n=orderNumbers.length;
    for(let i=0; i<n; i++){
        while(orderNumbers[i]>0 && 
            orderNumbers[i]<= n && 
            orderNumbers[i] !== i + 1 && 
            orderNumbers[orderNumbers[i]-1] !== orderNumbers[i] ){
                let correctIndex= orderNumbers[i]-1;
                let aux= orderNumbers[i];
                orderNumbers[i] = orderNumbers[correctIndex];
                orderNumbers[correctIndex]=aux;

        }
    }

    for(let i= 0; i<n; i++){
        if(orderNumbers[i] !== i + 1){
            return i + 1; 
        }
    }
return n+1;
}