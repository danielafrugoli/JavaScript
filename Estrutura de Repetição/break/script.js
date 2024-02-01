let nome = "Matheus";

for(let i = 0; i < 10; i = i + 1) {

    if(i == 3) {
        nome = "João";
    }

    if(i == 5 && nome == "João") {
        console.log("O nome é João, pode parar");
        break;
    }

    console.log(i);
}

// o break é para parar o loop antes que o loop complete todo o ciclo