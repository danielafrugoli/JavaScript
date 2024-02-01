function recebeNumero(num) {
    for(let i = num; i >= 0; i--) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}

console.log(recebeNumero(10));