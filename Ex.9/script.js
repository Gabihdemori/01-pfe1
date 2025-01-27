function calcularDesconto() {
    let peca = document.getElementById('peca').value;
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    switch (peca) {
        case 'camisa':
            desconto = 0.20;
            break;
        case 'bermuda':
            desconto = 0.10; 
            break;
        case 'calca':
            desconto = 0.15; 
            break;
        default:
            resultado.innerHTML = "Selecione uma peça válida.";
            return;
    }

    let valorDesconto = preco * desconto;
    let precoFinal = preco - valorDesconto;

    resultado.innerHTML = `Desconto: R$ ${valorDesconto.toFixed(2)} <br>Preço Final: R$ ${precoFinal.toFixed(2)}`;
}