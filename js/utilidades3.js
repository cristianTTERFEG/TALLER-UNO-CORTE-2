function calcularEstadisticas() {
    const inputNumbers = document.getElementById('numbers').value;
    const numbersArray = inputNumbers.split(',').map(Number);

    if (inputNumbers.trim() === '') {
        alert('Por favor, ingrese una lista de numeros valida.');
        return;
    }

    const media = calcularMedia(numbersArray);
    const mediana = calcularMediana(numbersArray);
    const desviacionEstandar = calcularDesviacionEstandar(numbersArray);

    const resultado = `Media: ${media.toFixed(2)}, Mediana: ${mediana}, 
    Desviacion Estandar: ${desviacionEstandar.toFixed(2)}`;
    
    document.getElementById('resultado').textContent = resultado;
}

function calcularMedia(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

function calcularMediana(numbers) {
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedNumbers.length / 2);

    if (sortedNumbers.length % 2 === 0) {
        const median1 = sortedNumbers[middle - 1];
        const median2 = sortedNumbers[middle];
        return (median1 + median2) / 2;
    } else {
        return sortedNumbers[middle];
    }
}

function calcularDesviacionEstandar(numbers) {
    const media = calcularMedia(numbers);
    const sumSquaredDiffs = numbers.reduce((acc, num) => acc + Math.pow(num - media, 2), 0);
    const variance = sumSquaredDiffs / numbers.length;
    return Math.sqrt(variance);
}