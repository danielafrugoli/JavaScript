// uma forma de uma função receber indefinidos parametros
// o operador REST vai virar um array
// o parametro é definido por:... nome

let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumeros(num, num1, num2);
imprimirNumeros(num2, num3);

// o objetivo aqui é q essa função pode receber inúmeros parametros