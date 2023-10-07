function mostrarTabla() {
    const numero = parseInt(document.getElementById('numero').value);
    const filas = parseInt(document.getElementById('filas').value);

    if (isNaN(numero) || isNaN(filas)) {
        alert('Por favor, ingrese un numero y un numero de filas validos.');
        return;
    }

    let tabla = 'Tabla de Multiplicar del ' + numero + '';
    tabla += '<table><thead><tr></tr></thead><tbody>';

    for (let i = 1; i <= filas; i++) {
        const resultado = numero * i;
        tabla += '<tr><td>' + numero + ' x ' + i + '</td><td>' + resultado + '</td></tr>';
    }

    tabla += '</tbody></table>';
    
    document.getElementById('resultado').innerHTML = tabla;
}
