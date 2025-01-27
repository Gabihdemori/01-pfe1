function calcularSalario() {
    let salario = Number(document.getElementById('salario').value);
    let numeroFilhos = Number(document.getElementById('numeroFilhos').value);
    let resultado = document.getElementById('resultado');
    const salarioFamiliaPorFilho = 45;
    let salarioFinal = salario;
    let salarioFamilia = 0;

    if (salario < 2000) {
        salarioFamilia = salarioFamiliaPorFilho * numeroFilhos;
        salarioFinal += salarioFamilia;
    }

    resultado.innerHTML = `Salário Família: R$ ${salarioFamilia.toFixed(2)} <br>Salário Final: R$ ${salarioFinal.toFixed(2)}`;
}