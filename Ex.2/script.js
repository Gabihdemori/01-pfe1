function classificarTriangulo() {
    let a = Number(document.getElementById('ladoA').value);
    let b = Number(document.getElementById('ladoB').value);
    let c = Number(document.getElementById('ladoC').value);
    let resultado = document.getElementById('resultado');

    if (a <= 0 || b <= 0 || c <= 0) {
        resultado.innerHTML = "Os lados devem ser maiores que zero.";
        return;
    }

    if (a === b && b === c) {
        resultado.innerHTML = "Triângulo EQUILÁTERO";
    } else if (a === b || b === c || a === c) {
        resultado.innerHTML = "Triângulo ISÓSCELES";
    } else {
        resultado.innerHTML = "Triângulo ESCALENO";
    }
}