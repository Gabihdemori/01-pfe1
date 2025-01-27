function calcularAumento() {
    let nome = document.getElementById('nomeMercadoria').value;
    let preco = Number(document.getElementById('precoMercadoria').value);
    let resultado = document.getElementById('resultado');
    let aumento = 0;

    if (preco < 1000) {
        aumento = preco * 0.05; 
    } else {
        aumento = preco * 0.07; 
    }

    let novoPreco = preco + aumento;

    resultado.innerHTML = `Mercadoria: ${nome} <br>Novo Preço: R$ ${novoPreco.toFixed(2)}`;
}