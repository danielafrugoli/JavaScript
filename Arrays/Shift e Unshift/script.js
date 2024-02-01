// shift = remove o PRIMEIRO elemento do array
// unshift = adiciona um ou + elementos no INICIO de um array

let carros = ['BMW', 'Audi', 'VW', 'Fiat'];

let removerPrimeiroCarro = carros.shift(); // aqui estamos retirando o primeiro elemento do array

console.log(removerPrimeiroCarro); // vai mostrar BMW
console.log(carros); // vai mostrar audi, vw e fiat

carros.unshift('Citroen'); // aqui estamos colocando o citroen na primeira posição do array

console.log(carros);
console.log(carros[0]);