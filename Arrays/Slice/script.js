// slice = retorna um array a partir de outro array
// o array retornado é determinado pelos parametros q são os indices de inicio e fim do novo array
// esse metodo é usado pra pegar algum elemento do array ou parte dele

let numeros = [0,1,2,3,4,5];

console.log(numeros.slice(2,3)); // aqui vai retornar o indice 2

console.log(numeros.slice(1,3)) // aqui vai retornar indice 1 e 2

console.log(numeros.slice(3)); // aqui vai retornar do indice 3 até o fim, pois não colocamos o último parametro

console.log(nums.slice(-2)); // aqui vamos pegar os 2 ultimos indices do array

console.log(nums.slice(3, -2)); // aqui vamos a partir do indice 3 e retirar os 2 ultimos