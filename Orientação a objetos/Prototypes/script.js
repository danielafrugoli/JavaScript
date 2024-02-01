// quando um obj recebe uma requisição de uma propriedade que não tem, ela é procurada 
// no prototype deste objeto;

// o prototype de um obj criado do zero é o Object(pai de todos os objetos), que tem os métodos nativos da linguagem;

// um obj fallback de outro obj

 
const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa)); // vai retornar obj, pois criamos um obj