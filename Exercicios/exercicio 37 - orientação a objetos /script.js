class Carrinho {
    constructor(itens, quantidadeTotal, valorTotal) {
        this.itens = itens;
        this.quantidadeTotal = quantidadeTotal;
        this.valorTotal = valorTotal
    }

    adicionar (itens2) {
        this.itens += itens2;
    }

    remover(itens2) {
        this.itens -= itens2;
    }
}


let carrinho = new Carrinho(10);

console.log(carrinho.itens);

carrinho.adicionar(2);

console.log(carrinho.itens);

carrinho.remover(5);

console.log(carrinho.itens);