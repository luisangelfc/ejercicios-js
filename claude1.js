const conversionPesosaDolares=(precio) => {
  let conversion=precio/17
  return conversion.toFixed(2);
}

// const conversionPesosaDolares = (precio) => (precio / 17).toFixed(2)

console.log(conversionPesosaDolares(400));
console.log(conversionPesosaDolares(100));
console.log(conversionPesosaDolares(900));
