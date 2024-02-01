// uma função que retorna outra função

function lembrarSoma (x) {
    return function(y) {
        return x + y;
    }
}

let soma1 = lembrarSoma(2);

console.log(soma1(5));  // vai dar 7, pois ele lembrou do valor 2 declarado ali em cima