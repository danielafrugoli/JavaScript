// trim = remove tudo que não é string

let nome = "    Daniela";

// aqui vai ficar assim: Olá     Daniela, tudo bem? (não é o objetivo)

let nomeCorridigo = nome.trim(); // aqui vai retirar aqueles espaços extras antes do nome

console.log(nome);
console.log(nomeCorridigo);