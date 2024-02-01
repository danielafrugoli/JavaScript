// mutação é quando conseguimos criar um novo obj com todas as características de um obg antigo

let pessoa = {
    nome: "Daniela"
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2); // aqui vai dar true

pessoa2.nome = "Pedro";

console.log(pessoa.nome); // aqui o nome será Pedro, pq se mudamos em 1 obj tbm muda no outro
// pq o pessoa2 é um obj referencia ao pessoa