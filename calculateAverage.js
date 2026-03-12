function findAverage(array) {
  let count= 0; //inicializamos variable que funcione como contador
  if (array.length>0){
    for(let i=0;i<array.length;i++){
        count+=array[i];
    } return (count/array.length);
  }else{
    return count;
  }
}

console.log(findAverage([1,2,3,4,5]))