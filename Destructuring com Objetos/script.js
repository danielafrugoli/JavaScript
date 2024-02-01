// podemos definir variáveis com propriedades do objeto com uma notação diferente
// chamada destructuring
// cria variáveis a partir de um objeto

let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: '2.0'
};

const {rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor} = obj;
// aqui criamos constantes a partir de um objeto

console.log(vRodas);