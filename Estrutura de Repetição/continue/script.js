// continue é para pular algumas execuções do loop

let x = 0

while (x < 11) {
    x = x + 1;
    if(x % 2 == 0) {
        continue; // aqui quer dizer que sempre que chegar em um número par, vai pular, ficando só os ímpares
    }
    console.log(x);
    x = x + 1;
}


