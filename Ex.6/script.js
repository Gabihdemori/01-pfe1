function determinarMaiorMenor() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let resultado = document.getElementById('resultado');

    let maior = Math.max(numero1, numero2);
    let menor = Math.min(numero1, numero2);

    resultado.innerHTML = `Maior Número: ${maior} <br>Menor Número: ${menor}`;
}