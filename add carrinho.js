let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nomeProduto, precoProduto, imagemProduto) {
    // Adicionar o produto ao carrinho
    carrinho.push({ nome: nomeProduto, preco: precoProduto, imagem: imagemProduto });
    
    // Atualizar a lista do carrinho
    atualizarCarrinho();

    // Atualizar o total do carrinho
    total += precoProduto;
    document.getElementById("total-carrinho").textContent = total.toFixed(2);
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById("lista-carrinho");
    listaCarrinho.innerHTML = '';

    // Adicionar todos os itens do carrinho à lista
    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<img src="${item.imagem}" alt="${item.nome}" style="width: 50px; height: 50px; margin-right: 10px;"> ${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
    });
}
