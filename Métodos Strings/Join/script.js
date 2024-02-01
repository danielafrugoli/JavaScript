// join = junta elementos em um array em uma frase, por meio de um separador

// pega um array e transforma em uma string

let frase = "Testando novo método";

let palavras = frase.split(" "); // aqui transformamos a string em array

let novaFrase = palavras.join(" @ "); // aqui transformamos o array em string separando com @

console.log(novaFrase);