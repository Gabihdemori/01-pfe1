function encontrarMaior() {
    let numeros = [
        Number(document.getElementById('numero1').value),
        Number(document.getElementById('numero2').value),
        Number(document.getElementById('numero3').value),
        Number(document.getElementById('numero4').value),
        Number(document.getElementById('numero5').value),
        Number(document.getElementById('numero6').value)
    ];

    let maiorNumero = Math.max(...numeros);

    document.getElementById('resultado').innerHTML = `O maior número digitado é: ${maiorNumero}`;
}