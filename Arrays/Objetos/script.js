// uma coleção de propriedades, parecido com arrays

// [] = array
// {} = objeto

let cachorro = {
    patas: 4,
    nome: 'Thor',
    idade: 5 
}

console.log(cachorro.patas); // acessando a propriedade patas do objeto


// deletando e criando propriedades em objetos

// podemos deletar e criar propriedades mesmo depois do objeto criado

let pessoa = {
    nome: "Daniela",
    idade: 27,
    altura: 1.64
}

console.log(pessoa.nome); // acessando a propriedade nome do objeto

delete pessoa.nome; // aqui estamos deletando a propriedade nome do objeto

pessoa.casado = true; // aqui estamos inserindo uma nova propriedade no objeto



// podemos copiar todas as propriedades de um objeto para outro com o método assign

let carro = {
    portas: 2,
    portamalas: '200l',
    motor: '2.0'
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true
}

console.log(carro); // aqui vai ter somente o carro: portamalas, portas e motor

Object.assign(carro, adicionais); // aqui estamos incrementando o adicionais em carro

console.log(carro); // aqui vai ter o carro + os adicionais



// em objetos temos chave(nome da propriedade) e o valor da propriedade

// o método keys verifica as chaves do objeto

let obj = {
    'chave1': 1,
    'chave2': 2,
    'chave3': 3,
}

console.log(obj); // aqui vamos puxar tudo que tem dentro do objeto

console.log(Object.keys(obj)); // aqui vai puxar apenas as chaves (chave1, chave2, chave3)