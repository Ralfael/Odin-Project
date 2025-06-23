//filter//

let numeros = [1, 2, 3, 4, 5, 6];
let maioresQueTres = numeros.filter(function(numero) {
  return numero > 3;
});

console.log(maioresQueTres); // Saída: [4, 5]