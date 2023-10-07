const estudiantes = [];

function agregarEstudiante() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const identificacion = document.getElementById('identificacion').value;

    if (nombre && edad && identificacion) {
        estudiantes.push({ nombre, edad, identificacion });
        alert('Estudiante agregado con éxito.');
        
        // con esto limpio los campos
        document.getElementById('nombre').value = '';
        document.getElementById('edad').value = '';
        document.getElementById('identificacion').value = '';
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

function buscarEstudiante() {
    const buscarIdentificacion = document.getElementById('buscarIdentificacion').value;

    if (buscarIdentificacion) {
        const estudianteEncontrado = estudiantes.find(estudiante => estudiante.identificacion === buscarIdentificacion);

        if (estudianteEncontrado) {
            const resultado = `Nombre: ${estudianteEncontrado.nombre}, Edad: ${estudianteEncontrado.edad}, 
            Numero de Identificacion: ${estudianteEncontrado.identificacion}`;
            document.getElementById('resultado').textContent = resultado;
        } else {
            document.getElementById('resultado').textContent = 'Estudiante no encontrado.';
        }
    } else {
        alert('Por favor, ingresa un numero de identificacion valido.');
    }
}