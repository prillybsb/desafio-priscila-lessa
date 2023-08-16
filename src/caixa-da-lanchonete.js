class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    const cardapio = {
      cafe: { descricao: "Café", valor: 3.0 },
      chantily: { descricao: "Chantily (extra do Café)", valor: 1.5 },
      suco: { descricao: "Suco Natural", valor: 6.2 },
      sanduiche: { descricao: "Sanduíche", valor: 6.5 },
      queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.0 },
      salgado: { descricao: "Salgado", valor: 7.25 },
      combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.5 },
      combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.5 },
    };

    const formasDePagamentoValidas = ["dinheiro", "debito", "credito"];

    if (!formasDePagamentoValidas.includes(metodoDePagamento)) {
      return "Forma de pagamento inválida!";
    }

    let totalCompra = 0;

    for (const itemInfo of itens) {
      const [codigo, quantidade] = itemInfo.split(",");
      const item = cardapio[codigo];

      if (!item) {
        return "Item inválido!";
      }

      totalCompra += item.valor * parseInt(quantidade);
    }

    if (metodoDePagamento === "dinheiro") {
      totalCompra *= 0.95; // Desconto de 5%
    } else if (metodoDePagamento === "credito") {
      totalCompra *= 1.03; // Acréscimo de 3%
    }

    return `R$ ${totalCompra.toFixed(2)}`;
  }
}

export { CaixaDaLanchonete };
