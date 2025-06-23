const arr = [1, 2, 3, 4, 5];
// Mostrar Array //
console.log('Array\n',arr);


//Map - Mapeando numeros //
function addOne(num) {
    return num + 1;
  }

  const mappedArr = arr.map(addOne);
  console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]


  function isOdd(num) {
    return num % 2 !== 0;
  }
  // FILTER //
  console.log( 'Filtrando Numeros Impares')
  const oddNums = arr.filter(isOdd);
  console.log(oddNums); // Outputs [1, 3, 5]; // Outputs [1, 2, 3, 4, 5], original array is not affected

  // Reduce // 
  const productOfAllNums = arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
