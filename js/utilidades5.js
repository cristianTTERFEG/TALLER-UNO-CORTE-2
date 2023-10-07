const preguntas = [
    {
        pregunta: "¿Cual es la capital de Colombia?",
        respuesta: "Bogota"
    },
    {
        pregunta: "¿Quien escribio 'Cien años de soledad'?",
        respuesta: "Gabriel Garcia Marquez"
    }
];

let puntuacion = 0;
let preguntaActual = 0;

function mostrarPregunta() {
    const preguntaDiv = document.getElementById('preguntaDiv');
    preguntaDiv.innerHTML = '';
    const pregunta = preguntas[preguntaActual];
    const respuestaUsuario = prompt(pregunta.pregunta);

    if (respuestaUsuario && respuestaUsuario.toLowerCase() === pregunta.respuesta.toLowerCase()) {
        puntuacion++;
    }

    preguntaActual++;

    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `Puntuación: ${puntuacion} de ${preguntas.length} respuestas correctas`;
}

function iniciarJuego() {
    puntuacion = 0;
    preguntaActual = 0;
    mostrarPregunta();
    document.getElementById('resultado').textContent = '';
}

