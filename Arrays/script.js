// podemos ter arrays de vários tipos (strings, números, booleans)

let arr = [1, 2, 3, 4]; // array de números

let nomes = ['Daniela', 'João', 'Matheus']; // array de strings

let bool = [true, false, true]; // array de booleans

let misturado = ['Daniela', 23, true, 'alo']; //também pode ter arrays misturados

console.log(arr);
console.log(nomes);
console.log(bool);
console.log(misturado);


//acessando elementos do array

console.log(arr[1]); // acessa o elemento 1 do array arr
console.log(nomes[0]); // acessa o nome 0 do array nomes
console.log(arr[arr.length - 1]); // aqui puxamos o último elemento do array mesmo sem saber qual
