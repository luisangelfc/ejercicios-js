// Count Elements Greater Than Previous Average

function countResponseTimeRegressions(responseTimes) {
    let count=0;
    let suma= responseTimes[0];
    for(let i=1; i<responseTimes.length; i++){        
        let promedio= Math.floor((suma/i));
        if (responseTimes[i]>promedio){
            count++;
        }
        suma+=responseTimes[i]
    }
    return count;       

    
}