function calcularEstadisticas(calificaciones) {
    if (calificaciones.length === 0) {
        return {
            promedio: 0,
            maximo: undefined,
            minimo: undefined
        };
    }

    let suma = 0;
    let maximo = calificaciones[0];
    let minimo = calificaciones[0];

    for (let i = 0; i < calificaciones.length; i++) {
        const calificacion = calificaciones[i];
        suma += calificacion;

        if (calificacion > maximo) {
            maximo = calificacion;
        }

        if (calificacion < minimo) {
            minimo = calificacion;
        }
    }

    const promedio = suma / calificaciones.length;

    return {
        promedio: promedio.toFixed(1),
        maximo,
        minimo
    };
}

function mostrarEstadisticas() {
    const calificacionesTexto = document.getElementById('calificaciones').value;
    const calificacionesArray = calificacionesTexto.split(',').map(Number);

    const estadisticas = calcularEstadisticas(calificacionesArray);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Promedio: ${estadisticas.promedio}</p>
        <p>Calificación mas alta: ${estadisticas.maximo}</p>
        <p>Calificación mas baja: ${estadisticas.minimo}</p>
    `;
}

