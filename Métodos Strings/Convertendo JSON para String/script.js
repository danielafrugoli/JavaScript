// podemos converter o JSON para uma string de forma fácil
// também podemos converter string em JSON

//stringify = converte JSON em string
// parse = converte string em JSON

let pessoa = {
    "nome": "Daniela",
    "idade": 27,
    "profissao": "programador",
    "hobbies": ["leitura", "correr", "video game"]
}

let pessoaTexto = JSON.stringify(pessoa); // aqui vamos converter o JSON em string

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto); // aqui vamos converter string para JSON

console.log(pessoaJSON);