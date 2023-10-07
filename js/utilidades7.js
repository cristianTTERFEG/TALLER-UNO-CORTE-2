function calcularInteresCompuesto() {
    const capitalInicial = parseFloat(document.getElementById('capitalInicial').value);
    const tasaInteres = parseFloat(document.getElementById('tasaInteres').value);
    const periodoAños = parseFloat(document.getElementById('periodoAños').value);

    if (isNaN(capitalInicial) || isNaN(tasaInteres) || isNaN(periodoAños)) {
        alert('Por favor, ingrese valores numericos validos.');
        return;
    }

    const tasaInteresDecimal = tasaInteres / 100;
    const montoFinal = capitalInicial * Math.pow(1 + tasaInteresDecimal, periodoAños);

    const resultado = `El monto final es de $${montoFinal.toFixed(2)}`;
    document.getElementById('resultado').textContent = resultado;
}
