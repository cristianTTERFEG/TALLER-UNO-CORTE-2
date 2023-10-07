function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, ingrese valores validos para peso y altura.');
        return;
    }

    const imc = peso / (altura * altura);
    let mensaje = '';

    if (imc < 18.5) {
        mensaje = `Tu IMC es ${imc.toFixed(2)}, estas en el rango de peso bajo.`;
    } else if (imc >= 18.5 && imc < 24.9) {
        mensaje = `Tu IMC es ${imc.toFixed(2)}, estas en el rango de peso normal.`;
    } else if (imc >= 25 && imc < 29.9) {
        mensaje = `Tu IMC es ${imc.toFixed(2)}, estas en el rango de sobrepeso.`;
    } else {
        mensaje = `Tu IMC es ${imc.toFixed(2)}, estas en el rango de obesidad.`;
    }

    document.getElementById('resultado').textContent = mensaje;
}
