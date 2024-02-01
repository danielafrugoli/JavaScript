function tipoDeDado (dado) {

    if(typeof dado === 'number') {
        console.log("Aqui temos um número")
    } else if(typeof dado === 'string') {
        console.log("Aqui temos uma string")
    } else {
        console.log("Aqui temos um boolean")
    }

}


tipoDeDado(23);
tipoDeDado("tudo bem");
tipoDeDado(true);